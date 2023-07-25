const getImageFileType = async (image) => {
  try {
    const determineHeader = () => {
      const buf = image.slice(0, 4);
      const types = {
        jpg: [0xff, 0xd8, 0xff],
        png: [0x89, 0x50, 0x4e],
        gif: [0x47, 0x49, 0x46],
        webp: [0x57, 0x45, 0x42, 0x50],
      };

      for (const type in types) {
        if (types.hasOwnProperty(type) && types[type].every((v, i) => v === buf[i])) {
          return type;
        }
      }

      return '';
    };

    return determineHeader();
  } catch (err) {
    console.error('Error determining file type:', err);
  }
};

module.exports = getImageFileType;

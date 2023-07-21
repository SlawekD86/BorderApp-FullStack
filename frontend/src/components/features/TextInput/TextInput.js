import React from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';

const TextInput = ({ label, name, value, onChange, required, placeholder }) => {
  const inputClasses = classNames(styles.textInput, {
    [styles.required]: required,
  });

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
};

export default TextInput;

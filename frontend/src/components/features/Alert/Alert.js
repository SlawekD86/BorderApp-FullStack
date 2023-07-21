import React from 'react';
import classNames from 'classnames';
import styles from './Alert.module.scss';

const Alert = ({ type, message }) => {
  const alertClasses = classNames(styles.alert, {
    [styles.success]: type === 'success',
    [styles.info]: type === 'info',
    [styles.warning]: type === 'warning',
    [styles.danger]: type === 'danger',
  });

  return <div className={alertClasses}>{message}</div>;
};

export default Alert;

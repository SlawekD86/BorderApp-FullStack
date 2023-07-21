import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ onClick, children, variant }) => {
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.warning]: variant === 'warning',
    [styles.danger]: variant === 'danger',
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

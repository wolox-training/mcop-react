import React from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.scss';

interface Props {
  type: string;
  label: string;
  name: string;
  inputRef: (ref: HTMLInputElement) => void;
  error: FieldError | undefined;
}

function InputField({ type, label, name, inputRef, error }: Props): JSX.Element {
  return (
    <>
      <label htmlFor={name} className={styles.signupInputDescription}>
        {label}
      </label>
      <input type={type} name={name} autoComplete="off" ref={inputRef} className={styles.signupInput} />
      {error && <span className={styles.signupTextDanger}>{error.message}</span>}
    </>
  );
}

export default InputField;

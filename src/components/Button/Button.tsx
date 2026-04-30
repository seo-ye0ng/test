import * as React from "react";

import styles from "./Button.module.css";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export function Button({
  startIcon,
  endIcon,
  children,
  disabled,
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      className={[styles.root, className].filter(Boolean).join(" ")}
      disabled={disabled}
      type="button"
    >
      <span className={styles.content}>
        {startIcon ? <span className={styles.icon}>{startIcon}</span> : null}
        {children}
        {endIcon ? <span className={styles.icon}>{endIcon}</span> : null}
      </span>
    </button>
  );
}


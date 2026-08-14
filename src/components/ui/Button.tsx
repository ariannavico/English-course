import type { ButtonHTMLAttributes } from "react";
import styles from "./ui.module.css";

type Variant = "primary" | "default" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md";
  block?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  default: "",
  ghost: styles.ghost,
  danger: styles.danger,
};

export function Button({
  variant = "default",
  size = "md",
  block = false,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    styles.btn,
    variantClass[variant],
    size === "sm" ? styles.sm : "",
    block ? styles.block : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <button className={classes} {...rest} />;
}

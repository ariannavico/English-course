import { Link, type LinkProps } from "react-router-dom";
import styles from "./ui.module.css";

type Variant = "primary" | "default" | "ghost";

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  default: "",
  ghost: styles.ghost,
};

interface LinkButtonProps extends LinkProps {
  variant?: Variant;
  size?: "sm" | "md";
  block?: boolean;
}

/** A react-router <Link> styled as a button (valid HTML — no button>a nesting). */
export function LinkButton({
  variant = "default",
  size = "md",
  block = false,
  className = "",
  ...rest
}: LinkButtonProps) {
  const classes = [
    styles.btn,
    variantClass[variant],
    size === "sm" ? styles.sm : "",
    block ? styles.block : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <Link className={classes} {...rest} />;
}

import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const VARIANTS = {
  primary: "btn-primary",
  gold: "btn-gold",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

/**
 * Single source of truth for every button/CTA on the site.
 * Renders a <Link> for internal routes, an <a> for external URLs,
 * or a <button> for in-page actions — always via one consistent API.
 */
export default function Button({
  as,
  to,
  href,
  variant = "primary",
  className,
  children,
  icon: Icon,
  ...props
}) {
  const classes = cn(VARIANTS[variant] || VARIANTS.primary, className);
  const content = (
    <>
      {children}
      {Icon && <Icon className="text-base" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={props.target || "_blank"}
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

import cx from "classnames"
import PropTypes from "prop-types"
function Typography({ variant = "primary", size = "body", children, ...rest }) {
  return (
    <p className={
        cx("font-bold", 
        rest.className,
        {
          "text-red-500": variant === "error",
          "text-green-500": variant === "success",
          "text-blue-500": variant === "info",
          "text-white": variant === "primary",
          "text-3xl": size === "title",
          "text-xl": size === "subtitle",
          "text-base": size === "body",
        })
    } {...rest}>
        {children}
    </p>
  );
}

export default Typography

Typography.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "info"]),
  size: PropTypes.oneOf(["title", "subtitle", "body"]),
  children: PropTypes.node,
};
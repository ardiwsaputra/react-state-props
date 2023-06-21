import cx from "classnames"
import PropTypes from "prop-types"

function Button({ variant = "primary", children, ...rest }) {
  return (
    <div>
      <button className={cx("bg-white p-5 rounded w-32",{
        "bg-red-500 text-white": variant === "error",
        "bg-green-500 text-white": variant === "success",
        "bg-blue-500 text-white": variant === "info",
        "bg-white text-sky-800": variant === "primary",
      }, rest.className)} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "info", "primary"]),
  children: PropTypes.node,
}
//Create Button Interface
import { ButtonProps } from "../../interfaces";
import SearchIcon from "../../assets/searchIcon.svg";

import "./button.scss";

const Button = ({
	variant = "default",
	children,
	disabled = false,
}: ButtonProps) => {
	return (
		<button
			className={`button button--${variant} ${disabled ? "disabled" : ""}`}
		>
			{variant === "icon" && <img src={SearchIcon} alt="Search Icon" />}
			<div className="text">{children}</div>
		</button>
	);
};

export default Button;

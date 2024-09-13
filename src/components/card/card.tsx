import { CardProps } from "../../interfaces";

import "./card.scss";

const Card = ({ variant = "default", children }: CardProps) => {
	return <div className={`card card--${variant}`}>{children}</div>;
};

export default Card;

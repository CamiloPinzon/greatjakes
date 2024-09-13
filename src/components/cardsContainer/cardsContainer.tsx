import { CardsContainerProps } from "../../interfaces";

import "./cardsContainer.scss";

const CardsContainer = ({ children }: CardsContainerProps) => {
	return <div className="cards-container">{children}</div>;
};

export default CardsContainer;

import Separator from "./components/separator/separator";
import CardsContainer from "./components/cardsContainer/cardsContainer";
import Card from "./components/card/card";
import Button from "./components/button/button";
import CloseIcon from "./assets/close.svg";

import "./App.scss";

function App() {
	return (
		<div className="container">
			<div className="close-button">
				<img src={CloseIcon} alt="Close" />
			</div>
			<h1>Firm Facts</h1>
			<Separator />
			<section>
				<CardsContainer>
					<Card>
						<Button variant="icon">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
					<Card>
						<Button variant="icon">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
					<Card>
						<Button>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
					<Card>
						<Button variant="icon">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
					<Card variant="border">
						<Button variant="icon">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
					<Card variant="border">
						<Button variant="icon" disabled={true}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
					<Card variant="border">
						<Button variant="icon">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
							ipsum dolor sit amet consectetur adipisicing elit.
						</Button>
					</Card>
				</CardsContainer>
			</section>
		</div>
	);
}

export default App;

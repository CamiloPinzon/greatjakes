export interface ButtonProps {
	variant?: "default" | "icon";
	children: string;
	disabled?: boolean;
}

export interface CardProps {
	variant: "default" | "border";
	children: React.ReactNode;
}

export interface CardsContainerProps {
    children: React.ReactNode;
}
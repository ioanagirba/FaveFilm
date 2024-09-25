import { StyledCard } from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
  variant?: "collection" | "none";
  onClick?: () => void;
}

function Card({ children, variant, onClick }: CardProps) {
  return (
    <>
      <StyledCard onClick={onClick} variant={variant}>
        {children}
      </StyledCard>
    </>
  );
}

export default Card;

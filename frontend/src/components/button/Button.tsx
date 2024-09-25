import { StyledButton } from "./Button.styled";

interface ButtonProps {
  type: "primary" | "text" | "secondary" | "icon" | "tertiary";
  children: React.ReactNode;
  onClickFunction?: () => void;
  disable?: boolean;
}

const Button = ({ type, children, onClickFunction, disable }: ButtonProps) => {
  return (
    <StyledButton onClick={onClickFunction} type={type} disabled={disable}>
      {children}
    </StyledButton>
  );
};

export default Button;

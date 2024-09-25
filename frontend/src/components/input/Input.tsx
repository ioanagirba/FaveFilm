import { InputContainer, StyledInput, StyledLabel } from "./Input.styled";

interface InputProp {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, type, value, onChange }: InputProp) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} value={value} onChange={onChange} />
    </InputContainer>
  );
}

export default Input;

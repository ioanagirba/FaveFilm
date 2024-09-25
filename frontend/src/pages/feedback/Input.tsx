import { SetStateAction } from "react";
import {
  InputContainer,
  StyledInput,
  StyledLabel,
} from "./FeedbackForm.styled";

interface InputProp {
  label: string;
  defaultValue?: string;
  disable: boolean;
  value?: string;
  onChange?: (e: { target: { value: SetStateAction<string> } }) => void;
}

const Input = ({
  defaultValue,
  disable,
  label,
  value,
  onChange,
}: InputProp) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type="text"
        defaultValue={defaultValue}
        disabled={disable}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;

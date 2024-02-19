import PropTypes from "prop-types";
import { forwardRef } from "react";
import styled from "styled-components";

const InputComponent = styled.input`
  width: 100%;
  padding: 0.7rem 2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  width: 100%;

  span {
    margin-bottom: 0.75rem;
    text-transform: capitalize;
  }
`;

const Input = forwardRef(({ onChange, onBlur, name, label, type = "type" }, ref) => {
  return (
    <Label>
      <span>{label}</span>
      <InputComponent
        ref={ref}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    </Label>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;

import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import styled from "styled-components";
import Input from "../ui/Input";

import { updateUser } from "../features/userSlice";
import ControlledInput from "../ui/ControlledInput";

const Display = styled.div`
  width: 100dvw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const Form = styled.form`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button.attrs({ type: "submit" })`
  width: 100%;
  background-color: mediumseagreen;
  padding: 0.5rem 2rem;
`;

function TestForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Display>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="username"
          {...register("username", { required: "username is required" })}
          aria-invalid={errors.username?.message ? true : false}
        />
        {errors.username && <p role="alert">{errors.username?.message}</p>}

        <Input
          type="password"
          label="password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "the minimum password length should be 8",
            },
            maxLength: {
              value: 16,
              message: "the maximum password length should be 8",
            },
          })}
        />
        <ControlledInput control={control} name="select" />
        <Button>Continue</Button>
      </Form>
    </Display>
  );
}

connect(
  ({ username, password, select }) => ({ username, password }),
  updateUser
)(TestForm);

export default TestForm;

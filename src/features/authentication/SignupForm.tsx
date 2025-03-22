import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();

  const { errors } = formState;

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate={true} >
      <FormRow label="Full name" error={errors.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "Full name is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Email is not valid" },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "passwordConfirm is required",
            validate: (value) =>
              getValues("password") === value || "Passwords do not match",
          })}
        />
      </FormRow>

      <div className="flex gap-4">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </div>
    </Form>
  );
}

export default SignupForm;

import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({
  onSubmit,
  valid,
  values,
  onChangeFirst,
  onChangeLast,
  onChangeEmail,
  submitted,
}) {
  return (
    <form class="register-form" onSubmit={onSubmit}>
      {submitted && valid? (
        <div class="success-message">Success! Thank you for registering</div>
      ) : null}
      <Input
        InputValue={values.firstName}
        onChange={onChangeFirst}
        idInput="first-name"
        placeholder="First Name"
        nameInput="firstName"
      />
      {submitted && !values.firstName ?<span>Please enter a first name</span>: null}
      <Input
        InputValue={values.lastName}
        onChange={onChangeLast}
        idInput="last-name"
        placeholder="Last Name"
        nameInput="lastName"
      />
       {submitted && !values.lastName ?<span>Please enter a last name</span>: null}
      <Input
        InputValue={values.email}
        onChange={onChangeEmail}
        idInput="email"
        placeholder="Email"
        nameInput="email"
      />
       {submitted && !values.email ?<span>Please enter a email</span>: null}
      <Button />
    </form>
  );
}

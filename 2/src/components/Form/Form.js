import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({
  handleSumbit,
  submitted,
  valid,
  sample
}) {
  return (
    <form className="register-form" onSubmit={handleSumbit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        {sample.map((input, index) => {
          return (
            <Input
              key={index}
              submitted={submitted}
              inputValue={input.inputValue}
              setInputValue={input.name}
              placeholder={input.placeholder}
            />
          );
        })}
        <Button/>
      </form>
    // <form class="register-form" onSubmit={onSubmit}>
    //   {submitted && valid ? (
    //     <div class="success-message">Success! Thank you for registering</div>
    //   ) : null}
    //   {sample.map((el, index) => (
    //     <>
    //       <Input
    //         key={index}
    //         InputValue={`${InputValue}`}
    //         onChange={(e)=>{
    //           setInputValue(e.target.value)
    //         }}
    //         idInput={idInput}
    //         placeholder={placeholder}
    //       />
    //       {`${submitted && !InputValue ?(<span>Please enter a {el.placeholder}</span>) : null}`}
    //     </>
    //   ))}
    //   {/* <Input
    //     InputValue={values.lastName}
    //     onChange={onChangeLast}
    //     idInput="last-name"
    //     placeholder="Last Name"
    //     nameInput="lastName"
    //   />
    //    {submitted && !values.lastName ?<span>Please enter a last name</span>: null}
    //   <Input
    //     InputValue={values.email}
    //     onChange={onChangeEmail}
    //     idInput="email"
    //     placeholder="Email"
    //     nameInput="email"
    //   />
    //    {submitted && !values.email ?<span>Please enter a email</span>: null} */}
    //   <Button />
    // </form>
  );
}

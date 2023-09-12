export default function Input({ idInput, onChange, placeholder, nameInput, InputValue }) {
  return (
    <input
      value={InputValue}
      onChange={onChange}
      id={idInput}
      class="form-field"
      type="text"
      placeholder={placeholder}
      name={nameInput}
    />
  );
}

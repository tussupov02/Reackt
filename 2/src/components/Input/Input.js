export default function Input({ submitted, placeholder, setInputValue, inputValue }) {
  return (
    <>
    <input
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      className="form-field"
      type="text"
      placeholder={placeholder}
    />
    {submitted && !inputValue ? (
      <span>Please enter a {placeholder}</span>
    ) : null}
  </>
  );
}

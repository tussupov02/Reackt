import "../Form/Form.css"
export default function Form({ onClick, onChange, inputValue, onSubmit,name}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Book finder</h2>
      </div>
      <div className="form__book">
      <input
        type="text"
        placeholder="search a book"
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={onClick} disabled={name.length===0? true: false}>Search</button>
      </div>
    </form>
  );
}

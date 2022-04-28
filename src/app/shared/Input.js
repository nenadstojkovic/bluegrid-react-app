export default function Input(props) {
  return (
      <input 
        type={props.fieldType} 
        placeholder={props.fieldPlaceholder}
        value={props.value}
        onChange={props.fieldOnChange}
      />
  );
}
export default function Textarea(props) {
  return (
    <textarea
      rows='6'
      cols='50'
      placeholder={props.placeholder}
      onChange={props.fieldOnChange}
      value={props.value}
    />
  );
}

export default function Button(props) {
  return (
    <button
      onClick={props.buttonClick}
      title={props.buttonTitle}
      className={props.buttonClass}
    >
      {props.buttonText}
    </button>
  );
}

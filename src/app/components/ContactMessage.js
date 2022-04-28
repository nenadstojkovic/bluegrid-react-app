export default function ContactMessage(props) {
  return (
    <div className="form-wrapper">
      <h3>Your message is submitted!</h3>
      <span>{props.name}</span>
      <span>{props.email}</span>
      <span>{props.question}</span>
      <h3>Thank you {props.name}!</h3>
    </div>
  )
}
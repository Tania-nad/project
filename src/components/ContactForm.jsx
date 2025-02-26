import { useForm, ValidationError } from "@formspree/react";
import "../scss/layout/_contactForm.scss";
function ContactForm() {
  const [state, handleSubmit] = useForm("xqaevoqq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  } else {
    <p>Sorry, uncompleted fields!</p>;
  }
  return (
    <form className="my-form-class" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input className="name-input" id="name" type="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email</label>
      <input className="email-input" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Drop a message here</label>
      <textarea className="message-input" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="submit-button"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

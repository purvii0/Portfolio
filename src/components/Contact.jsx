import { useContext } from "react";
import "./styles/Contact.css";
import { ScrollContext } from "./contexts/ScrollContext";

function Contact() {
  const { connectRef } = useContext(ScrollContext);
  return (
    <div className="contact" ref={connectRef}>
      scontact
    </div>
  );
}
export default Contact;

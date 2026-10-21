
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "918807754570";
  const message = encodeURIComponent(
    "Hi KSquare Softtech, I need more details about your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;

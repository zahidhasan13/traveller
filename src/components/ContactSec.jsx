import { useRef } from "react";
import { useContactAnimation } from "../hooks/gsapAnimation";

const ContactSec = () => {
  const contactContainerRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactNameInputRef = useRef(null);
  const contactEmailInputRef = useRef(null);
  const contactMessageInputRef = useRef(null);
  const contactBtnInputRef = useRef(null);

  const contactRef = [
    contactTitleRef,
    contactNameInputRef,
    contactEmailInputRef,
    contactMessageInputRef,
    contactBtnInputRef,
  ];
  useContactAnimation(contactRef, contactContainerRef);
  return (
    <section id="contact" className="contact" ref={contactContainerRef}>
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title" ref={contactTitleRef}>
            Get in Touch
          </h2>
          <form className="form-control">
            <input type="text" placeholder="Name" ref={contactNameInputRef} />
            <input
              type="email"
              placeholder="Email"
              ref={contactEmailInputRef}
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Message"
              ref={contactMessageInputRef}
            ></textarea>
            <button className="btn-send" ref={contactBtnInputRef}>
              send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;

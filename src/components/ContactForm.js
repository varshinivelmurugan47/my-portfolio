import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

 const sendEmail = async (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  const response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.success) {
    alert("✅ Message sent successfully!");
    e.target.reset();
  } else {
    alert("❌ Failed to send message. Try again later.");
  }
};

  };

  return (
    <div style={styles.container}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <input type="text" name="from_name" placeholder="Your Name" required style={styles.input} />
        <input type="email" name="from_email" placeholder="Your Email" required style={styles.input} />
        <textarea name="message" placeholder="Your Message" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
      {isSent && <p style={{ color: 'green', marginTop: '10px' }}>✅ Message sent successfully!</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default ContactForm;

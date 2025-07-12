import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Contact = () => {
  
  const handle = (e) => {
    e.preventDefault();
  
    let obj = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value
    }
    console.log(obj)
    e.target[0].value = "";
    e.target[1].value = "";     
    e.target[2].value = "";     
  
  }
  return (
    <>
   <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Me</h2>

        {/* <div style={styles.info}>
          <p><strong>Name:</strong> Yella Krishna</p>
          <p><strong>Email:</strong> <a href="mailto:yellakrishna@example.com" style={styles.link}>yellakrishna@example.com</a></p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/yellakrishna" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/yellakrishna</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yellakrishna" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/yellakrishna</a></p>
        </div> */}

        {/* Message Form */}
        <form onSubmit={handle} style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>

      
    </section>
    </>
  )
}

const styles = {
  section: {
    backgroundColor: "white",
    padding: "50px 20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px 40px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "24px",
    color: "#333",
  },
  info: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "32px",
    lineHeight: "1.8",
  },
  link: {
    color: "#1e88e5",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#1e88e5",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  }
};


export default Contact

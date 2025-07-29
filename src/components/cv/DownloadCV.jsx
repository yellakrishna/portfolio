import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <div style={styles.container}>
      <a
        href="/Yella-Krishna-MERN-Stack-Developer-Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        <FaDownload style={{ marginRight: "8px" }} />
        Download CV
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "",
    marginTop: "30px",
    marginbottom: "0px",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#266d66ff", // Dark gray
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
};

// Export component
export default DownloadCV;

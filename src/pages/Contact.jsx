export default function Contact() {
  return (
    <div className="page-container" style={{
      padding: "5rem 3rem 2rem 3rem",
      maxWidth: "900px"
    }}>
      <h1 style={{ marginBottom: "2rem" }}><b>Contact</b></h1>
      
      <p style={{ marginBottom: "2rem" }}>
        Feel free to reach out! I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
      </p>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", fontWeight: 600 }}>Email</h2>
        <p>
          <a href="mailto:mtwchin@gmail.com">mtwchin@gmail.com</a>
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", fontWeight: 600 }}>LinkedIn</h2>
        <p>
          <a href="https://linkedin.com/in/matthewleechin" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/matthewleechin
          </a>
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", fontWeight: 600 }}>GitHub</h2>
        <p>
          <a href="https://github.com/balnc9" target="_blank" rel="noopener noreferrer">
            github.com/balnc9
          </a>
        </p>
      </div>

      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e0e0e0" }}>
        <p style={{ fontSize: "0.95rem", color: "#666" }}>
          Based in Washington DC Metro Area • Open to opportunities
        </p>
      </div>
    </div>
  );
}

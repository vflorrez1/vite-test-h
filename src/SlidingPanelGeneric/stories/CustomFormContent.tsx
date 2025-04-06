export const CustomFormContent = () => (
  <div
    style={{
      padding: "1.5rem",
      maxWidth: "100%",
      boxSizing: "border-box",
    }}
  >
    <h2
      style={{
        margin: "0 0 1rem",
        color: "#333",
        wordBreak: "break-word",
      }}
    >
      Custom Panel
    </h2>
    <p
      style={{
        color: "#666",
        lineHeight: 1.6,
        wordBreak: "break-word",
      }}
    >
      This panel demonstrates a custom form layout with 50% width.
    </p>
    <div
      style={{
        marginTop: "2rem",
        width: "100%",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div style={{ width: "100%" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#555",
              fontWeight: 500,
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#555",
              fontWeight: 500,
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <button
          type="button"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 500,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);

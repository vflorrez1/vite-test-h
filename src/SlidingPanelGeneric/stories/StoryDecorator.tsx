import React from "react";

export const StoryDecorator = (Story: React.ComponentType) => (
  <div
    style={{
      position: "relative",
      background: "#f5f5f5",
      padding: "2rem",
      fontFamily: "system-ui, -apple-system, sans-serif",
      minHeight: "200vh",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: "800px",
        minHeight: "600px",
        background: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ marginTop: 0, color: "#333" }}>Main Content</h1>
      <p style={{ color: "#666", lineHeight: 1.6 }}>
        This is the main content area of the page. The sliding panel will appear
        from the selected direction when opened. Try scrolling when the panel is
        open!
      </p>
      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#333" }}>Features</h2>
        <ul style={{ color: "#666", lineHeight: 1.6 }}>
          <li>Slides from any direction (right, left, top, bottom)</li>
          <li>Customizable size (0-100% of viewport)</li>
          <li>Adjustable z-index for layering</li>
          <li>Prevents main content scrolling when open</li>
          <li>Smooth transitions</li>
          <li>Flexible content</li>
        </ul>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#333" }}>Scroll Test Content</h2>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "#444" }}>Section {i + 1}</h3>
            <p style={{ color: "#666", lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </div>
    <Story />
  </div>
);

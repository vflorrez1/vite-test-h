import type { Meta, StoryObj } from "@storybook/react";
import { SlidingPanelGeneric } from "./SlidingPanelGeneric";

const meta = {
  title: "Components/SlidingPanelGeneric",
  component: SlidingPanelGeneric,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the panel is open or closed",
    },
    children: {
      control: "text",
      description: "Content to be displayed inside the panel",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          // height: "100vh",
          background: "#f5f5f5",
          padding: "2rem",
          fontFamily: "system-ui, -apple-system, sans-serif",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ marginTop: 0, color: "#333" }}>Main Content</h1>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            This is the main content area of the page. The sliding panel will
            appear from the right side when opened. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SlidingPanelGeneric>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base story with the panel closed
export const Closed: Story = {
  args: {
    isOpen: false,
    children: (
      <div style={{ padding: "1.5rem" }}>
        <h2 style={{ margin: "0 0 1rem", color: "#333" }}>Panel Content</h2>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          This is an example of panel content. The panel slides in from the
          right side of the screen.
        </p>
      </div>
    ),
  },
};

// Story with the panel open
export const Open: Story = {
  args: {
    isOpen: true,
    children: (
      <div style={{ padding: "1.5rem" }}>
        <h2 style={{ margin: "0 0 1rem", color: "#333" }}>Panel Content</h2>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          This is an example of panel content. The panel slides in from the
          right side of the screen.
        </p>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          You can close the panel by toggling the isOpen control below.
        </p>
      </div>
    ),
  },
};

// Story with custom content
export const WithCustomContent: Story = {
  args: {
    isOpen: true,
    children: (
      <div style={{ padding: "1.5rem" }}>
        <h2 style={{ margin: "0 0 1.5rem", color: "#333" }}>Custom Panel</h2>
        <form>
          <div style={{ marginBottom: "1.5rem" }}>
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
              }}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
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
            }}
          >
            Submit
          </button>
        </form>
      </div>
    ),
  },
};

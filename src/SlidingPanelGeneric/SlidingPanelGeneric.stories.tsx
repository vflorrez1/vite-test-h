import type { Meta, StoryObj } from "@storybook/react";
import {
  SlidingPanelGeneric,
  type SlideDirection,
} from "./SlidingPanelGeneric";

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
    direction: {
      control: "select",
      options: ["right", "left", "top", "bottom"],
      description: "The direction from which the panel slides",
    },
    size: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Size of the panel in percentage (0-100)",
    },
    zIndex: {
      control: "number",
      description: "Z-index of the panel (default: 3000)",
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
          background: "#f5f5f5",
          padding: "2rem",
          fontFamily: "system-ui, -apple-system, sans-serif",
          minHeight: "100vh",
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
            This is the main content area of the page. The sliding panel will
            appear from the selected direction when opened.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#333" }}>Features</h2>
            <ul style={{ color: "#666", lineHeight: 1.6 }}>
              <li>Slides from any direction (right, left, top, bottom)</li>
              <li>Customizable size (0-100% of viewport)</li>
              <li>Adjustable z-index for layering</li>
              <li>Smooth transitions</li>
              <li>Flexible content</li>
            </ul>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SlidingPanelGeneric>;

export default meta;
type Story = StoryObj<typeof meta>;

const PanelContent = ({
  direction,
  size,
}: {
  direction: SlideDirection;
  size: number;
}) => (
  <div style={{ padding: "1.5rem" }}>
    <h2 style={{ margin: "0 0 1rem", color: "#333" }}>Panel Content</h2>
    <p style={{ color: "#666", lineHeight: 1.6 }}>
      This panel slides in from the {direction} and takes up {size}% of the
      viewport.
    </p>
    <p style={{ color: "#666", lineHeight: 1.6 }}>
      You can change the direction and size using the controls below.
    </p>
  </div>
);

// Base story with the panel closed
export const Closed: Story = {
  args: {
    isOpen: false,
    direction: "right",
    size: 25,
    children: <PanelContent direction="right" size={25} />,
  },
};

// Right panel (default)
export const FromRight: Story = {
  args: {
    isOpen: true,
    direction: "right",
    size: 25,
    children: <PanelContent direction="right" size={25} />,
  },
};

// Left panel
export const FromLeft: Story = {
  args: {
    isOpen: true,
    direction: "left",
    size: 25,
    children: <PanelContent direction="left" size={25} />,
  },
};

// Top panel
export const FromTop: Story = {
  args: {
    isOpen: true,
    direction: "top",
    size: 25,
    children: <PanelContent direction="top" size={25} />,
  },
};

// Bottom panel
export const FromBottom: Story = {
  args: {
    isOpen: true,
    direction: "bottom",
    size: 25,
    children: <PanelContent direction="bottom" size={25} />,
  },
};

// Story with custom content
export const WithCustomContent: Story = {
  args: {
    isOpen: true,
    direction: "right",
    size: 50,
    children: (
      <div style={{ padding: "1.5rem" }}>
        <h2 style={{ margin: "0 0 1rem", color: "#333" }}>Custom Panel</h2>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          This panel demonstrates a custom form layout with 50% width.
        </p>
        <div style={{ marginTop: "2rem" }}>
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
      </div>
    ),
  },
};

// Story demonstrating z-index layering
export const LayeredPanels: Story = {
  args: {
    isOpen: true,
    direction: "right",
    size: 25,
  },
  render: (args) => (
    <>
      <SlidingPanelGeneric
        {...args}
        size={40}
        zIndex={2000}
        children={
          <div style={{ padding: "1.5rem", background: "#f8f8f8" }}>
            <h2 style={{ margin: "0 0 1rem", color: "#333" }}>
              Background Panel
            </h2>
            <p style={{ color: "#666", lineHeight: 1.6 }}>
              This panel has a lower z-index (2000) and is 40% wide
            </p>
          </div>
        }
      />
      <SlidingPanelGeneric
        {...args}
        zIndex={3000}
        children={
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ margin: "0 0 1rem", color: "#333" }}>
              Foreground Panel
            </h2>
            <p style={{ color: "#666", lineHeight: 1.6 }}>
              This panel has a higher z-index (3000) and is 25% wide
            </p>
          </div>
        }
      />
    </>
  ),
};

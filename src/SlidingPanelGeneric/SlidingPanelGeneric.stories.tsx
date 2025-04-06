import type { Meta, StoryObj } from "@storybook/react";
import { SlidingPanelGeneric } from "./SlidingPanelGeneric";
import { StoryDecorator } from "./stories/StoryDecorator";
import { PanelContent } from "./stories/PanelContent";
import { CustomFormContent } from "./stories/CustomFormContent";

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
    preventScroll: {
      control: "boolean",
      description:
        "Whether to prevent scrolling of the main content when panel is open (default: true)",
    },
    children: {
      control: "text",
      description: "Content to be displayed inside the panel",
    },
  },
  decorators: [StoryDecorator],
} satisfies Meta<typeof SlidingPanelGeneric>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    children: <CustomFormContent />,
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

import type { Meta, StoryObj } from "@storybook/react";
import { ImageOverlayPanel } from "./ImageOverlayPanel";

const meta = {
  title: "Components/ImageOverlayPanel",
  component: ImageOverlayPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: {
      control: "text",
      description: "URL of the background image",
    },
    overlayHeight: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      description: "Height of the overlay as a percentage of container height",
    },
    overlayColor: {
      control: "color",
      description: "Color of the overlay",
    },
  },
} satisfies Meta<typeof ImageOverlayPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://picsum.photos/800/400",
    overlayHeight: 50,
    overlayColor: "black",
    style: { width: "800px", height: "400px" },
    children: (
      <div style={{ color: "white" }}>
        <h2>Content Title</h2>
        <p>This is some example content that appears in the overlay.</p>
      </div>
    ),
  },
};

export const TallOverlay: Story = {
  args: {
    ...Default.args,
    overlayHeight: 75,
  },
};

export const LightOverlay: Story = {
  args: {
    ...Default.args,
    overlayColor: "white",
    children: (
      <div style={{ color: "black" }}>
        <h2>Light Overlay</h2>
        <p>This overlay has a light color.</p>
      </div>
    ),
  },
};

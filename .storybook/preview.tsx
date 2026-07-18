import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";
import { notoSans } from "@/lib/fonts";
import { background } from "storybook/theming";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        dir="rtl"
        lang="fa"
        className={`${notoSans.variable} font-sans antialiased`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    layout: "centered",
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#1A1A1A" },
        light: { name: "Light", value: "#FEFEFE" },
      },
    },
  },
  tags: ["autodocs", "dev"],
  initialGlobals: {
    background:{value: 'light'}
  }
};

export default preview;

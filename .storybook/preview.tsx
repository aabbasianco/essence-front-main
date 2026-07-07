import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import { notoSans } from "@/lib/fonts";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div dir="rtl" lang="fa" className={`${notoSans.variable} font-sans antialiased text-center`}>
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
      test: 'todo',
    },
  },
}

export default preview;
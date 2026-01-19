import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/timer.test.ts"],
    // browser: {
    //   enabled: true,
    //   provider: playwright(),
    //   instances: [
    //     {
    //       browser: "chromium",
    //     },
    //   ],
    // },
  },
});

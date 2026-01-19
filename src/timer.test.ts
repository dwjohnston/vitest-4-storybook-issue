import { it, vi, expect } from "vitest";

vi.useFakeTimers();
async function waitTenSeconds() {
  await new Promise((res) => {
    setTimeout(res, 10000);
  });

  return 99;
}
it("timer test", async () => {
  const prom = waitTenSeconds();

  vi.runAllTimers();

  const result = await prom;

  expect(result).toBe(99);
});

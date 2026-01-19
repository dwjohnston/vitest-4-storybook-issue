import { describe, expect, it } from "vitest";
import { computed, ref } from "vue";

describe("objectContainging", () => {
  it("does not match in v4", () => {
    const result = {
      data: {
        a: computed(() => "hello"),
        b: computed(() => "world"),
      },
    };

    console.log(result.data);

    expect(result.data).toEqual(
      expect.objectContaining({
        a: "hello",
      })
    );
  });
});

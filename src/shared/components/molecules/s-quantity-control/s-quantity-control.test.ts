import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SQuantityControl from "./s-quantity-control.vue";

test("Mount quantity control component", async () => {
  expect(SQuantityControl).toBeTruthy();

  const wrapper = mount(SQuantityControl, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-quantity-control")).toBe(true);
});

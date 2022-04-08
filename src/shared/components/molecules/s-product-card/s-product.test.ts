import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SProductCard from "./s-product-card.vue";

test("Mount product cart component", async () => {
  expect(SProductCard).toBeTruthy();

  const wrapper = mount(SProductCard, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-product-card")).toBe(true);
});

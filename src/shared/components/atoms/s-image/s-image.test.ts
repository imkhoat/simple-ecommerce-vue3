import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SImage from "./s-image.vue";

test("Mount image component", async () => {
  expect(SImage).toBeTruthy();

  const wrapper = mount(SImage, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-image")).toBe(true);
});

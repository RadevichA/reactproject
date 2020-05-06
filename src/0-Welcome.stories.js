import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome,
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />;

ToStorybook.story = {
  name: "to Storybook",
};

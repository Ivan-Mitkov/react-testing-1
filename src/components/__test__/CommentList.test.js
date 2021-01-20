import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "../../Root";

let wrapped = null;

beforeEach(() => {
  const initialState = { comments: ["comment 1", "comment 2"] };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  //clean up code unmount component from DOM
  wrapped.unmount();
});

it("should create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

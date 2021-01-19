import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped = null;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  //clean up code unmount component from DOM
  wrapped.unmount();
});

//Using full DOM Rendering but can use static
//https://enzymejs.github.io/enzyme/docs/api/mount.html
it("should has a text area and a button", () => {
  //find html elements
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

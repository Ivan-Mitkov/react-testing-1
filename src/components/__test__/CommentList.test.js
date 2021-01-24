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
it("should show the text for each comment", () => {
  //Different ways to find li text in wrapped element Enzyme and Cheerio
  //https://cheerio.js.org/Cheerio.html#text
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
  expect(wrapped.find("li").first().render().text()).toEqual("comment 1");
  expect(wrapped.find("li").at(1).render().text()).toEqual("comment 2");
  expect(wrapped.find("li").last().render().text()).toEqual("comment 2");
  expect(wrapped.find("ul").childAt(1).last().render().text()).toEqual(
    "comment 2"
  );
  expect(wrapped.find("ul").children().first().render().text()).toEqual(
    "comment 1"
  );
});

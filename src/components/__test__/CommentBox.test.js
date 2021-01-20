import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "../../Root";
let wrapped = null;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
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

describe("test events", () => {
  beforeEach(() => {
    //find the text area
    //simulate event https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "Test text" } });

    //force component to update
    // https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/update.html
    wrapped.update();
  });
  it("should has a text area that users can type in", () => {
    //https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/text.html
    expect(wrapped.find("textarea").text()).toEqual("Test text");
    // https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/prop.html
    expect(wrapped.find("textarea").prop("value")).toEqual("Test text");
  });

  it("should empty text area after submit", () => {
    wrapped.find("form").simulate("submit");
    //simulate update component after setState()
    wrapped.update();
    expect(wrapped.find("textarea").text()).toEqual("");
  });
});

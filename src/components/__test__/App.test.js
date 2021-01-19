import React from "react";
import { shallow } from "enzyme";
// import ReactDOM from "react-dom";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped = null;
beforeEach(() => {
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html
  // Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
  wrapped = shallow(<App />);
});
it("should show a CommentBox", () => {
  //expect to have one CommentBox
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("should show a CommentList", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

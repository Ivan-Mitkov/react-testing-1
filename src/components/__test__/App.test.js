import React from "react";
import { shallow } from "enzyme";
// import ReactDOM from "react-dom";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

it("should show a CommentBox", () => {
  //Check if the Comment Box is rendered in App
  //NOT good App knows what Comment box is rendering
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain("Comment Box");
  // ReactDOM.unmountComponentAtNode(div);

  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html
  // Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
  const wrapped = shallow(<App />);
  //expect to have one CommentBox
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("should show a CommentList", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});

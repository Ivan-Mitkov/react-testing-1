import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import App from "../components/App";

//https://github.com/axios/moxios
beforeEach(async () => {
  // import and pass your custom axios instance to this method
  moxios.install();
  // Match against an exact URL value intercept this request
  //second arg obj to return
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Comment" }, { name: "Comment1" }],
  });
});

afterEach(() => {
  // import and pass your custom axios instance to this method
  moxios.uninstall();
});
it("can fetch a list of comments and display them", (done) => {
  //atempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find fetch comments button and click it
  const btn = wrapped.find("button.fetch_button");
  expect(btn.length).toEqual(1);
  //simulate click
  btn.simulate("click");
  //get li s for comments
  //introduce tiny pause for waiting moxios response
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
  });

  //expect to fin a list of comments
});
// jest.setup.js
// jest.setTimeout(10000);

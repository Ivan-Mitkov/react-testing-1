import commentsReducer from "reducers/comments.js";
import { SAVE_COMMENT } from "actions/types";

it("should handles actions of type save comments ", () => {
  //create action
  const action = { type: SAVE_COMMENT, payload: "Test new comment" };
  //pass state and action to reducer
  const newState = commentsReducer([], action);
  //verify state
  expect(newState).toEqual(["Test new comment"]);
});
//default case in reducer
it("should handles actions of unknown type ", () => {
  //create action
  const action = { type: "NONEXISTING", payload: "Test new comment" };
  //pass state and action to reducer
  const newState = commentsReducer([], action);
  //verify state
  expect(newState).toEqual([]);
});

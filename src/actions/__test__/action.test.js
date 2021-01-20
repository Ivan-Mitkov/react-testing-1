import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("Save comment", () => {
  it("should have the correct type ", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("should have the correct payload ", () => {
    const action = saveComment("Hello");
    expect(action.payload).toEqual("Hello");
  });
});

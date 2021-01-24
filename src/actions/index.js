import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, ERROR_FETCH_COMMENTS } from "./types";

export const saveComment = (comment) => {
  return { type: SAVE_COMMENT, payload: comment };
};
export const fetchComments = async () => {
  try {
    const data = await axios.get(
      "http://jsonplaceholder.typicode.com/comments"
    );
    return { type: FETCH_COMMENTS, payload: data };
  } catch (error) {
    return { type: ERROR_FETCH_COMMENTS };
  }
};

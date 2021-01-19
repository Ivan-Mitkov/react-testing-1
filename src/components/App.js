import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
const App = () => {
  return (
    <div>
      App component
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;

import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/";

class CommentBox extends React.Component {
  state = {
    comment: "",
  };
  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  handleFetch = () => {
    this.props.fetchComments();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch_button" onClick={this.handleFetch}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);

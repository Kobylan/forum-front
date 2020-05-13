import React from "react"
import { connect } from "react-redux"
import {
  getComments,
  addNewComment
} from "../../../redux/actions/comments"
import {Button, CardBody, Input, Label} from "reactstrap";
import {MessageSquare, ThumbsDown, ThumbsUp} from "react-feather";
const authorID = {
  id: 1,
  nickname:"Pirozhok"
}
class CommentList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.comments.comments.routeParam !== state.currentLocation) {
      return {
        comments: props.comments.comments.comments
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    comments: null,
    parsed: false,
    newComment: {
      author: authorID,
      post_id: this.props.postId,
      content: ""
    }
  }
  async componentDidMount() {
    await this.props.getComments(this.props.postId)
    this.setState({
      comments: this.props.comments.comments.comments,
      parsed: true
    })
  }


  render() {
    const {comments, commentsNum, likesNum, dislikesNum} = this.state
    console.log("coments", this.state.comments)
    let renderComments =
      this.state.parsed && this.state.comments !== null ? (
          comments.map((comment, i) => (
        <div key={i} className="d-flex justify-content-start align-items-center mb-1">
          <div className="comment-info pl-1">
            <h6 className="mb-0">{comment.author.nickname}</h6>
            <span className="font-small-2">
              {comment.content}
            </span>
          </div>
        </div>
            ))
      ) : (
        <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
          No comments at this time
        </p>
      )

    return (
      <React.Fragment>
        {renderComments}
        <fieldset className="form-label-group mb-50">
          <Input
            type="textarea"
            rows="3"
            placeholder="Add Comment"
            id="add-comment"
            value={this.state.newComment.content}
            onChange={e =>{
              this.setState({ newComment : {
                  ...this.state.newComment,
                  content : e.target.value
                } })
            }}
          />
          <Label for="add-comment">Add Comment</Label>
        </fieldset>
        <Button.Ripple
          size="sm"
          color="primary"
          onClick={() => {
            this.props.addNewComment(this.state.newComment)
            this.setState({
              newComment: {
                author:authorID,
                post_id: this.props.postId,
                content: ""
              }
            })
          }}
          disabled={
           this.state.newComment.content.trim().length <= 0
          }
        >
          Post Comment
        </Button.Ripple>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, {
  addNewComment,
  getComments
})(CommentList)



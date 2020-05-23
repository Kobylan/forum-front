import React from "react";
import { connect } from "react-redux";
import { addNewComment, getComments } from "../../../redux/actions/comments";
import { Button } from "reactstrap";
import bold from "../../../assets/svgIconsToolbar/bold.svg";
import italic from "../../../assets/svgIconsToolbar/italic.svg";
import code from "../../../assets/svgIconsToolbar/code.svg";
import unordered from "../../../assets/svgIconsToolbar/unordered.svg";
import ordered from "../../../assets/svgIconsToolbar/ordered.svg";
import indent from "../../../assets/svgIconsToolbar/indent.svg";
import outdent from "../../../assets/svgIconsToolbar/outdent.svg";
import link from "../../../assets/svgIconsToolbar/link.svg";
import unlink from "../../../assets/svgIconsToolbar/unlink.svg";
import undo from "../../../assets/svgIconsToolbar/undo.svg";
import redo from "../../../assets/svgIconsToolbar/redo.svg";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";
import { ThumbsDown, ThumbsUp } from "react-feather";
import { Reaction } from "../../../redux/actions/forum/index";

const authorID = {
  id: 1,
  nickname: "Pirozhok",
};
class CommentList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.comments.comments.routeParam !== state.currentLocation) {
      return {
        comments: props.comments.comments.comments,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  state = {
    comments: null,
    parsed: false,
    editorState: EditorState.createEmpty(),
    newComment: {
      author: authorID,
      post_id: this.props.postId,
      content: "",
    },
  };
  async componentDidMount() {
    await this.props.getComments(this.props.postId);
    this.setState({
      comments: this.props.comments.comments.comments,
      parsed: true,
    });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState: editorState,
      newComment: {
        ...this.state.newComment,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      },
    });
  };

  render() {
    const { comments, editorState } = this.state;
    console.log("coments", this.state.comments);
    let renderComments =
      this.state.parsed && this.state.comments !== null ? (
        comments.map((comment, i) => (
          <div
            key={i}
            className="d-flex justify-content-start align-items-center mb-1"
          >
            <div className="comment-info pl-1">
              <h6 className="mb-1">{comment.author.nickname}</h6>
              <span className="font-small-2">
                <td dangerouslySetInnerHTML={{ __html: comment.content }} />
              </span>
              <div className="d-flex align-items-center">
                <a
                  href={"/"}
                  className="pr-2 "
                  onClick={(e) =>
                    this.props.Reaction(
                      {
                        author_id: 1,
                        type: 1,
                        post_id: 0,
                        comment_id: comment.id,
                      },
                      this.props.postId
                    )
                  }
                >
                  <ThumbsUp size={15} className="" /> {comment.likes}
                </a>
                <a
                  href={"/"}
                  onClick={(e) => {
                    this.props.Reaction(
                      {
                        author_id: 1,
                        type: 0,
                        post_id: 0,
                        comment_id: comment.id,
                      },
                      this.props.postId
                    );
                  }}
                >
                  <ThumbsDown size={15} /> {comment.dislikes}
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
          No comments at this time
        </p>
      );

    return (
      <React.Fragment>
        {renderComments}
        <fieldset className="form-label-group mb-50">
          <Editor
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper"
            editorClassName="comment-editor"
            editorState={editorState}
            toolbar={{
              options: ["inline", "blockType", "list", "link", "history"],
              inline: {
                options: ["bold", "italic", "monospace"],
                bold: { icon: bold },
                italic: { icon: italic },
                monospace: { icon: code, title: "Code" },
              },
              blockType: {
                options: ["Normal", "Blockquote", "Code"],
              },
              list: {
                options: ["unordered", "ordered", "indent", "outdent"],
                unordered: { icon: unordered, className: undefined },
                ordered: { icon: ordered, className: undefined },
                indent: { icon: indent, className: undefined },
                outdent: { icon: outdent, className: undefined },
              },
              link: {
                options: ["link", "unlink"],
                link: { icon: link, className: undefined },
                unlink: { icon: unlink, className: undefined },
              },
              history: {
                options: ["undo", "redo"],
                undo: { icon: undo, className: undefined },
                redo: { icon: redo, className: undefined },
              },
            }}
            onEditorStateChange={this.onEditorStateChange}
          />
        </fieldset>
        <Button.Ripple
          size="sm"
          color="primary"
          onClick={() => {
            this.props.addNewComment(this.state.newComment);
            this.setState({
              newComment: {
                author: authorID,
                post_id: this.props.postId,
                content: "",
              },
            });
          }}
          disabled={
            this.state.editorState.getCurrentContent().getPlainText().trim()
              .length === 0
          }
        >
          Post Comment
        </Button.Ripple>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  addNewComment,
  Reaction,
  getComments,
})(CommentList);

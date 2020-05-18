import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import { getTopic, Reaction } from "../../redux/actions/forum/index";
import TimeAgo from "react-timeago/lib";
import "animate.css";
import "../../assets/scss/pages/posts.scss";
import { MessageSquare, ThumbsDown, ThumbsUp } from "react-feather";
import { GetCategories } from "./GetCategories";
import CommentList from "./Comments/CommentList";
class Posts extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.app.forum.routeParam !== state.currentLocation) {
      return {
        topic: props.app.forum.topic,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  state = {
    topic: null,
    parsed: false,
    currentLocation: this.props.match.params.id,
  };
  async componentDidMount() {
    await this.props.getTopic(this.props.match.params.id);
    this.setState({
      topic: this.props.app.forum.topic,
      parsed: true,
    });
  }

  render() {
    const { topic } = this.state;
    console.log("lololol", topic);
    let renderTopic = this.state.parsed ? (
      <Card
        className={"animated fadeInUp faster col-sm-12 col-md-8 offset-md-2"}
      >
        <CardHeader>
          <small className="text-muted">
            {topic.categories.length > 0 ? (
              <GetCategories categories={topic.categories} />
            ) : null}{" "}
            Posted by {topic.author.nickname}{" "}
            <TimeAgo date={getTime(topic.creation_date)} />
          </small>
        </CardHeader>
        <CardHeader>
          <CardTitle>{topic.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <td dangerouslySetInnerHTML={{ __html: topic.content }} />

          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="d-flex align-items-center">
              <div
                className="pr-2 cursor-pointer"
                onClick={(e) =>
                  this.props.Reaction({
                    author_id: 1,
                    type: 1,
                    post_id: topic.id,
                    comment_id: 0,
                  })
                }
              >
                <ThumbsUp size={15} className="" /> {topic.likes}
              </div>
              <div
                className={"cursor-pointer"}
                onClick={(e) => {
                  this.props.Reaction({
                    author_id: 1,
                    type: 0,
                    post_id: topic.id,
                    comment_id: 0,
                  });
                }}
              >
                <ThumbsDown size={15} /> {topic.dislikes}
              </div>
            </div>
            <p className="ml-auto">
              <MessageSquare size={15} /> {topic.comments}
            </p>
          </div>
          <CommentList postId={topic.id} />
        </CardBody>
      </Card>
    ) : null;

    return renderTopic;
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.forumApp,
  };
};
export default connect(mapStateToProps, {
  getTopic,
  Reaction,
})(Posts);

const getTime = (unix) => {
  var a = new Date(unix * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
};

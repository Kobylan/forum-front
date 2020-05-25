import React from "react";
import { Card, CardBody } from "reactstrap";
import {
  Heart,
  MessageSquare,
  PenTool,
  ThumbsDown,
  ThumbsUp,
} from "react-feather";
import { getMyTopics } from "../../../redux/actions/forum";
import { connect } from "react-redux";
import TimeAgo from "react-timeago/lib";
import { getTime } from "../../../forum/Posts/components/getTime";
import { Link } from "react-router-dom";

class MyPosts extends React.Component {
  state = {
    topics: [],
  };
  async componentDidMount() {
    await this.props.getMyTopics();
    this.setState({
      topics: this.props.app.forum.my,
    });
  }
  render() {
    return this.state.topics && this.state.topics.length !== 0 ? (
      this.state.topics.map((topic) => (
        <Card>
          {console.log("=", topic)}
          <CardBody>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="user-page-info">
                <small className="text-muted">
                  Posted by {topic.author.nickname}{" "}
                  <TimeAgo date={getTime(topic.creation_date)} />
                </small>
              </div>
              <div className="ml-auto user-like">
                <PenTool color="#7367f0" />
              </div>
            </div>
            <Link to={"/post/" + topic.id}>
              <p>{topic.title}</p>
            </Link>
            <div className="d-flex justify-content-start align-items-center  mt-1">
              <div
                className="align-items-center"
                style={{ color: topic.user_reaction === 1 ? "#7367f0" : "" }}
              >
                <ThumbsUp size={15} /> {topic.likes}
              </div>
              <div
                className="align-items-center ml-1"
                style={{ color: topic.user_reaction === 0 ? "#7367f0" : "" }}
              >
                <ThumbsDown size={15} /> {topic.dislikes}
              </div>
              <div className="ml-auto ">
                <MessageSquare size={15} /> {topic.comments}
              </div>
            </div>
          </CardBody>
        </Card>
      ))
    ) : (
      <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
        No topics at this time
      </p>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.forumApp,
  };
};
export default connect(mapStateToProps, {
  getMyTopics,
})(MyPosts);

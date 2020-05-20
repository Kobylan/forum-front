import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  NavItem,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import { getTopics } from "../../redux/actions/forum/index";
import TimeAgo from "react-timeago/lib";
import { GetCategories } from "./GetCategories";
import "animate.css";
import "../../assets/scss/pages/posts.scss";
import { MessageSquare, ThumbsDown, ThumbsUp } from "react-feather";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

class Posts extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.app.forum.routeParam !== state.currentLocation) {
      return {
        topics: props.app.forum.topics,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
  state = {
    topics: [],
    currentLocation: this.props.location.pathname,
    value: "",
  };
  async componentDidMount() {
    await this.props.getTopics(this.props.match.params);
    this.setState({
      topics: this.props.app.forum.topics,
    });
  }

  render() {
    const { topics, value } = this.state;
    let topicsArr = value.length ? this.props.app.forum.filteredTopics : topics;
    return topicsArr.length > 0 ? (
      topicsArr.map((topic, i) => {
        return (
          <Card
            className={
              "animated fadeInUp faster col-sm-12 col-md-8 offset-md-2"
            }
            style={{
              display: "grid",
              gridTemplateColumns: "auto max-content",
            }}
          >
            <div className={"text-overflow"}>
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
                <Link to={"/post/" + topic.id}>
                  <CardTitle>{topic.title}</CardTitle>
                </Link>
              </CardHeader>
              <CardBody>{ReactHtmlParser(topic.content)}</CardBody>
            </div>
            <div className="views ">
              <div
                className="m-0 position-relative"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <NavItem>
                  <NavLink style={{ cursor: "default" }}>
                    <MessageSquare size={15} /> {topic.comments}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "default" }}>
                    <ThumbsUp size={15} /> {topic.likes}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "default" }}>
                    <ThumbsDown size={15} /> {topic.dislikes}
                  </NavLink>
                </NavItem>
              </div>
            </div>
          </Card>
        );
      })
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
  getTopics,
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

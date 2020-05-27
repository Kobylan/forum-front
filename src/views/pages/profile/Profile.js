import React from "react";
import { Row, Col } from "reactstrap";
import MyPosts from "../../../forum/Posts/MyPosts";

import "../../../assets/scss/pages/users-profile.scss";
import LikedPosts from "../../../forum/Posts/LikedPosts";

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="user-profile">
          <div id="profile-info">
            <Row>
              <Col lg="6" md="12">
                <div className="group-area">
                  <h4>My posts</h4>
                </div>
                <MyPosts />
              </Col>
              <Col lg="6" md="12">
                <div className="group-area">
                  <h4>Liked posts</h4>
                </div>
                <LikedPosts />
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;

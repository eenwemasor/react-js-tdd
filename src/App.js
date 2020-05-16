import React, { Component } from "react";
import Header from "./component/header";
import HeaderLine from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideBtn: false,
    };
  }

  hideBtnMethod = () => {
    const { hideBtn } = this.state;

    this.setState({
      hideBtn: !hideBtn,
    });
  };

  returnValueMethod = (value) => {
    return value+1;
  };

  fetch = () => {
    this.props.fetchPosts();
    this.hideBtnMethod();
  };
  render() {
    const configButton = {
      buttonText: "Got posts",
      emitEvent: this.fetch,
    };
    const { posts } = this.props;
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <HeaderLine
            header="Posts"
            desc="Install Jest, and its Babel integrations, as recommended in the Jest docs. Install enzyme. Then, simply require/import React, enzyme functions, and your module at the top of a test file."
          />
          {!this.state.hideBtn  && <SharedButton {...configButton} />}
          {posts.length > 0 && (
            <>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return (
                  <div key={index}>
                    <ListItem {...configListItem} />
                  </div>
                );
              })}
            </>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Default",
        location: "Location",
        contact: "@gmail.com",
        avatar_url:
          "https://avatars.githubusercontent.com/u/25250253?s=400&v=4",
      },
    };
  }
  async componentDidMount() {
    console.log("User component mounted.");
    const data = await fetch("https://api.github.com/users/navkant9");
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.name,
        location: "Ghaziabad",
        contact: "navkant.tyagi9@gmail.com",
        avatar_url: json.avatar_url,
      },
    });
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Contact: {this.props.data.contact}</h4>
        <h6>{this.state.count}</h6>
        <button
          onClick={() => {
            // never update state variables directly
            // this.state.count += 1
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default UserClass;

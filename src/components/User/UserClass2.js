import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("child2 constructor");
  }

  componentDidMount() {
    console.log("child2 componentdidmount");
  }
  //this.state is big object
  //when creating instance of call, constructor is called
  //best place to cerate state variable
  render() {
    console.log("child2 render");
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Class Component2</h1>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            this.setState({
              //way to change the state
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <p>Count2: {count2}</p>
        <button>Count2 inc</button>
        <h2>Name: {name}</h2>
        <h3>Location: Vancouver</h3>
        <h4>Contact: @sannak6666</h4>
      </div>
    );
  }
}

export default UserClass2;

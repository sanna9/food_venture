// import React from "react";
// import User from "./User/User";
// import UserClass from "./User/UserClass";

// function About() {
//   return (
//     <div>
//       <User name={"Sandeep K"} />
//       <UserClass name={"Sanna K"} />
//     </div>
//   );
// }

// export default About;

import React from "react";
import User from "./User/User";
import UserClass from "./User/UserClass";
import UserClass2 from "./User/UserClass2";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentdidmount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <User name={"Sandeep K"} />
        <UserClass name={"Sanna K"} />
        <UserClass2 name={"Sanna K"} />{" "}
      </div>
    );
  }
}
export default About;

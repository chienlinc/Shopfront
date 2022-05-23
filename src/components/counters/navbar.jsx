import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("Navbar rendered!");
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// const NavBar = (props) => {
//     return (
//         <nav className="navbar bg-light">
//         <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//                 {props.totalCounters}
//             </span>
//             </a>
//         </div>
//         </nav>
//     );
// };

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;

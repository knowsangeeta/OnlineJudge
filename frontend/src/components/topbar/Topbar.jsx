// import { Link } from "react-router-dom";
// import "./topbar.css"

// export default function topbar(){
//     const user = true;
//     return(
//         <div className="top">
//             <div className="topLeft">l</div>
//             <div className="topCenter">
//                 <ul className="topList">
//                     <li className="topListItem">Explore</li>
//                     <li className="topListItem">Problem</li>
//                     <li className="topListItem">Contest</li>
//                     <li className="topListItem">Discuss</li>
//                     <i className="topSearchIcon fas fa-search"></i>
//                 </ul>
//             </div>
//             <div className="topRight">
//                 <img
//                 className="topImg"
//                 src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                 alt="">
//                 </img>
//                 <i className="topSearchIcon fas fa-search"></i>
//             </div>
//         </div>
//     )
// }

import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">Explore</li>
          <li className="topListItem">Problems</li>
          <li className="topListItem">
            <Link className="link" to="/contests">
              Contests
            </Link>
          </li>
          {user && <li className="topListItem">Logout</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
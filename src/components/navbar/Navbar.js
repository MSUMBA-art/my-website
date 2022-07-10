import "./navbar.css";

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav>
      <a
        href="/"
        onClick={() => setActiveNav("/")}
        className={activeNav === "/" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsBookFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { ImHome } from "react-icons/im";
// //import { FaUser } from "react-icons/fa";
// //import { BsBook } from "react-icons/bs";
// //import { RiMessageFill, RiComputerFill } from "react-icons/ri";
//

// const Navbar = () => {
//
//   return (
//     <div>
//       <nav>
//         <a
//           href="/"
//           onClick={() => setActiveNav("/")}
//           className={activeNav === "/" ? "active" : ""}
//         >
//           <ImHome size={35} />

//         </a>
//         <a
//           href="#about"
//           onClick={() => setActiveNav("#about")}
//           className={activeNav === "#about" ? "active" : ""}
//         >
//           {/* <FaUser /> */}
//           <h5>ABOUT</h5>
//         </a>
//         <a
//           href="#skills"
//           onClick={() => setActiveNav("#skills")}
//           className={activeNav === "#skills" ? "active" : ""}
//         >
//           {/* <BsBook /> */} <h5>SKILLS</h5>

//         </a>
//         <a
//           href="#services"
//           onClick={() => setActiveNav("#services")}
//           className={activeNav === "#services" ? "active" : ""}
//         >
//           {/* <RiMessageFill /> */} <h5>SERVICES</h5>

//         </a>
//         <a
//           href="#contacts"
//           onClick={() => setActiveNav("#contacts")}
//           className={activeNav === "#contacts" ? "active" : ""}
//         >
//           {/* <RiComputerFill /> */}<h5>CONTACTS</h5>

//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

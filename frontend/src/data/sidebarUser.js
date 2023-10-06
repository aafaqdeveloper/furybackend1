import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const a = '<FaTh/>'
const b = '<FaRegChartBar/>'
const c = '<FaCommentAlt/>'
const d = '<BiImageAdd/>'

const menu = [
  {
    title: "Dashboard / Cart",
    // icon: a,
    path: "/dashboard",
  },
  {
    title: "Buy",
    // icon: b,
    path: "/buy",
  },
  {
    title: "Account",
    // icon: c,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    // icon: d,
    path: "/contact-us",
  },
];

export default menu;

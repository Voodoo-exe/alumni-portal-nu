import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React from "react";
import * as IoIcons from 'react-icons/io';
import { GoMention } from 'react-icons/go'

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Docs",
    path: "/docs",
    icon: <IoIcons.IoMdDocument />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/events",
    icon: <AiIcons.AiOutlineCalendar />,
    cName: "nav-text",
  },
  {
    title: "Jobs",
    path: "/jobs",
    icon: <FaIcons.FaBriefcase />,
    cName: "nav-text",
  },

  {
    title: "Mentions",
    path: "/mentions",
    icon: <GoMention />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/news",
    icon: <IoIcons.IoLogoHackernews/>,
    cName: "nav-text",
  },
]

    
export default SidebarData;
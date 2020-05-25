import React from "react";

const horizontalMenuConfig = [
  {
    id: "all",
    title: "All topics",
    type: "item",
    navLink: "/",
    permissions: ["admin", "editor"],
  },
  {
    id: "login",
    title: "Login",
    type: "item",
    navLink: "/login",
    permissions: ["admin", "editor"],
  },
  {
    id: "profile",
    title: "Profile",
    type: "item",
    navLink: "/profile",
    permissions: ["admin", "editor"],
  },
  {
    id: "WebandMobileDevelopment",
    title: "Web and Mobile Development",
    type: "item",
    navLink: "/WebandMobileDevelopment",
    permissions: ["admin", "editor"],
  },
  {
    id: "Algorithms",
    title: "Algorithms",
    type: "item",
    navLink: "/Algorithms",
    permissions: ["admin", "editor"],
  },
  {
    id: "Graphics",
    title: "Graphics",
    type: "item",
    navLink: "/Graphics",
    permissions: ["admin", "editor"],
  },
  {
    id: "SystemProgramming",
    title: "System Programming",
    type: "item",
    navLink: "/SystemProgramming",
    permissions: ["admin", "editor"],
  },
];

export default horizontalMenuConfig;

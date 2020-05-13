import React from "react"

const horizontalMenuConfig = [

  {
    id: "all",
    title: "All topics",
    type: "item",
    navLink: "/",
    permissions: ["admin", "editor"]
  },
  {
    id: "frontEndFrameworks",
    title: "Front-end Frameworks",
    type: "dropdown",
    children: [
      {
        id: "react",
        title: "React",
        type: "item",
        navLink: "/chat",
        permissions: ["admin", "editor"]
      },
      {
        id: "vue",
        title: "Vue",
        type: "item",
        navLink: "/forum/:filter",
        filterBase: "/forum/all",
        permissions: ["admin", "editor"]
      },
      {
        id: "angular",
        title: "Angular",
        type: "item",
        navLink: "/email/:filter",
        filterBase: "/email/sent",
        permissions: ["admin", "editor"]
      },
      {
        id: "jquery",
        title: "jQuery",
        type: "item",
        navLink: "/email/:filter",
        filterBase: "/email/inbox",
        permissions: ["admin", "editor"]
      },
      {
        id: "ember",
        title: "Ember",
        type: "item",
        navLink: "/calendar",
        permissions: ["admin", "editor"]
      },{
        id: "backbone",
        title: "Backbone",
        type: "item",
        navLink: "/calendar",
        permissions: ["admin", "editor"]
      },

    ]
  }
]

export default horizontalMenuConfig

const horizontalMenuConfig = [
  {
    id: "allPosts",
    title: "All posts",
    type: "item",
    navLink: "/",
    permissions: ["admin", "editor"],
  },
  {
    id: "myPosts",
    title: "My posts",
    type: "item",
    navLink: "/my-posts",
    permissions: ["admin", "editor"],
  },
  {
    id: "likedPosts",
    title: "Liked posts",
    type: "item",
    navLink: "/liked-posts",
    permissions: ["admin", "editor"],
  },
];

export default horizontalMenuConfig;

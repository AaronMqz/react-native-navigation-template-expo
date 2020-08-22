import AddNew from "../views/AddNew";
import Search from "../views/Search";
import Profile from "../views/Profile";
import Home from "../views/Home";

export const navigationConfig = {
  initialRouteName: "home",
  iconsSize: 22,
  tabBarOptions: {
    inactiveTintColor: "#646464",
    activeTintColor: "#00a680",
  },
  stacks: [
    {
      name: "Home",
      icon: "home",
      views: [
        {
          name: "Home",
          component: Home,
        },
      ],
    },
    {
      name: "Add",
      icon: "pencil-square-o",
      views: [
        {
          name: "Add New",
          component: AddNew,
        },
      ],
    },
    {
      name: "Search",
      icon: "search",
      views: [
        {
          name: "Search",
          component: Search,
        },
      ],
    },
    {
      name: "Profile",
      icon: "user",
      views: [
        {
          name: "Profile",
          component: Profile,
        },
      ],
    },
  ],
};

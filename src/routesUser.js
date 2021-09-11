import Index from "views/examplesUser/IndexUser";

// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";

import OnlineStore from "views/examplesUser/OnlineStore";
import OthersStore from "views/examples/OthersStore";
import Orders from "views/examplesUser/Orders";
import Products from "views/examplesUser/Products";
import Customers from "views/examplesUser/Customers";
import Analytics from "views/examplesUser/Analytics";
import Extensions from "views/examplesUser/extensions/Extensions";

var routes = [
  {
    path: "/index",
    name: "Home",
    // icon ppte: text-primary text-blue text-orange text-yellow
    icon: "fa fa-home text-primary",
    component: Index,
    layout: "/user",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "fa fa-shopping-cart text-blue",
    component: Orders,
    layout: "/user",
  },
  {
    path: "/products",
    name: "Products",
    icon: "fa fa-tag text-orange",
    component: Products,
    layout: "/user",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "ni ni-single-02 text-yellow",
    component: Customers,
    layout: "/user",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "fas fa-chart-line text-yellow",
    component: Analytics,
    layout: "/user",
  },

  {
    path: "/online_store",
    name: " Online Store",
    icon: "fas fa-store",
    component: OnlineStore,
    layout: "/user",
  },
  {
    path: "/others_store",
    name: "Others Store",
    icon: "fas fa-cloud ",
    component: OthersStore,
    layout: "/user",
  },
  {
    path: "/extensions",
    name: "Extensions",
    icon: "fas fa-cloud ",
    component: Extensions,
    layout: "/user",
  },

  {
    path: "/index ",
    name: "Admin",
    icon: "fas fa-user-shield ",
    component: OthersStore,
    layout: "/admin",
  },
];
export default routes;

import Dashboard from "views/Admin/Dashboard.jsx";
import ManageEqub from "views/Admin/ManageEqub";
import AddUser from "views/Admin/Add_User";
import ManageUser from "views/Admin/ManageUser";
// import TableList from "views/MakePayment.jsx";
import SeeFeedback from "views/Admin/SeeFeedback";
import UserProfile from "views/Admin/AdminProfile.jsx";
import AddCategory from "./components/admin/AddCategory";
import ManageCat from "./views/Admin/Manage Category Parameter";
import Category from "./views/Admin/Category";
import CheckBalance from "./views/Admin/CheckBalance";
import AdminProfile from "./views/Admin/AdminProfile";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-trophy",
    component: Dashboard,
    layout: "/ዘ-EQUB/admin"
  },
  {
    path: "/manage-equb",
    name: "Manage Equb",
    icon: "tim-icons icon-settings-gear-63",
    component: ManageEqub,
    layout: "/ዘ-EQUB/admin"
  },
  {
    path: "/manage-user",
    name: "Manage User",
    icon: "tim-icons icon-scissors",
    component: ManageUser,
    layout: "/ዘ-EQUB/admin"
  },
  {
    path: "/add-user",
    name: "Add User",
    icon: "tim-icons icon-simple-add",
    component: AddUser,
    layout: "/ዘ-EQUB/admin"
  },
    {
    path: "/check-balance",
    name: "Check Balance",
    icon: "tim-icons icon-money-coins",
    component: CheckBalance,
    layout: "/ዘ-EQUB/admin"
  },
    {
    path: "/add-category",
    name: "Add Category",
    icon: "tim-icons icon-simple-add",
    component: Category,
    layout: "/ዘ-EQUB/admin"
  },
    {
    path: "/manage-category-parameters",
    name: "Manage Category",
    icon: "tim-icons icon-settings",
    component: ManageCat,
    layout: "/ዘ-EQUB/admin"
  },
  {
    path: "/user-profile",
    name: "Admin Profile",
    icon: "tim-icons icon-single-02",
    component: AdminProfile,
    layout: "/ዘ-EQUB/admin"
  },
  {
    path: "/feedback",
    name: "See Feedback",
    icon: "tim-icons icon-align-center",
    component: SeeFeedback,
    layout: "/ዘ-EQUB/admin"
  }
];
export default routes;

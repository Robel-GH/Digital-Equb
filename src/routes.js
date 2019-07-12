import Dashboard from "views/Dashboard.jsx";
import CreateEqub from "views/CreateEqub.jsx";
import JoinedEqub from "views/JoinedEqub.jsx";
import MakePayment from "views/MakePayment.jsx";
import Feedback from "views/Feedback.jsx";
import UserProfile from "views/UserProfile.jsx";
import BuyLayout from 'views/BuyLayout'
import Group from "./views/GroupName";
import SaleBuyPayment from "./views/SaleBuyPayment";
import PayBuy from "./views/PayBuy";
import Sell_Price from "./views/Sell_Price";
import CheckBalance from "./views/CheckBalance";
import NextSeasonPayment from "./views/NextSeasonPayment";
import NextPayOnline from "./views/NextPayOnline";
import NextPayManual from "./views/NextPayManual";

var routes = [
  {
    path: "/joined-equb",
    name: "Joined Equb",
    icon: "tim-icons icon-shape-star",
    component: JoinedEqub,
    layout: "/ዘ-EQUB"
  },
  {
    path: "/join-equb",
    name: "Join Equb",
    icon: "tim-icons icon-simple-add",
    component: CreateEqub,
    layout: "/ዘ-EQUB"
  },

    {
    path: "/check-balance",
    name: "Check Balance",
    icon: "tim-icons icon-money-coins ",
    component: CheckBalance,
    layout: "/ዘ-EQUB"
  },
   {
    path: "/buy",
    name: "Buy Equb",
    icon:'tim-icons icon-gift-2',
    component: BuyLayout,
    layout: "/ዘ-EQUB"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/ዘ-EQUB"
  },

  {
    path: "/feedback",
    name: "Give Feedback",
    icon: "tim-icons icon-align-center",
    component: Feedback,
    layout: "/ዘ-EQUB"
  },

  {
    path: "/make-payment",
    name: "",
    icon: "",
    component: MakePayment,
    layout: "/ዘ-EQUB"
  },
    {
    path: "/group-name",
    component: Group,
    layout: "/ዘ-EQUB"
  },
   {
    path: "/buy/payment",
    name: "",
    icon: "",
    component: SaleBuyPayment,
    layout: "/ዘ-EQUB"
  },

  {
    path: "/buy/payment-choice",
    name: "",
    icon: "",
    component: PayBuy,
    layout: "/ዘ-EQUB"
  },
    {
    path: "/selling-price",
    name: "",
    icon: "",
    component: Sell_Price,
    layout: "/ዘ-EQUB"
  },
    {
    path: "/next-season-payment",
    name: "",
    icon: "",
    component: NextSeasonPayment,
    layout: "/ዘ-EQUB"
  },
  {
    path: "/next-season-payment/online",
    name: "",
    icon: "",
    component: NextPayOnline,
    layout: "/ዘ-EQUB"
  },
  {
    path: "/next-season-payment/manual",
    name: "",
    icon: "",
    component: NextPayManual,
    layout: "/ዘ-EQUB"
  }

];
export default routes;

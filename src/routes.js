// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
//import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
//import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import CourseSituations from "views/CourseSituations/CourseSituations.jsx";
import CourseAssistant from "views/CourseAssistant/CourseAssistant.jsx"
import pishkhan from "views/pishkhan/pishkhaan.jsx"
import form from "views/form/form.jsx"

//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
//import NotificationsPage from "views/Notifications/Notifications.jsx";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
//import Login from "views/LoginPage/LoginPage.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "پیشخوان تحصیلات ",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "داشبورد تحصیل",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "لیست دروس من ",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "وضعیت دروس",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "دستیار اخذ دروس",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // }
  {
    path: "/user",
    name: "User Profile",
    rtlName: "پیشخوان تحصیلات ",
    icon: Dashboard,
    component: UserProfile,
    layout: "/rtl"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "داشبورد تحصیل",
    icon: Dashboard,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "لیست دروس من ",
    icon: "content_paste",
    component: TableList,
    layout: "/rtl"
  },
  
  {
    path: "/CourseSituations",
    name: "Course Situations",
    rtlName: "وضعیت دروس",
    icon: LibraryBooks,
    component: CourseSituations,
    layout: "/rtl"
  },
  {
    path: "/CourseAssistant",
    name: "Course Assistant",
    rtlName: "دستیار اخذ دروس",
    icon: BubbleChart,
    component: CourseAssistant,
    layout: "/rtl"
  },
  {
  path: "/pishkhan",
  name: "pishkhan",
  rtlName: "پیشخوان",
  icon: BubbleChart,
  component: pishkhan,
  layout: "/rtl"
},
{
  path: "/form",
  name: "form",
  rtlName: "فرم",
  icon: BubbleChart,
  component: form,
  layout: "/rtl"
},
];

export default dashboardRoutes;

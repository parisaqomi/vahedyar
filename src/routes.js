import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import CourseSituations from "views/CourseSituations/CourseSituations.jsx";
import CourseAssistant from "views/CourseAssistant/CourseAssistant.jsx"
import StudyPanel from "views/StudyPanel/StudyPanel.jsx"
import form from "views/form/form.jsx"
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [

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
  path: "/StudyPanel",
  name: "StudyPanel",
  rtlName: "پیشخوان",
  icon: BubbleChart,
  component: StudyPanel,
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

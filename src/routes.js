import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import MyCourseList from "views/MyCoursesList/MyCoursesList.jsx";
import CourseSituations from "views/CourseSituations/CourseSituations.jsx";
import CourseAssistant from "views/CourseAssistant/CourseAssistant.jsx"
import StudyPanel from "views/StudyPanel/StudyPanel.jsx"
import form from "views/form/form.jsx"
import MyDashboard from "views/Dashboard/Dashboard.jsx";

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
    path: "/dashboard",
    name: "MyDashboard",
    rtlName: "داشبورد تحصیل",
    icon: Dashboard,
    component: MyDashboard,
    layout: "/rtl"
  },
  {
    path: "/myCoursesList",
    name: "My Course List",
    rtlName: "لیست دروس من ",
    icon: "content_paste",
    component: MyCourseList,
    layout: "/rtl"
  },
  
  {
    path: "/courseSituations",
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

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateCourseScreen from "../Pages/CreateCourseScreen";
import AddCourseScreen from "../Pages/AddCourseScreen";
import CourseContentScreen from "../Pages/CourseContentScreen";
import CourseReviewScreen from "../Pages/CourseReviewScreen";
import DashboardScreen from "../Pages/DashboardScreen";

const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/dashboard', element: <DashboardScreen />},
    {path: '/create', element: <CreateCourseScreen />},
    {path: '/add', element: <AddCourseScreen/>},
    {path: '/createContent', element: <CourseContentScreen/>},
    {path: '/courseReview', element: <CourseReviewScreen/>},
]);

export default router;
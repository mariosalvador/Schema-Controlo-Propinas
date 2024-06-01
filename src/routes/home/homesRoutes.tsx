import { HomeLayout } from "@/components/layout/home/HomeLayout";
import { IRouteProps } from "@/interfaces/routes/route";
import { Activity } from "@/Pages/home/activity/Activity";
import { Dashboard } from "@/Pages/home/dashboard/Dashboard";
import { MainScreen } from "@/Pages/home/mainScreen/MainScreen";
import { More } from "@/Pages/home/more/More";


export const HomesRoutes : IRouteProps={
    path:'/',
    element: HomeLayout,
    visibility:'public',
    children:[
        {
            path:'/home',
            element: MainScreen,
            visibility:'public',
        },
        {
            path:'/home/dashboard',
            element:Dashboard,
            visibility:'public',
        },
        {
            path:'/home/more',
            element:More,
            visibility:'public',
        },
        {
            path:'/home/activity',
            element:Activity,
            visibility:'public',
        },
    ],
};
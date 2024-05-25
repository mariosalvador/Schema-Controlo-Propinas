import { HomeLayout } from "@/components/layout/home/HomeLayout";
import { IRouteProps } from "@/interfaces/routes/route";
import { Dashboard } from "@/Pages/home/dashboard/Dashboard";


export const HomesRoutes : IRouteProps={
    path:'/home',
    element: HomeLayout,
    visibility:'public',
    children:[
        {
            path:'/home/dashboard',
            element:Dashboard,
            visibility:'public',
        }
    ],
};
import { FC } from "react";

interface IRouteProps{
    path: string;
    element: FC;
    visibility:  "public" | "private" | "auth";
    children?:IRouteProps[];
}

interface IRouteWrapperProps {
    visibility: "public" | "private" | "auth";
    element: FC
}

import { AuthRoutes } from "./auth/authRoutes";
import { HomesRoutes } from "./home/homesRoutes";


export const WrapperRouter=()=>{
    return[AuthRoutes,HomesRoutes];
};

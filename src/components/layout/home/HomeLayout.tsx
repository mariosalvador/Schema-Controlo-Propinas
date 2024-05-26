import { SideBar } from "@/components/sidebar/SideBar"
import { Outlet } from "react-router-dom"

export const HomeLayout =()=>{
    return(
        <div className="flex flex-row h-[100vh] w-[100vw]">
            <SideBar/>
    


            <div>
                <Outlet/>
            </div>
           
        </div>
    )
}
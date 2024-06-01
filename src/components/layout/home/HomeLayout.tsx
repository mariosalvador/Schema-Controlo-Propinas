import { Divider } from "@/components/dividerHome/Divider"
import { Picture } from "@/components/picture/Picture"
import { SideBar } from "@/components/sidebar/SideBar"
import { Outlet } from "react-router-dom"

export const HomeLayout =()=>{
    return(
        <div className="flex flex-row h-[100vh] w-[100vw] divide-y divide-black-100 ">
            <SideBar/>



            <div className=" w-full flex flex-col p-4 ">
                <Picture name="Mário Paulo Bunga Salvador" />
                <Divider/>
                <Outlet/>
            </div>
           
        </div>
    )
}
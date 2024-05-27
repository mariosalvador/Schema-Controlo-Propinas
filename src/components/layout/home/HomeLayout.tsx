import { Divider } from "@/components/dividerHome/Divider"
import { SideBar } from "@/components/sidebar/SideBar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Outlet } from "react-router-dom"

export const HomeLayout =()=>{
    return(
        <div className="flex flex-row h-[100vh] w-[100vw] divide-y divide-black-100 ">
            <SideBar/>



            <div className=" w-full flex flex-col p-4 ">
                <div className="flex flex-row-reverse items-center gap-10 " >
                    <div className="w-[50px] h-[50px] rounded-full flex justify-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/mariop06.png" alt="@shadcn" />
                            <AvatarFallback>Mario</AvatarFallback>
                        </Avatar>
                    </div>
                    Mario Páulo Bunga Salvador
               </div>  {/* Criar um componente */ }
                <Divider/>
                <Outlet/>
            </div>
           
        </div>
    )
}
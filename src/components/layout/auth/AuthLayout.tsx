import { Panel } from "@/components/panelAuth/panel";
import { Outlet } from "react-router-dom"


export const AuthLayout = ()=>{
    return (
        <div className="flex w-full h-[100%]  bg-[#f4f6f8]">
            <div className="bg-white flex justify-center items-center m-auto justify-between rounded-2xl w-[55%] h-[65%] p-[10px]">
                <div>
                    <Outlet/>
                </div>

                <Panel/>
                
            </div>
            
        </div>
    );
}
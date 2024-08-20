import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";



interface IPictureProps{
    name?:string;
}


export const Picture:React.FC<IPictureProps>= ({name})=>{
    const abreviation= name?.split('')[0];

    return(
        <div className="flex flex-row-reverse items-center gap-10 " >
        <div className="w-[50px] h-[50px] rounded-full flex justify-center">
            <Avatar>
                <AvatarImage src="https://github.com/mariosalvador.png" alt="@shadcn-Picture" />
                <AvatarFallback>{abreviation}</AvatarFallback>
            </Avatar>
        </div>
        {name}
   </div>
    );
}
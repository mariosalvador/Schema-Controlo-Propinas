import { Picture } from "../picture/Picture";
import { ElementSideBar } from "./elementSideBar";

import { useState } from 'react';

export const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[6%] hover:w-[20%] p-4 flex flex-col h-full bg-[#1c8ce7] transition-all duration-500 ease-in-out items-center gap-1 overflow-hidden divide-y divide-white-100 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <Picture />

            <ElementSideBar isHovered={isHovered} />

        </div>
    );
}


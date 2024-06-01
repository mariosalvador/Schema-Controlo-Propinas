import { useNavigate } from "react-router-dom";
import { element, elementBottom } from "./element";


interface ElementSideBarProps {
    isHovered: boolean;
}

export const ElementSideBar: React.FC<ElementSideBarProps> = ({ isHovered }) => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-80 w-full max-h-max divide-y divide-white-100 ">
            <div className="flex flex-col gap-3 w-full text-white font-normal mt-16">
                {element.map((element) => (
                    <div key={element.name} onClick={()=> navigate(element.path)} className={`bg- rounded-lg p-2 hover:bg-[#e5e9ec17] font-extralight  flex ${isHovered ? ' bg-[#cbd5e100] gap-5' : 'justify-center'} w-full text-[18px]`}>
                        <button className="flex-shrink-0">{element.icon}</button>
                        {isHovered && <button className="flex truncate">{element.name}</button>}
                    </div>
                ))}
            </div>

            <div  className="flex flex-col w-full  text-white font-normal " >
                {elementBottom.map((element) => (
                    <div key={element.name} onClick={()=> navigate(element.path)} className={`bg- rounded-lg p-2 mt-2 flex font-extralight hover:bg-[#e5e9ec17] ${isHovered ? ' bg-[#cbd5e100] gap-5' : 'justify-center'} w-full text-[18px]`}>
                        <button className="flex-shrink-0 ">{element.icon}</button>
                        {isHovered && <button className="flex-1 truncate  ">{element.name}</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}


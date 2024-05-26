import { FileBarChart, FilePieChart, Info, LayoutDashboard, LogOut, UserPlus } from "lucide-react";



const element = [
    {
        icon:  <FileBarChart/>,
        name: 'Inicio'
    },
    {
        icon:  <LayoutDashboard/>,
        name: 'Painel'
    },
    {
        icon:  <UserPlus/>,
        name: 'Adicionar'
    },
    {
        icon:  <FilePieChart/>,
        name: 'Atividade'
    },
]

const elementBottom= [
    {
        icon:  <Info/>,
        name: 'Informação'
    },
    {
        icon:  <LogOut/>,
        name: 'Sair'
    }
]

interface ElementSideBarProps {
    isHovered: boolean;
}

export const ElementSideBar: React.FC<ElementSideBarProps> = ({ isHovered }) => {
    return (
        <div className="flex flex-col gap-80 w-full max-h-max divide-y divide-white-100 ">
            <div className="flex flex-col gap-3 w-full mt-16">
                {element.map((element) => (
                    <div key={element.name} className={`bg- rounded-lg p-2  flex ${isHovered ? ' bg-[#cbd5e15e] gap-5' : 'justify-center'} w-full text-[18px] font-semibold`}>
                        <button className="flex-shrink-0">{element.icon}</button>
                        {isHovered && <button className="flex-1 truncate">{element.name}</button>}
                    </div>
                ))}
            </div>

            <div  className="flex flex-col w-full " >
                {elementBottom.map((element) => (
                    <div key={element.name} className={`bg- rounded-lg p-2 mt-2 flex ${isHovered ? ' bg-[#cbd5e15e] gap-5' : 'justify-center'} w-full text-[18px] font-semibold`}>
                        <button className="flex-shrink-0">{element.icon}</button>
                        {isHovered && <button className="flex-1 truncate">{element.name}</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}


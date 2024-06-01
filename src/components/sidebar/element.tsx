import { FileBarChart, FilePieChart, Info, LayoutDashboard, LogOut, UserPlus } from "lucide-react";


export const element = [
    {
        icon:  <FileBarChart className="stroke-1.5 stroke-current text-white " />,
        name: 'Inicio',
        path: '/home'
    },
    {
        icon:  <LayoutDashboard className="stroke-1.5 stroke-current text-white " />,
        name: 'Painel',
        path: '/home/dashboard'
    },
    {
        icon:  <UserPlus className="stroke-1.5 stroke-current text-white " />,
        name: 'Adicionar',
        path: '/home/more'
    },
    {
        icon:  <FilePieChart className="stroke-1.5 stroke-current text-white " />,
        name: 'Atividade',
        path: '/home/activity'
    },
]

export const elementBottom= [
    {
        icon:  <Info className="stroke-1.5 stroke-current text-white " />,
        name: 'Informação',
        path: ''
    },
    {
        icon:  <LogOut className="stroke-1.5 stroke-current text-white " />,
        name: 'Sair',
        path: ''
    }
]
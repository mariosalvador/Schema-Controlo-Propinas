import { FileBarChart, FilePieChart, Info, LayoutDashboard, LogOut, UserPlus } from "lucide-react";


export const element = [
    {
        icon:  <FileBarChart/>,
        name: 'Inicio',
        path: '/home'
    },
    {
        icon:  <LayoutDashboard/>,
        name: 'Painel',
        path: '/home/dashboard'
    },
    {
        icon:  <UserPlus/>,
        name: 'Adicionar',
        path: '/home/more'
    },
    {
        icon:  <FilePieChart/>,
        name: 'Atividade',
        path: '/home/activity'
    },
]

export const elementBottom= [
    {
        icon:  <Info/>,
        name: 'Informação',
        path: ''
    },
    {
        icon:  <LogOut/>,
        name: 'Sair',
        path: ''
    }
]
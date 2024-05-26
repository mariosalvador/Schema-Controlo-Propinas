import { Input } from "@/components/input/input"
import { TitlePage } from "@/components/titlePage/TitlePage"
import { useForm } from "react-hook-form"
import {useNavigate } from "react-router-dom";


export const Login = ()=>{
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    return (
    <div className="flex flex-col gap-12 w-[405px] h-[510px] pt-3" >
            <TitlePage title="ENTRAR"/>

            <div className=" w-[99%] p-3 flex flex-col gap-8 justify-items-center">
            <Input placeholder="Informe o seu E-mail" type="text" label="Email" control={control} name="email"
            />

            <Input placeholder="Informe a sua senha" type="password" label="Senha" control={control} name="password"
            />
            </div>

            <div className=" w-[99%] p-3 flex flex-col justify-items-center">
             <button type="submit" className="bg-[#6b7280cb] text-white text-[18px] font-semibold rounded-lg w-full p-2" >Acessar</button>
            </div>

           
    </div>
    )
}
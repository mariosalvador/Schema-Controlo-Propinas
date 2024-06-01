import { Controller } from "react-hook-form";
import { IInputProps } from "./type";


export const Input= ({label,error,name,control,type,...rest}:IInputProps)=>{

    return(
        <div className="w-full">
            {
                label && <label htmlFor={name} className="block text-black text-[18px] font-semibold" >{label}</label>
            }

            <Controller
                control={control}
                name={name}
                render={({field: {ref,onBlur,onChange,value}})=>(
                    <input
                    className="outline-none p-4 w-[100%] h-11 rounded-lg border-none focus:ring-[1.5px] ring-[#1c8ce7b4]    text-[#222325] font-medium bg-[#ecf0f5]"
                      onChange={onChange}
                      onBlur={onBlur}
                      type={type}
                      value={value || ""}
                      ref={ref}
                      {...rest}
                    />
                )}
            />
              {error &&
                <p className="text-red-500">{error}</p>
            }
        </div>
    );
}
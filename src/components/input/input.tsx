import { Controller } from "react-hook-form";
import { IInputProps } from "./type";


export const Input= ({label,error,name,control,type,...rest}:IInputProps)=>{

    return(
        <div className="w-full">
            {
                label && <label htmlFor={name} className="block text-[#6b7280] text-[18px] font-semibold" >{label}</label>
            }

            <Controller
                control={control}
                name={name}
                render={({field: {ref,onBlur,onChange,value}})=>(
                    <input
                    className="outline-none p-4 w-[100%] h-11 rounded-lg border-none text-[#222325] font-normal bg-[#ecf0f5]"
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
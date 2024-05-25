

interface Title{
    title: string;
}
export const TitlePage = ({title}:Title)=>{
    return(
        <div className="w-[100%] flex justify-center items-center text-black text-[30px] font-bold">
            {title}
        </div>
    );
}
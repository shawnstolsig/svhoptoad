import clsx from "clsx";

export default function CardTitle({children}){
    return (
        <h1 className={`font-cooperBlack text-xl mb-1`}>
            {children}
        </h1>
    )
}
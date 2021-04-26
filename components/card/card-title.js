import clsx from "clsx";

export default function CardTitle({children}){
    return (
        <h1 className={clsx(
            `font-cooperBlack text-xl`,
        )}>
            {children}
        </h1>
    )
}
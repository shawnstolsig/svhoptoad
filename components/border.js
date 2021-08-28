import clsx from "clsx";

const Border = ({sides = 'all', margins, children}) => {

    return (
        <div className={clsx(
            `bg-gradient-to-br from-cyan-500 to-cyan-200`,
            sides === 'all' ? `p-0.5` : `p${sides}-0.5`,
            margins
        )}>
            {children}
        </div>
    );
}

export default Border;
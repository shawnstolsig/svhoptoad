import clsx from "clsx";

const Border = ({sides = 'all', children}) => {

    return (
        <div className={clsx(
            `bg-gradient-to-br from-cyan-500 to-cyan-200`,
            sides === 'all' ? `p-0.5` : `p${sides}-0.5`,
        )}>
            {children}
        </div>
    );
}

export default Border;
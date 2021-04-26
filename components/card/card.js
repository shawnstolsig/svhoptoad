import clsx from "clsx";

import CardTitle from './card-title';
import CardContent from './card-content';
import CardActions from './card-actions';

export default function Card({children}){
    return (
        <div className={clsx(
            `p-4`,
            `rounded-xl shadow-xl`,
            `border-2`
        )}>
            {children}
        </div>
    )
}

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Actions = CardActions;
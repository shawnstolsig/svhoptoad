import clsx from "clsx";

import CardTitle from './card-title';
import CardContent from './card-content';
import CardActions from './card-actions';

export default function Card({children}){
    return (
        <div className={`p-4 rounded-md shadow-lg border m-4`}>
            {children}
        </div>
    )
}

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Actions = CardActions;
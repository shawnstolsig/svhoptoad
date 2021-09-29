import {useRouter} from 'next/router';
import {useContext} from "react";

import VisitedContext from "../context/visted";

const Footer = () => {
    const router = useRouter();
    const {visited, hideMap, showMap} = useContext(VisitedContext)

    return (
        <footer className={'flex justify-evenly'}>
            { router.pathname === '/' && visited &&
                <button className={'text-gray-500'} onClick={hideMap}>
                    Show Home Page
                </button>
            }
            { router.pathname === '/' && !visited &&
                <button className={'text-gray-500'} onClick={showMap}>
                    Enlarge Map
                </button>
            }
            <div className={'text-gray-500'}>
                Copyright © {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;
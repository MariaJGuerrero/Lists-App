import { useContext } from 'react';
import contextLists from '../utils/context';

const ListsMenu = () => {
    const allMyLists = useContext(contextLists)


    return(
        <div>
            <h1>All my lists</h1>
            <p></p>
        </div>
    )
}

export default ListsMenu;
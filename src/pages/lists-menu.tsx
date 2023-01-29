import { useContext } from 'react';
import contextLists from '../utils/context';

const ListsMenu = () => {
    const context = useContext(contextLists)

    return(
        <div>
            <h1>{context.allMyLists.map((list)=> <p>{list.name}</p>)}</h1>
            <p>pa parobar</p>
        </div>
    )
}

export default ListsMenu;
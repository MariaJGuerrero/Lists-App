import { useContext } from 'react';
import { Link } from 'react-router-dom';
import contextLists from '../utils/context';

const ListsMenu = () => {
    const context = useContext(contextLists)
    


    return(
        <div>
            {context.allMyLists.map((list)=>
            
                 <Link to={`/singleListView/${list._id}`}>
                    <h2>{list.name}</h2>
                </Link>
            )}
        </div>
    )
}

export default ListsMenu;
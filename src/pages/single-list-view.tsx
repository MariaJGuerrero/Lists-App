import { useContext } from "react";
import { useParams } from "react-router-dom";
import contextLists from "../utils/context"; 



const SingleListView = () => {
    const { id } = useParams();
    const context = useContext(contextLists)
    
    const list = context.allMyLists.find((list)=>list._id === id)

console.log(list)
    return(
        <div>
           <h2>{list?.name}</h2>
           {list?.items.map((item)=>
                <p>{item}</p>
            )}
        </div>
    )
}

export default SingleListView;



import { useContext, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import contextLists from "../utils/context"; 
import { putList } from '../services/lists';


const SingleListView = () => {
    const context = useContext(contextLists)
    const { id } = useParams();
    const list = context.allMyLists.find((list)=>list._id === id)
    const [itemsList, setItemsList] = useState(list?.items)

    

    let listsNames: string[] = []
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = list?.name
        const item = data.get('item') as string
        setItemsList([...(itemsList ?? []), item])
        putList(listName, itemsList, list?._id).then((newList)=>{context.updateLists(newList)})
        console.log('listado de items', itemsList)
    }

    console.log('id de cada lista?', list)
    return(
        <div>
           <h2>{list?.name}</h2>
           {itemsList ?? [].map((item)=> 
                <p>{item}</p> 
           )}
           <form onSubmit={(e) => {
                        submitHandler(e)}}>
                <label>
                    New item list
                    <input type="text" name="item" />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>      
    )
}

export default SingleListView;



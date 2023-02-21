import { useContext, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { putList } from '../services/lists';


const SingleListView = () => {
    const { id } = useParams();

   

    

    
    /*const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = list?.name
        const item = data.get('item') as string
        const newItemList = [...(itemsList ?? []), item]
        putList(listName, newItemList, list?._id).then((newList)=>{
            context.addList(newList)
            setItemsList(newItemList)
        })
        
    }*/

    return(
        <div>
            
            {id 
            ? 
                (<>
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
                </>)
               
            : 
                  (<p>id</p>)}
            
            
               
        </div>      
    )
}

export default SingleListView;



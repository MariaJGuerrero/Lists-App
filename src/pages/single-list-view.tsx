import { useContext, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { putList } from '../services/lists';
import { List } from "../models/list";


const SingleListView = ({ lists}: {lists: List[]}) => {
    const { id } = useParams();
    const oneList = lists.find((list)=>list._id === id)
    console.log('lista seleccionada', oneList)

    

    
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const item = data.get('item') as string
        //const newItemList = [...newItemList, item]
        //putList(listName, newItemList, list?._id).then((newList)=>{})
        
    }

    return(
        <div>
            
            {id 
            ? 
                (<>
                    <h2>{oneList?.name}</h2>
                    {oneList?.items.map((item)=> 
                        <p>{item}</p> 
                    )}
                    <form onSubmit={(e) => {
                            submitHandler(e)}}>
                        <label>
                            New item list
                            <input type="text" name="item" />
                        </label>
                        <button  className="MaterialButton" type="submit">Save</button>
                    </form>
                </>)
               
            : 
                    (<form onSubmit={(e) => {
                        submitHandler(e)}}>
                        <label>
                            New list name
                            <input type="text" name="name" />
                        </label>
                        <label>
                            New item list
                            <input type="text" name="item" />
                        </label>
                        <button type="submit">Save</button>
                    </form>)
            }
            
            
               
        </div>      
    )
}

export default SingleListView;



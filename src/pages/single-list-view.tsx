import { useContext, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { putList, postList } from '../services/lists';
import { List, UpdateListsFunction } from "../models/list";


const SingleListView = ({ lists, addListFunction}: {lists: List[], addListFunction: UpdateListsFunction}) => {
    const { id } = useParams();
    const oneList = lists.find((list)=>list._id === id)
    console.log('lista seleccionada', oneList)

    


    const postHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('name') as string
        const item = data.get('item') as string
        postList(listName, [item] ).then((newList)=>{
            addListFunction(newList)
            
        })
        

        
    }

    const putHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('name') as string
        const item = data.get('item') as string
        const itemList: string[] = []
        const newItemList = [...itemList, item]
        putList(listName, newItemList, oneList?._id).then((newList)=>{addListFunction(newList)})
        
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
                            putHandler(e)}}>
                        <label>
                            New item list
                            <input type="text" name="item" />
                        </label>
                        <button  type="submit">Save</button>
                    </form>
                </>)
               
            : 
                    (<>
                        
                        <form onSubmit={(e) => {
                            postHandler(e)}}>
                            <label>
                                New list name
                                <input type="text" name="name" />
                            </label>
                            <label>
                                New item list
                                <input type="text" name="item" />
                            </label>
                            <button type="submit"onClick={()=>
                                 <h2>{lists[lists.length - 1].name}</h2>}    
                            >Save
                            </button>
                        </form>
                    </>)
            }
            
            
               
        </div>      
    )
}

export default SingleListView;



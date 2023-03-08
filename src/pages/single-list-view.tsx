import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { putList, postList, deleteList } from '../services/lists';
import { List, UpdateListsFunction } from "../models/list";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';



const SingleListView = ({ lists, addListFunction, removeListFunction, modifyListFunction }: {lists: List[], addListFunction: UpdateListsFunction, removeListFunction: Function, modifyListFunction: UpdateListsFunction}) => {
    const { id } = useParams();
    const oneList = lists.find((list)=>list._id === id)
    const [itemList, setItemList] = useState<string[]>(oneList?.items ?? [])

    if(oneList === undefined){
        return <p>error</p>
    }



    const postHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('name') as string
        const item = data.get('item') as string
        setItemList([item])
        postList(listName, [item] ).then((newList)=>{
            addListFunction(newList)
            
        })
        

        
    }

    const putHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = oneList.name
        const item = data.get('item') as string
        const newItemList = [...itemList, item]
        putList(listName, newItemList, oneList._id).then((newList)=>{
            modifyListFunction(newList)
            setItemList(newItemList)
            console.log('items', newList.items)
        })
        
        console.log(itemList)
    }

    const deleteAList = (listId: string| undefined) => {
        deleteList(listId).then((Id)=>
            {
                removeListFunction(Id)
            })
    }

    return(
        <div className="single-view-container">
            
            {id 
            ? 
                (<>
                    <Typography className="single-list-name" variant="h2" gutterBottom>
                        {oneList?.name}
                    </Typography>
                    <button className= "button" onClick={()=>deleteAList(oneList?._id)}>
                        delete the list
                    </button>
                    <ul>
                        {itemList.map((item)=> 
                        <li>
                            <Typography className="items" variant="body1" gutterBottom>
                                {item}
                            </Typography>
                             <DeleteTwoToneIcon />
                        </li>
                        )}
                    </ul>
                    
                    <form className="form" onSubmit={(e) => {
                            putHandler(e)}}>
                        <TextField 
                            required
                            id="outlined-required"
                            label="New Item List"
                            name="item"
                        />
                        <Button  type="submit" variant="contained" size= 'small'>
                            Save
                        </Button>
                    </form>
                </>)
               
            : 
                    (<>
                        
                        <form className="form" onSubmit={(e) => {
                            postHandler(e)}}>
                             <TextField className="input"
                                required
                                id="outlined-required"
                                label="New List"
                                name="name" 
                            />   
                            <TextField className="input"
                                required
                                id="outlined-required"
                                label="New Item List"
                                name="item"
                            />
                            <Button type="submit" variant="contained" size= 'small' style={{ textDecoration: 'none' }}>
                                Save
                            </Button>
                            {/*<button type="submit"onClick={()=>
                                 <h2>{lists[lists.length - 1].name}</h2>}    
                            >Save
                            </button>*/}
                        </form>
                    </>)
            }
            
            
               
        </div>      
    )
}

export default SingleListView;



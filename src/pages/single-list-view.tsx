import { FormEvent } from "react";
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


const SingleListView = ({ lists, addListFunction, removeListFunction}: {lists: List[], addListFunction: UpdateListsFunction, removeListFunction: Function}) => {
    const { id } = useParams();
    const oneList = lists.find((list)=>list._id === id)


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

    const deleteAList = () => {
        deleteList(oneList?._id).then(()=>{removeListFunction(oneList?._id)})
    }

    return(
        <div>
            
            {id 
            ? 
                (<>
                    <Typography variant="h2" gutterBottom>
                        {oneList?.name}
                    </Typography>
                    <button onClick={()=>deleteAList()}>delete</button>
                    {oneList?.items.map((item)=> 
                        <Typography variant="body1" gutterBottom>
                            {item}
                        </Typography>
                    )}
                    <form onSubmit={(e) => {
                            putHandler(e)}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="New Item List"
                            name="item"
                        />
                        <Button type="submit" variant="contained" size= 'small' style={{ textDecoration: 'none' }}>
                            Save
                        </Button>
                    </form>
                </>)
               
            : 
                    (<>
                        
                        <form onSubmit={(e) => {
                            postHandler(e)}}>
                             <TextField
                                required
                                id="outlined-required"
                                label="New List"
                                name="name"
                            />   
                            <TextField
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



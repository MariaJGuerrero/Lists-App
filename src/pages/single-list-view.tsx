import { FormEvent, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { putList, postList, deleteList, getListById } from '../services/lists';
import { List, UpdateListsFunction } from "../models/list";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';



const SingleListView = ({ addListFunction, removeListFunction, modifyListFunction }: { addListFunction: UpdateListsFunction, removeListFunction: Function, modifyListFunction: UpdateListsFunction}) => {
    
    const { id } = useParams();
    
    const [list, setList] = useState<List>()
    useEffect(()=> {
        if(id !== undefined){
            getListById(id).then((listById)=> {setList(listById)})
        }
      }, [id])

    let navigate = useNavigate();
    const postHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('name') as string
        const item = data.get('item') as string
        postList(listName, [item] ).then((newList)=>{
            addListFunction(newList)
            navigate(`/singleListView/${newList._id}`)
        
        })   
    }

    const putHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = list?.name
        const item = data.get('item') as string
        const items: string[] = list?.items ?? []
        const newItemList = [...items, item]
        putList(listName, newItemList, list?._id).then((newList)=>{
            modifyListFunction(newList)
            setList(newList)
        }) 
    }

    const deleteAList = (listId: string| undefined) => {
        deleteList(listId).then(()=> {
                removeListFunction(listId)
                navigate('/')
            })
    }


    return(
        <div className="single-view-container">
            
            {id 
            ? 
                (<>
                    <header className="single-view-header">
                        <Typography className="single-list-name" variant="h2" gutterBottom>
                            {list?.name}
                        </Typography>
                        
                    </header>
                    <section>
                        <ul>
                            {list?.items.map((item)=> 
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
                            <div className="buttons-container">
                                <Button  type="submit" variant="contained" color="success" size= 'large'>
                                    Save
                                </Button>
                                <Button  type="submit" variant="contained" color="error" size= 'small' onClick={()=> deleteAList(list?._id)}>
                                    Delete the list
                                </Button>
                            </div>
                        </form>
                            <Link to={`/`}>
                                <Button  variant="contained" color="secondary" size= 'large' >Home</Button>
                            </Link>
                    </section>
                </>)
               
            : 
                (<>
                    <form className="form" onSubmit={(e) => {
                        postHandler(e)}}>
                            <TextField className="input"
                            required
                            id="outlined-required"
                            label="New List name"
                            name="name" 
                        />   
                        <TextField className="input"
                            required
                            id="outlined-required"
                            label="New Item List"
                            name="item"
                        />
                        <Button type="submit" variant="contained" color="success"  size= 'small' >
                            Create
                        </Button>
                    </form>
                        <Link to={`/`}>
                            <Button  variant="contained" color="secondary" size= 'large' >Home</Button>
                        </Link>
                </>)
            }
            
            
               
        </div>      
    )
}

export default SingleListView;



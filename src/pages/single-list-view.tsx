import { FormEvent, useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { putList, postList, deleteList, getListById } from '../services/lists';
import { List } from "../models/list";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { appContext } from "../context/app-context";



const SingleListView = () => {

    const context = useContext(appContext)
    
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
            context.addList(newList)
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
            context.modifyList(newList)
            setList(newList)
        }) 
    }

    const deleteAList = (listId: string| undefined) => {
        deleteList(listId).then(()=> {
                context.removeList(listId)
                navigate('/')
            })
    }


    return(
        <div className="single-view-container">
            
            {id 
            ? 
                (<>
                    <header className="edition-page-header">
                        <Link to={`/`}>
                            <Button sx={{margin: 2 }}  variant="contained" color="secondary" size= 'large' ><HomeIcon /></Button>
                        </Link>
                        
                    </header>
                    <section>
                        <Typography variant="h2" gutterBottom>
                            {list?.name}
                        </Typography>
                        <ul>
                            {list?.items.map((item)=> 
                            <>
                                <li style= {{marginBottom: 5, justifyContent: 'space-around'}}>
                                    <Checkbox
                                        
                                    />
                                    <Typography className="items" variant="body1" gutterBottom>
                                        {item}
                                    </Typography>
                                    <DeleteTwoToneIcon />
                                </li>
                                <Divider />
                            </>
                            )}
                        </ul>
                        <form className="form" onSubmit={(e) => {putHandler(e)}}>
                            <TextField 
                                required
                                id="outlined-required"
                                label="New Item List"
                                name="item"
                            />
                            <div className="buttons-container">
                                <Button sx={{margin: 2 }}  type="submit" variant="contained" color="primary" size= 'large'>
                                    Add item
                                </Button>
                            </div>
                        </form>
                        <Button variant="contained" color="error" size= 'small' onClick={()=> deleteAList(list?._id)}>
                            Delete the list
                        </Button>
                    </section>
                </>)
               
            : 
                (<>
                    <header className="create-page-header">
                        <Link to={`/`}>
                            <Button sx={{margin: 2 }} variant="contained" color="secondary" size= 'small' ><HomeIcon /></Button>
                        </Link>
                    </header>
                    <section>
                        <Typography  variant="h4" gutterBottom>
                            Create a New List!
                        </Typography>
                        <form className="form" onSubmit={(e) => {
                            postHandler(e)}}>
                                <TextField
                                sx={{margin: 2 }}
                                required
                                id="outlined-required"
                                label="New List name"
                                name="name" 
                            />   
                            <TextField 
                                required
                                id="outlined-required"
                                label="New Item List"
                                name="item"
                            />
                            <Button sx={{margin: 2 }} type="submit" variant="contained" color="primary"  size= 'small' >
                                Create
                            </Button>
                        </form>
                    </section>
                   
                </>)
            }
            
            
               
        </div>      
    )
}

export default SingleListView;



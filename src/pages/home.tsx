import { Link } from 'react-router-dom'
import { FormEvent } from "react";
import { List } from "../models/list";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




const Home = ( { lists }: {lists: List[]}) => {

    return(
        <div>
            <header className='home-header'>
            <Typography className= 'title' variant="h1" gutterBottom>
                MY LISTS
            </Typography>
            </header>
            <section>
                <div className='lists-names-container'>
                    {lists.map((list)=>
                         <Link to={`/singleListView/${list._id}`} style={{ textDecoration: 'none' }}>
                            <Typography className='lists-names' variant="body1" gutterBottom>
                                {list.name}
                            </Typography>
                        </Link>
                    )}
                </div>
                <Link to={`/singleListView`}>
                    <Button  variant="contained" size= 'large' >Create New List</Button>
                </Link>
            </section>
        </div>
    )
}

export default Home;
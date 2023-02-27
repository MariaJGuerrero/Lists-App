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
            <header>
            <Typography variant="h2" gutterBottom>
                MY LISTS
            </Typography>
            </header>
            <section>
                <div>
                    {lists.map((list)=>
                         <Link to={`/singleListView/${list._id}`} style={{ textDecoration: 'none' }}>
                            <Typography variant="body1" gutterBottom>
                                {list.name}
                            </Typography>
                        </Link>
                    )}
                </div>
               
                <div className="form-container">
                <Link to={`/singleListView`}>
                    <Button variant="contained" size= 'large'>Create New List</Button>
                </Link>
                </div>
            </section>
        </div>
    )
}

export default Home;
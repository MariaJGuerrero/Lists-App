import { Link } from 'react-router-dom'
import { List } from "../models/list";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CreateIcon from '@mui/icons-material/Create';
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
                        <>
                            <Link to={`/singleListView/${list._id}`} style={{ textDecoration: 'none' }}>
                                <Typography className='lists-names' variant="body1" color="black" gutterBottom>
                                    {list.name}
                                </Typography>
                            </Link>
                            <CreateIcon />
                            <Divider variant="inset" component="li" />
                        </>
                    )}
                </div>
                <Link to={`/singleListView`}>
                    <Button  variant="contained" color="success"  size= 'large' >Create New List</Button>
                </Link>
            </section>
        </div>
    )
}

export default Home;
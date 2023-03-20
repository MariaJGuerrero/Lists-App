import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useContext, useEffect } from 'react';
import { appContext } from '../context/app-context';
import { getLists } from '../services/lists';




const Home = () => {

const context = useContext(appContext)

let navigate = useNavigate()
  useEffect(()=> {
    getLists().then((r)=> {context.setLists(r)}).catch(()=> {navigate('/login')})
  }, [])

    return(
        <div className='home-container'>
            <header className='home-header'>
            <Typography className= 'title' variant="h3" gutterBottom>
                MY LISTS
            </Typography>
            </header>
            <section>
                <div className='lists-names-container'>
                    {context.lists.map((list)=>
                        <Card sx={{marginBottom: 3 }}>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-around'}}>
                                <Typography variant="body1" color="black" gutterBottom>
                                    {list.name}
                                </Typography>
                                <Link to={`/singleListView/${list._id}`}>
                                <CreateIcon />
                                </Link>
                               
                            </CardContent>
                        </Card>
                    )}
                </div>
                <Link to={`/singleListView`}>
                    <Button  variant="contained" color="inherit"  size= 'large' >Create New List</Button>
                </Link>
            </section>
        </div>
    )
}

export default Home;
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useContext, useEffect } from 'react';
import { appContext } from '../context/app-context';
import { getLists } from '../services/lists';
import Person from '@mui/icons-material/Person';




const Home = () => {

const context = useContext(appContext)

let navigate = useNavigate()
  useEffect(()=> {
    getLists().then((r)=> {context.setLists(r)}).catch(()=> {navigate('/login')})
  }, [])

    return(
        <div className='home-container'>
            <header className='home-header'>
                <Link to={`/login`} style={{textDecoration: 'none'}}>
                    <Button sx={{margin: 2 }} variant="contained" color="secondary"  size= 'small' >
                        <IconButton>
                            <Person />
                        </IconButton>
                    </Button>
                </Link>
            </header>
            <section>
                <Typography className= 'title' variant="h3" gutterBottom>
                    MY LISTS
                </Typography>
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
                <Link to={`/singleListView`} style={{textDecoration: 'none'}}>
                    <Button  variant="contained" color="inherit"  size= 'large' >
                        Create New List
                    </Button>
                </Link>
            </section>
        </div>
    )
}

export default Home;
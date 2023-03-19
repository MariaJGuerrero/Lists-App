import { FormEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { login } from '../services/login';




const postLogin = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement
    const data = new FormData(target);
    const userName = data.get('user') as string
    const password = data.get('password') as string
    login(userName, password ).then((r)=>{
        const response = r
        console.log('Respuesta del login', response)
    })   
}


const LoginPage = () => {
    return(
        <div>
            <header>
            <Typography variant="h2" gutterBottom>
                Have you an account?
            </Typography>
            </header>
            <section>
                <form className="form" onSubmit={(e) => {postLogin(e)}}>
                    <TextField
                        sx={{margin: 2 }}
                        required
                        id="outlined-required"
                        label="User Name"
                        name="user" 
                    />   
                    <TextField 
                        required
                        id="outlined-required"
                        label="Pasword"
                        name="password"
                    />
                    <Button sx={{margin: 2 }} type="submit" variant="contained" color="primary"  size= 'small' >
                        Log in
                    </Button>
                </form>
            </section>
        </div>
    )
}

export default LoginPage;
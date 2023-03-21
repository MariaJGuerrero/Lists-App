import { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { login } from '../services/login';




  




const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    let navigate = useNavigate();
    const postLogin = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const userName = data.get('user') as string
        const password = data.get('password') as string
        login(userName, password ).then((response)=>{
            const token = response.token
            if(!token){
                alert('ERROR: user or password not valid')
                return
            }
            localStorage.setItem('token', token)
           navigate('/')
    
        })
    }


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
                        type= 'text'
                    />   
                    <TextField 
                        required
                        type='password'
                        id="outlined-required"
                        label="Pasword"
                        name="password"
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                              </InputAdornment>
                            ),
                          }}


                        /*inputProps={{
                           endAdorment: {
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           }
                              
                            
                        }}*/
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
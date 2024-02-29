import { Grid, InputAdornment, TextField } from "@mui/material"
import { } from '../index.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import backgroundStars from '/backgroundStars.png'
import logoTropaDigital from '/LogoTropaDigital.png'
import eyeOff from '/eyeOff.svg'
import eyeOn from '/eyeOn.svg'
import laptop from '/laptop.png'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false);

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navUrl = (url: string) => {
        navigate(url)
    }

    const handleLogin = () => {
        navUrl('/home')
    }

    return (
        <Grid component={'body'} container sx={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
            <Grid item component={'section'} xs={7} md={7} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', height: "100%", paddingInlineStart: '150px' }} justifyContent={"center"} alignItems={'flex-start'}>
                <Grid container item xs={8} md={8} lg={9} sx={{ flexDirection: 'column', height: "100%" }} justifyContent={"center"} >
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '90px' }}>
                        <img className="logo" src={logoTropaDigital} />
                    </Grid>
                    <p className="titleWelcome" style={{ fontFamily: 'Advent Pro, sans-serif' }}>Bem vindo ao <span style={{ color: '#ff6c22' }}>painel</span></p>
                    <TextField onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu e-mail' value={email} type='email' variant="outlined" fullWidth />
                    <TextField onChange={(e) => setPassword(e.target.value)} value={password} sx={{ paddingTop: '18px' }} placeholder="Digite sua senha" type={showPassword ? 'text' : 'password'} variant="outlined" fullWidth InputProps={{ endAdornment: <InputAdornment className="buttonEyes" position="end"><button className='buttonEyes' onClick={passwordVisibility}>{showPassword ? <img style={{ color: '#aaaaaa' }} src={eyeOn} /> : <img style={{ color: '#aaaaaa' }} src={eyeOff} />}</button></InputAdornment> }} />
                    <button onClick={handleLogin} className="buttonLogin">Acessar</button>
                </Grid>
            </Grid>
            <Grid item component={'section'} xs={5} sx={{
                background: `url(${backgroundStars})center/cover no-repeat`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%",
            }}>
                <Grid item className="styleLaptop">
                    <img src={laptop} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login
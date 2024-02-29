import { Divider, Grid, Typography } from "@mui/material"
import Sidebar from "../components/SideBar"
import { } from '../index.css'
import BoxFrame from "../components/BoxFrame"

const Home = () => {

    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignContent: 'center', justifyItems: 'center' }}>
                <Sidebar />
                <Grid container sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Grid container item sx={{ flexGrow: 1, width: '100%', height: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'flex-start', padding: '5px 0px 0px 265px' }}>
                        <Grid item sx={{ width: '100%' }}>
                            <Typography sx={{ padding: '50px 0px 20px 50px' }}><span className="greetingInitial">Olá </span><span className="greetingFinaly">Usuário</span></Typography>
                            <Grid item sx={{ width: '97%', padding: '0px 0px 35px 50px' }}>
                                <Divider />
                            </Grid>
                            <BoxFrame />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home
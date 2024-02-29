import { Grid, Typography, Divider } from "@mui/material"
import Sidebar from "../components/SideBar"

const Relatorios = () => {
    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignContent: 'center', justifyItems: 'center' }}>
                <Sidebar />
                <Grid container sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Grid container item sx={{ flexGrow: 1, width: '100%', height: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'flex-start', padding: '5px 0px 0px 265px' }}>
                        <Grid item sx={{ width: '100%' }}>
                            <Typography sx={{ padding: '50px 0px 20px 52px' }}><span className="greetingFinaly">Relatórios</span></Typography>
                            <Grid item sx={{ width: '96.8%', padding: '0px 0px 35px 52px' }}>
                                <Divider />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Relatorios
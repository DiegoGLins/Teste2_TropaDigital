
//import { useCallback } from "react"
import IconTogleMenu from "./IconTogleMenu"
import { SideBarStyle } from "./SideBarStyle"
import IconStart from '/IconStart.svg'
import IconContatos from '/IconContatos.svg'
import IconRelatorio from '/IconRelatorio.svg'
import logoTropaDigital from '/LogoTropaDigital.png'
import IconContatosOrange from '/IconContatosOrange.svg'
import IconRelatorioOrange from '/IconRelatorioOrange.svg'
import IconStartOrange from '/IconStartOrange.svg'
import { Grid } from "@mui/material"
import { TogleMenuStyle } from "./TogleMenuStyle"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Sidebar: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>('');

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    const navUrl = (url: string) => {
        navigate(url)
    }

    return (
        <>
            <SideBarStyle>
                <Grid item style={{ height: '100vh', paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ height: '100%', alignItems: 'flex-start', paddingLeft: '28px', display: 'flex', flexDirection: 'column' }} >
                        <img className='styleLogo' src={logoTropaDigital} alt='logo' />
                        <TogleMenuStyle>
                            <div onClick={() => navUrl('/home')} className={currentPage === '/home' ? 'activePage' : 'iconTogleButton'}>
                                <IconTogleMenu icon={currentPage === '/home' ? IconStartOrange : IconStart} title={"Início"} />
                            </div>
                            <div onClick={() => navUrl('/contatos')} className={`iconTogleButton ${currentPage === '/contatos' ? 'activePage' : 'iconTogleButton'}`}>
                                <IconTogleMenu icon={currentPage === '/contatos' ? IconContatosOrange : IconContatos} title={"Contatos"} />
                            </div>
                            <div onClick={() => navUrl('/relatorios')} className={`iconTogleButton ${currentPage === '/relatorios' ? 'activePage' : 'iconTogleButton'}`}>
                                <IconTogleMenu icon={currentPage === '/relatorios' ? IconRelatorioOrange : IconRelatorio} title={"Relatórios"} />
                            </div>
                            <div onClick={() => navUrl('/lorem')} className={`iconTogleButton  ${currentPage === '/lorem' ? 'activePage' : 'iconTogleButton'}`}>
                                <IconTogleMenu icon={currentPage === '/lorem' ? IconContatosOrange : IconContatos} title={"Contatos"} />
                            </div>
                            <div onClick={() => navUrl('/loremIpsu')} className={`iconTogleButton  ${currentPage === '/loremIpsu' ? 'activePage' : 'iconTogleButton'}`}>
                                <IconTogleMenu icon={currentPage === '/loremIpsu' ? IconContatosOrange : IconContatos} title={"Contatos"} />
                            </div>
                        </TogleMenuStyle>
                    </div>
                </Grid>
            </SideBarStyle>
        </>
    )
}

export default Sidebar
// import * as C from './PicutreStyle'
import * as Ca from './CardFrameStyle'

interface CardFrameProps {
    title: string;
    text: string
    image: string
    icon: string | undefined
    view: string
}

const CardFrame: React.FC<CardFrameProps> = ({ title, text, image, icon, view }) => {
    return (
        <>
            <Ca.CardFrameStyle>
                <div style={{ paddingTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={image} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'self-start' }}>
                    <p className='styleTitle' style={{ padding: '14px 0px 5px 20px' }}><strong>{title}</strong></p>
                    <p className='styleText' style={{ padding: '2px 0px 5px 20px' }}>{text}</p>
                </div>
                <div className='boxPreview'>
                    <p className='textPreview'><img style={{ width: '24.27px', height: '20px', paddingRight: '8px' }} src={icon} />{view}</p>
                </div>
            </Ca.CardFrameStyle>
        </>
    )
}

export default CardFrame
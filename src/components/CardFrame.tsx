// import * as C from './PicutreStyle'
import * as Ca from './CardFrameStyle'

interface CardFrameProps {
    title: string;
    text: string
    image: string
}

const CardFrame: React.FC<CardFrameProps> = ({ title, text, image }) => {
    return (
        <>
            <Ca.CardFrameStyle>
                <div style={{ paddingTop: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={image} />
                </div>
                <div className='iconCalendar'>
                    <img src={''} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '0px 5px 5px 20px' }}>
                    <p className='styleTitle' style={{ display: 'flex', padding: '0px 0px 5px 0px' }}><strong>{title}</strong></p>
                    <p className='styleText'>{text}</p>
                </div>
            </Ca.CardFrameStyle>
        </>
    )
}

export default CardFrame
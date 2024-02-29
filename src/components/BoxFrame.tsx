import styled from "styled-components"
import CardFrame from "./CardFrame"
import { cardArray } from "./cardArray"

const BoxFrameContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
gap:20px;
flex-flow: wrap;
padding-bottom: 50px;
position: relative;
z-index: -3
`


const BoxFrame: React.FC = () => {
    return (
        <BoxFrameContainer>
            {cardArray.map((item) => (
                <CardFrame key={item.image} image={item.image} text={item.text} title={item.title} />
            ))}
        </BoxFrameContainer>
    )
}

export default BoxFrame
import * as B from './BoxFrameStyle'
import CardFrame from "./CardFrame"
import { cardArray } from "./cardArray"

const BoxFrame: React.FC = () => {
    return (
        <B.BoxFrameStyle>
            {cardArray.map((item) => (
                <CardFrame key={item.image} image={item.image} text={item.text} title={item.title} icon={item.icon} view={item.view} />
            ))}
        </B.BoxFrameStyle>
    )
}

export default BoxFrame
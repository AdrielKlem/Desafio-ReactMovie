import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container } from './styles'

export function Star({ numberstar = 1, ...rest }) {
    let stars = [];

    for (let index = 0; index < 5; index++) {
        if (numberstar>index) {
            stars.push(<AiFillStar key={index} id={index} />);
        } else {
            stars.push(<AiOutlineStar key={index} id={index} />);
        }
    }

    return(
        <Container {...rest}>
            {stars}
        </Container>
    )
}
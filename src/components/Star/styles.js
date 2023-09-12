import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > svg {
        fill: ${({ theme}) => theme.COLORS.PINK};

        width: 50px;
        height: 50px;
    }
`
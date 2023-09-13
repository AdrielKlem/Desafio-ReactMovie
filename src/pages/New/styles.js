import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const Form = styled.form`
    margin: 38px auto;
    padding: 0 64px;

    > header {
        display: flex;
        align-items: left;
        justify-content: space-between;
        flex-direction: column;
        gap: 16px;
        
        margin-bottom: 36px;

        > a {
            display: flex;
            align-items: center;
            gap: 8px;

            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`
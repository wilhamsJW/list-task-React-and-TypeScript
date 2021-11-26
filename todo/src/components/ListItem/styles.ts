import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => ( // esse ContainerProps quer dizer que minha props está usando o typre ContainerProps
    // no typescript ao usar uma props temos q informar o type dela
    // essa prop 'done' está sendo eviada do componente que está utilizando esse css
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        margin-right: 15px
    }

    label {
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));
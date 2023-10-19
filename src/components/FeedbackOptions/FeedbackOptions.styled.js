import styled from 'styled-components';

export const FeedbackList = styled.ul`
    display: flex;
    list-style: none;
    gap: 25px;
`

export const FeedbackBtn = styled.button`
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    color: rgb(72, 76, 122);
    font-size: 14px;
    height: 38px;
    padding: 8px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);
    transition: all .2s ease-out;
    &:hover{
        background-color: #259799;
        color: white;
    }             
`
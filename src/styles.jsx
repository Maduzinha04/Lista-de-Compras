import styled from "styled-components";

export const AddButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 130px;
    height: 45px;
    border-radius: 5px;
    margin-left: 3px;

    &:hover{
        opacity: 0.8;
    }
    `;
export const ShareButton= styled.button`
background-color: #23c728;
color: white;
padding: 14px 20px;
margin: 12px 0;
border: none;
cursor: pointer;
width: 130px;
height: 45px;
border-radius: 5px;
margin-left: 3px;

&:hover{
    opacity: 0.8;
}
`;
export const DeleteButton = styled.button`
background-color: #af4c4c;
color: white;
padding: 4px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 130px;
height: 25px;
border-radius: 5px;
margin-left: 3px;
display: inline;

&:hover{
        opacity: 0.8;
    }
`;
export const Container = styled.div`
    background: #b4ceba;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 20px;

    input{
        height:45px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }
    p{
        text-transform: capitalize;
    }
`
export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f2f2f2;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    p{
        margin: 0;
    }
`

import styled from "@emotion/styled";

export const Write_wrapper = styled.div`
    width : 1200px;
    border-top: 1px solid grey;
    padding: 80px 0px;
    display : flex;
    flex-direction: column;
    margin-left : 100px;
`

export const Label_wrapper = styled.div`
    width : 400px;
    height : 50px;
    background-color: white;
    display : flex;
    flex-direction: row;
    font-size : 28px;
    font-weight : bold;
`

export const Label_image = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(/images/commentLabel.svg);
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 17px;
`

export const Register_wrapper = styled.div`
    
`

export const WriterAndPwdAndRating_wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 50px;
    align-items : center;
`

export const Writer_edit = styled.input`
    width : 250px;
    padding : 20px;
    font-size: 20px;
`

export const Pwd_edit = styled.input`
    width : 250px;
    padding : 20px;
    font-size: 20px;
    margin : 0px 50px;
`

export const ContentAndSubmit_wrapper = styled.div`
    border : 2px solid grey;
    margin-top: 30px;
    
`

export const Content_input = styled.textarea`
    width : 100%;
    height : 115px;
    border : 0px;
    padding : 15px;
    resize: none;
    font-size : 17px;
`

export const Submit_wrapper = styled.div`
    display : flex;
    flex-direction: row;
    border-top : 1px solid grey;
`

export const TextLength = styled.div`
    display : flex;
    border : 0;
    padding : 15px;
    flex : 1;
    align-items: center;
    font-size : 20px;
`

export const Submit_btn = styled.button`
    background-color: black;
    color:white;
    width :120px;
    cursor: pointer;
    font-size : 20px;
    padding : 15px;
`

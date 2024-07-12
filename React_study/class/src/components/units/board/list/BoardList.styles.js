import styled from "@emotion/styled";


export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-shadow: gray;
  border-radius: 20px;
  background-color: white;
`;
export const Head = styled.div`
  display:flex;
  flex-direction: column;
`

export const Title = styled.p`
  text-align: center;
  font-size : 50px;
  font-weight: bold;
  margin : 30px 0px;
`

export const BestContentWrapper = styled.div`
  width : 1000px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items : center;
`

export const BestContent = styled.div`
  display : flex;
  flex-direction: column;
  width : 220px;
  height: 200px;
  border-radius : 15px;
  border: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2);
`


export const Best_img = styled.img`
  height : 110px;
  background-size: cover;
  border-radius: 15px 15px 0px 0px;
`

export const Best_title = styled.p`
  padding-top : 12px;
  padding-bottom : 5px;
  margin-left : 15px;
  font-weight: bold;
  font-size : 13px;

`

export const Best_Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding : 10px 15px 10px 15px;
`

export const Best_User_Writer_Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  padding-bottom: 2px;
`

export const Best_Profile_Wrapper = styled.div`
  display:flex;
  flex-direction: column;
`

export const Best_userImg = styled.img`
  background-size :cover;
  height: 15px;
  width : 15px;
  margin-right: 3px;
`

export const Best_writer = styled.p`
  font-size : 10px;
  
`

export const Best_Date = styled.p`
  font-size : 10px;
  color : gray;
`

export const Best_Like_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Best_Like_btn = styled.button`
  background-image: url("/images/up.png");
  width : 14px;
  height : 13px;
  border : 0px;
  background-color: white;
  background-repeat: no-repeat;
  background-size : cover;
  margin-bottom: 5px;
`

export const Best_Like_Count = styled.p`
  font-size: 8px;
  font-weight: bold;
`

export const Select_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const Select_Input = styled.input`
  padding : 10px 0px 10px 30px;
  width : 650px;
  margin-right: 35px;
  border-radius: 5px;
  background-color: lightblue;
  font-style:black;
`

export const Date_Input = styled.input`
  padding : 10px;
  width : 250px;
  margin-right: 30px;
`

export const SelectBtn = styled.button`
  width : 100px;
  border-radius: 5px;
  background-color: black;
  color: white;

`

export const TableTop = styled.div`
  border-top : 2px solid gray;
  margin-top : 20px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px;
  padding : 13px 0px;
  border-bottom: 1px solid grey;
  
  
`

export const ColumHeaderNumber = styled.div`
  width : 10%;
  text-align: center;
`
export const ColumHeaderTitle = styled.div`
  width : 70%;
  text-align: center;
`
export const ColumHeaderWriter = styled.div`
  width : 10%;
  text-align: center;
`
export const ColumHeaderDate = styled.div`
  width : 10%;
  text-align: center;
`

export const ColumNumber = styled.div`
  width : 10%;
  text-align: center;
`
export const ColumTitle = styled.div`
  width : 70%;
  text-align: center;
`
export const ColumWriter = styled.div`
  width : 10%;
  text-align: center;
`
export const ColumDate = styled.div`
  width : 10%;
  text-align: center;
`

export const TableBottom = styled.div`
  border-top : 2px solid gray;
  
`

export const Footer = styled.div`

  display:flex;
  flex-direction: row;
  align-items: end;
`

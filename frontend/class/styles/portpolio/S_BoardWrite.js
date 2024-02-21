import styled from "@emotion/styled";

export const hi = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-shadow: gray;
  border-radius: 20px;
`;

export const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
`;

export const WriterWrapper = styled.div`
  width: 1220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 30px;
  font-weight: bold;
`;

export const InputBox = styled.div`
  padding-top: 40px;
`;

export const InputWriter = styled.input`
  padding-left: 16px;
  width: 550px;
  height: 52px;
  border: 3px solid #bdbdbd;
  font-size: 20px;
`;

export const InputPwd = styled.input`
  padding-left: 16px;
  width: 550px;
  height: 52px;
  border: 3px solid #bdbdbd;
  font-size: 20px;
`;

export const InputTitle = styled.input`
  width: 1200px;
  height: 52px;
  border: 3px solid #bdbdbd;
  font-size: 20px;
  padding-left: 16px;
`;

export const InputContent = styled.textarea`
  width: 1200px;
  height: 350px;
  font-size: 20px;
  border: 3px solid #bdbdbd;
  padding-left: 16px;
  padding-top: 20px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const InputAddressNumber = styled.input`
  width: 120px;
  height: 57px;
  font-size: 20px;
  border: 3px solid #bdbdbd;
  padding-left: 16px;
`;

export const AddressButton = styled.button`
  width: 190px;
  height: 60px;
  margin-left: 16px;
  background-color: black;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const InputAddress = styled.input`
  width: 1200px;
  height: 52px;
  border: 3px solid #bdbdbd;
  padding-left: 16px;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadButton = styled.button`
  width: 140px;
  height: 130px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ImageBox2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 23px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled.button`
  width: 200px;
  height: 70px;
  font-size: 20px;
  font-weight: 700;
  background-color: orange;
  color: black;
  border: 0px;
  cursor: pointer;
`;

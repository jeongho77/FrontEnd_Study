import { gql, useMutation } from "@apollo/client";
import {
  Wrapper,
  Title,
  InputBox,
  InputWriter,
  InputPwd,
  Label,
  WriterWrapper,
  InputTitle,
  InputContent,
  AddressWrapper,
  AddressButton,
  InputAddress,
  InputAddressNumber,
  ImageBox,
  UploadButton,
  ImageBox2,
  InputOption,
  RadioButton,
  RadioLabel,
  RadioWrapper,
  SubmitButton,
  ButtonWrapper,
  Error,
} from "../../../styles/portpolio/S_BoardWrite";
import { useState } from "react";

const graphQl = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function BoardWrite() {
  const [writer, setWriter] = useState();
  const [pwd, setPwd] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [address, setAddress] = useState();

  const [board] = useMutation(graphQl);

  const [errorWriter, setErrorWriter] = useState();
  const [errorPwd, setErrorPwd] = useState();
  const [errorTitle, setErrorTitle] = useState();
  const [errorContent, setErrorContent] = useState();

  //--------------------------------------------------함수

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    setErrorWriter("");
  };

  const onChangePwd = (event) => {
    setPwd(event.target.value);
    setErrorPwd("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    setErrorTitle("");
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    setErrorContent("");
  };

  const submit = (event) => {
    if (!writer) {
      setErrorWriter("이름을 입력해주세요");
    }
    if (!pwd) {
      setErrorPwd("비밀번호를 입력해주세요");
    }
    if (!title) {
      setErrorTitle("제목을 입력해주세요");
    }
    if (!content) {
      setErrorContent("내용을 입력해주세요");
    }
    if (writer && pwd && title && content) {
      alert("등록이 완료됐습니다!");
      boardRegister();
    }
  };

  const boardRegister = async () => {
    const result = await board({
      variables: {
        writer: writer,
        title: title,
        contents: content,
      },
    });
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputBox>
          <Label>작성자</Label>
          <InputWriter
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          ></InputWriter>
          <Error>{errorWriter}</Error>
        </InputBox>
        <InputBox>
          <Label>비밀번호</Label>
          <InputPwd
            placeholder="비밀번호를 적어주세요."
            onChange={onChangePwd}
          ></InputPwd>
          <Error>{errorPwd}</Error>
        </InputBox>
      </WriterWrapper>
      <InputBox>
        <Label>제목</Label>
        <InputTitle
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        ></InputTitle>
        <Error>{errorTitle}</Error>
      </InputBox>
      <InputBox>
        <Label>내용</Label>
        <InputContent
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        ></InputContent>
        <Error>{errorContent}</Error>
      </InputBox>
      <InputBox>
        <Label>주소</Label>
        <AddressWrapper>
          <InputAddressNumber placeholder="07250"></InputAddressNumber>
          <AddressButton>우편번호 검색</AddressButton>
        </AddressWrapper>
        <InputAddress></InputAddress>
        <InputAddress></InputAddress>
      </InputBox>

      <InputBox>
        <Label>유튜브</Label>
        <InputAddress placeholder="링크를 복사해주세요."></InputAddress>
      </InputBox>

      <ImageBox>
        <Label>사진 첨부</Label>
        <ImageBox2>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageBox2>
      </ImageBox>

      <InputOption>
        <Label>메인 설정</Label>
        <RadioWrapper>
          <RadioButton type="radio" />
          <RadioLabel>유튜브</RadioLabel>
          <RadioButton type="radio" />
          <RadioLabel>사진</RadioLabel>
        </RadioWrapper>
      </InputOption>

      <ButtonWrapper>
        <SubmitButton onClick={submit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

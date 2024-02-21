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
  hi,
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
} from "../../styles/portpolio/S_BoardWrite";

export default function BoardWrite() {
  return (
    <hi>
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrapper>
          <InputBox>
            <Label>작성자</Label>
            <InputWriter placeholder="이름을 적어주세요."></InputWriter>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <InputPwd placeholder="비밀번호를 적어주세요."></InputPwd>
          </InputBox>
        </WriterWrapper>
        <InputBox>
          <Label>제목</Label>
          <InputTitle placeholder="제목을 작성해주세요."></InputTitle>
        </InputBox>
        <InputBox>
          <Label>내용</Label>
          <InputContent placeholder="내용을 작성해주세요."></InputContent>
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
          <SubmitButton>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </hi>
  );
}

import * as P from "./P_BoardNew.styles";

export default function BoardNewUI(props) {
  return (
    <P.Wrapper>
      <P.Title>게시글 등록</P.Title>
      <P.WriterWrapper>
        <P.InputBox>
          <P.Label>작성자</P.Label>
          <P.InputWriter
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
          ></P.InputWriter>
          <P.Error>{props.errorWriter}</P.Error>
        </P.InputBox>
        <P.InputBox>
          <P.Label>비밀번호</P.Label>
          <P.InputPwd
            placeholder="비밀번호를 적어주세요."
            onChange={props.onChangePwd}
          ></P.InputPwd>
          <P.Error>{props.errorPwd}</P.Error>
        </P.InputBox>
      </P.WriterWrapper>
      <P.InputBox>
        <P.Label>제목</P.Label>
        <P.InputTitle
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
        ></P.InputTitle>
        <P.Error>{props.errorTitle}</P.Error>
      </P.InputBox>
      <P.InputBox>
        <P.Label>내용</P.Label>
        <P.InputContent
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContent}
        ></P.InputContent>
        <P.Error>{props.errorContent}</P.Error>
      </P.InputBox>
      <P.InputBox>
        <P.Label>주소</P.Label>
        <P.AddressWrapper>
          <P.InputAddressNumber placeholder="07250"></P.InputAddressNumber>
          <P.AddressButton>우편번호 검색</P.AddressButton>
        </P.AddressWrapper>
        <P.InputAddress></P.InputAddress>
        <P.InputAddress></P.InputAddress>
      </P.InputBox>

      <P.InputBox>
        <P.Label>유튜브</P.Label>
        <P.InputAddress placeholder="링크를 복사해주세요."></P.InputAddress>
      </P.InputBox>

      <P.ImageBox>
        <P.Label>사진 첨부</P.Label>
        <P.ImageBox2>
          <P.UploadButton>+</P.UploadButton>
          <P.UploadButton>+</P.UploadButton>
          <P.UploadButton>+</P.UploadButton>
        </P.ImageBox2>
      </P.ImageBox>

      <P.InputOption>
        <P.Label>메인 설정</P.Label>
        <P.RadioWrapper>
          <P.RadioButton type="radio" />
          <P.RadioLabel>유튜브</P.RadioLabel>
          <P.RadioButton type="radio" />
          <P.RadioLabel>사진</P.RadioLabel>
        </P.RadioWrapper>
      </P.InputOption>

      <P.ButtonWrapper>
        <P.SubmitButton onClick={props.submit} isActive={props.isActive}>등록하기</P.SubmitButton>
      </P.ButtonWrapper>
    </P.Wrapper>
  );
}

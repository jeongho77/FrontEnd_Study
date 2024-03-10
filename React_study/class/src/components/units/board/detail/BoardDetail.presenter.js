import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Profile>
          <S.Profile_image src="/images/Vector.png" />
          <S.Profile_Wrapper>
            <S.Writer>
              {props.data?.fetchBoard?.writer || "로딩중입니다!"}
            </S.Writer>
            <S.Date>Date:2021.02.18</S.Date>
          </S.Profile_Wrapper>
        </S.Profile>
        <S.Link_Wrapper>
          <S.Url_btn></S.Url_btn>
          <S.Map_btn></S.Map_btn>
        </S.Link_Wrapper>
      </S.Header>
      <S.Content_Wrapper>
        <S.Title>{props.data?.fetchBoard?.title || "로딩중입니다!"}</S.Title>
        <S.Image src="/images/content.png"></S.Image>
        <S.Content>
          {props.data?.fetchBoard?.content || "로딩중입니다!"}
        </S.Content>
        <S.Like_Wrapper>
          <S.Like_button>
            <S.Like src="/images/up.png"></S.Like>
            <S.Like_p>1500</S.Like_p>
          </S.Like_button>
          <S.Like_button>
            <S.Bad src="/images/down.png"></S.Bad>
            <S.Like_p>1500</S.Like_p>
          </S.Like_button>
        </S.Like_Wrapper>
      </S.Content_Wrapper>
    </S.Wrapper>
  );
}

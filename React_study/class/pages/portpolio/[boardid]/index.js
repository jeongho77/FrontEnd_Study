import { Router } from "next/router";
import {
  Header,
  Profile_image,
  Wrapper,
  Bad,
  Content,
  Content_Wrapper,
  Date,
  Image,
  Like,
  Like_Wrapper,
  Map_btn,
  Profile,
  Title,
  Url_btn,
  Video,
  Writer,
  Link_Wrapper,
  Profile_Wrapper,
  Like_button,
  Like_p,
} from "../../../styles/portpolio/S_BoardPage";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;
export default function BoardPage() {
  const router = useRouter();
  console.log(router.query.boardid);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.boardid) },
  });

  return (
    <Wrapper>
      <Header>
        <Profile>
          <Profile_image src="/images/Vector.png" />
          <Profile_Wrapper>
            <Writer>{data?.fetchBoard?.writer || "로딩중입니다!"}</Writer>
            <Date>Date:2021.02.18</Date>
          </Profile_Wrapper>
        </Profile>
        <Link_Wrapper>
          <Url_btn></Url_btn>
          <Map_btn></Map_btn>
        </Link_Wrapper>
      </Header>
      <Content_Wrapper>
        <Title>{data?.fetchBoard?.title || "로딩중입니다!"}</Title>
        <Image src="/images/content.png"></Image>
        <Content>{data?.fetchBoard?.content || "로딩중입니다!"}</Content>
        <Like_Wrapper>
          <Like_button>
            <Like src="/images/up.png"></Like>
            <Like_p>1500</Like_p>
          </Like_button>
          <Like_button>
            <Bad src="/images/down.png"></Bad>
            <Like_p>1500</Like_p>
          </Like_button>
        </Like_Wrapper>
      </Content_Wrapper>
    </Wrapper>
  );
}

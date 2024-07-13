import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  console.log(data);

  const onClickMove = () => {
    router.push(`/section09/09-04-boards/${router.query.number}/edit`);
  }
  return (
    <div>
      <div>{router.query.number}번 페이지 이동이 완료되었습니다.</div>
      <div>작성자 : {data ? data.fetchBoard?.writer : "로딩중입니다!!"}</div>
      {/* 일단 data를 받아오고 있는동안에 data값을 보여주고 data가 오면 값을 보여주기 */}
      <div>제목 : {data?.fetchBoard?.title || "로딩중입니다!!"}</div>
      {/* 옵셔널 체이닝 optional-chaining이라고 함 */}
      <div>내용 : {data ? data.fetchBoard?.contents : "로딩중입니다!!"}</div>
      <button onClick={onClickMove}>수정하러가기</button>
    </div>
  );
}

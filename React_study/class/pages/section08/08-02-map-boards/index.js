import { gql, useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query {
    fetchBoards(page : 7) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data?.fetchBoards);
  const mystyles = {
    margin: "10px",
    padding: "0px",
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ mystyles }}> {el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.content}</span>
          <span style={{ margin: "10px" }}>{el.createdAt}</span>
        </div>
      ))}
      {/* <div>1번 페이지 이동이 완료되었습니다.</div> */}
      {/* <div>작성자 : {data && data.fetchBoard.writer}</div> */}
      {/* 일단 data를 받아오고 있는동안에 data값을 보여주고 data가 오면 값을 보여주기 */}
      {/* <div>제목 : {data?.fetchBoard.title}</div> */}
      {/* 옵셔널 체이닝 optional-chaining이라고 함 */}
      {/* <div>내용 : {data ? data.fetchBoard.contents : "로딩중입니다!!"}</div> */}
    </div>
  );
}

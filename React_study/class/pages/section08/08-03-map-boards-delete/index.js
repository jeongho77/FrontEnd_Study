import { gql, useMutation, useQuery } from "@apollo/client";
import { Fragment } from "react";
const FETCH_BOARD = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int!) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);
  const mystyles = {
    margin: "10px",
    padding: "0px",
  };

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARD }], //리패치됨 새로고침
    }); //딜리트 보드 요청
  };

  return (
    <div>
      {/* 특별한 이유가 없으면 ? fragment로 감싸자! <div/>는 1개더그려야되서 조금 느려짐 */}
      { data?.fetchBoards.map( (el, index) => (
          //반복을 10번해줌 맵을 쓸거면 div에 무조건 키 넣어주기
          // index론 키를 주지않는다. 왜냐하면 게시글을 삭제할때 다음 게시글이 올라오면서
          // 기존 index와 동일한 값을 갖게 됨 . 즉, 유일하지 않음.
       
          //1. 프로그먼트란? <></> , <Fragment></Fragment>
          //2. 프래그먼트에 key 입력하는 방법? <Fragment key ={1}></Fragment>
          // <Fragment key={el.number}>
          <div key={el.number}>
            <span>
              <input type="checkbox" />
            </span>
            <span style={{ mystyles }}> {el.number}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span>
              <button id={el.number} onClick={onClickDelete}>
                삭제
              </button>
            </span>
          </div>
          // </Fragment>
        )
      )}
      {/* <div>1번 페이지 이동이 완료되었습니다.</div> */}
      {/* <div>작성자 : {data && data.fetchBoard.writer}</div> */}
      {/* 일단 data를 받아오고 있는동안에 data값을 보여주고 data가 오면 값을 보여주기 */}
      {/* <div>제목 : {data?.fetchBoard.title}</div> */}
      {/* 옵셔널 체이닝 optional-chaining이라고 함 */}
      {/* <div>내용 : {data ? data.fetchBoard.contents : "로딩중입니다!!"}</div> */}
    </div>
  );
}

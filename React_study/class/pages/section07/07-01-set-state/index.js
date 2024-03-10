import BoardWrite from "../../../src/components/units/board/07-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  //한줄일때는 괄호()가 필요없음
  return (
    <div>
      <div>##########여기는 페이지입니다.</div>
      <BoardWrite />
      <div>##########여기는 페이지입니다..</div>
    </div>
  );
}

//props로 데이터를 부모가 자식에게 넘겨줄수있따!!

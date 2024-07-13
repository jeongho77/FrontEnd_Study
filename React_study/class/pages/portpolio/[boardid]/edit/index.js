import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/P_BoardNew.container";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
        query fetchBoard($number : Int){
            fetchBoard(number : $number){
                number
                writer
                title
                contents
            }
        }
    `;

export default function BoardsNewPage() {
    
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
        number : Number(router.query.boardid)
    },
  });

  return (
    
    <div>
      <div>##########여기는 페이지입니다.</div>
      <BoardWrite 
        isEdit = {true}
        data = {data}
      />
      <div>##########여기는 asd다..</div>
    </div>
  );
}
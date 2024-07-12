import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS); 
  console.log(data?.fetchBoards);

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/portpolio/${event.target.id}`);
  }

  const onClickMoveToBoardWrite = (event) => {
    router.push(`/portpolio/new`);
  }


  return (
    
    <BoardListUI data = {data}
    onClickMoveToBoardDetail = {onClickMoveToBoardDetail}
    onClickMoveToBoardWrite = {onClickMoveToBoardWrite}
    />
    
    );
}

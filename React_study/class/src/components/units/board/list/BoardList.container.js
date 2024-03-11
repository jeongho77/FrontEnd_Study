import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARD } from "./BoardList.queries";

export default function BoardList() {
  
  return <BoardListUI />;
}

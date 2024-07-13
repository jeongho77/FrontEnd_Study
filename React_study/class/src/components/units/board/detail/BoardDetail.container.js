import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.boardid) },
  });

  console.log(router.query.boardid);

  const onClickMoveToBoardList = () => {
    router.push(`/portpolio/list`);
  }

  const onClickDelete = (event) => {
      deleteBoard({
        variables: {
          number : Number(event.target.id),
        }
      })
      router.push(`/portpolio/list`);
  };

  const onClickMoveToEdit = () => {
    router.push(`/portpolio/${Number(router.query.boardid)}/edit`)
  }

  return <BoardDetailUI 
    data={data}
    onClickMoveToBoardList={onClickMoveToBoardList}
    onClickDelete={onClickDelete}
    onClickMoveToEdit={onClickMoveToEdit}
  />;
}

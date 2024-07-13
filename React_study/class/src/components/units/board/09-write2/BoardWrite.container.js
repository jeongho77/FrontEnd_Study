import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries"; //export 골라서 가져오기 가능
// import BoardWriteUI from "./BoardWrite.presenter"; //export default를쓰면 한개만 가져올수있음
//BoardWriteUI 아무거나 적어도됨 별칭같은거임   ㅁㄹㅇ머랸애 라 적어도 DEFAULT를 가져옴
import BoardWriteUI, { apple } from "./BoardWrite.presenter";
import { useRouter } from "next/router";
//{}를 사용해서 apple을 가져올수잇음
// import * as QQQ from "./BoardWrite.styles";
// QQQ.BlueButton;
// QQQ.RedInput; 이렇게하면 한번에 가져올수있음 *은 안되니 별칭붙히기

export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      // variables 이게 $ 역할을 함 $나 variables 같은거!
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
  };

  const onClickUpdate = async () => {
    const myVariables = { number: Number(router.query.number) }
    
    if(writer) myVariables.writer = writer
    if(title) myVariables.title = title
    if(contents) myVariables.contents = contents

    //여기서 수정하기 하자!!
    const result = await updateBoard({
      variables: myVariables
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);

  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>##########여기는 컨테이너입니다..</div>

      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} //undefined이거나, data 이거나 둘중 하나!!
      />
      <div>##########여기는 컨테이너입니다..</div>
    </div>
  );
}

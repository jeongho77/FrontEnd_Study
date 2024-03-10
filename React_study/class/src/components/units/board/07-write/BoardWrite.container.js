import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, 나의셋팅 } from "./BoardWrite.queries"; //export 골라서 가져오기 가능
// import BoardWriteUI from "./BoardWrite.presenter"; //export default를쓰면 한개만 가져올수있음
//BoardWriteUI 아무거나 적어도됨 별칭같은거임   ㅁㄹㅇ머랸애 라 적어도 DEFAULT를 가져옴
import BoardWriteUI, { apple } from "./BoardWrite.presenter";
//{}를 사용해서 apple을 가져올수잇음
// import * as QQQ from "./BoardWrite.styles";
// QQQ.BlueButton;
// QQQ.RedInput; 이렇게하면 한번에 가져올수있음 *은 안되니 별칭붙히기

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState();
  const [content, setContent] = useState();
  const [title, setTitle] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      // variables 이게 $ 역할을 함 $나 variables 같은거!
      variables: {
        writer: writer,
        title: title,
        contents: content,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && content && title) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.valuet && title) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContent(event.target.value);
    if (writer && content && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // const onChangeActive = (event) => {
  //   if (writer && content && title) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  return (
    <div>
      <div>##########여기는 컨테이너입니다..</div>

      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div>##########여기는 컨테이너입니다..</div>
    </div>
  );
}

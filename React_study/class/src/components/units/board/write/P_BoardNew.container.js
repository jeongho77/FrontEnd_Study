import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardNewUI from "./P_BoardNew.presenter";

export default function BoardNew() {
  const [writer, setWriter] = useState();
  const [pwd, setPwd] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [address, setAddress] = useState();

  const [board] = useMutation(graphQl);

  const [errorWriter, setErrorWriter] = useState();
  const [errorPwd, setErrorPwd] = useState();
  const [errorTitle, setErrorTitle] = useState();
  const [errorContent, setErrorContent] = useState();

  //--------------------------------------------------함수

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    setErrorWriter("");
  };

  const onChangePwd = (event) => {
    setPwd(event.target.value);
    setErrorPwd("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    setErrorTitle("");
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    setErrorContent("");
  };

  const submit = (event) => {
    if (!writer) {
      setErrorWriter("이름을 입력해주세요");
    }
    if (!pwd) {
      setErrorPwd("비밀번호를 입력해주세요");
    }
    if (!title) {
      setErrorTitle("제목을 입력해주세요");
    }
    if (!content) {
      setErrorContent("내용을 입력해주세요");
    }
    if (writer && pwd && title && content) {
      alert("등록이 완료됐습니다!");
      boardRegister();
    }
  };

  const boardRegister = async () => {
    const result = await board({
      variables: {
        writer: writer,
        title: title,
        contents: content,
      },
    });
  };

  return (
    <div>
      <BoardNewUI
        onChangeWriter={onChangeWriter}
        onChangePwd={onChangePwd}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        submit={submit}
        boardRegister={boardRegister}
      />
    </div>
  );
}

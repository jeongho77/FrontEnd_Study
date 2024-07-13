import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardNewUI from "./P_BoardNew.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./P_BoardNew.queries";
import { useRouter } from "next/router";

export default function BoardNew(props) {
  const router = useRouter(); //해당 상위폴더가 [] 로 되어있으면 가능

  const [writer, setWriter] = useState();
  const [pwd, setPwd] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const [isActive, setIsActive] = useState(false); 

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [errorWriter, setErrorWriter] = useState();
  const [errorPwd, setErrorPwd] = useState();
  const [errorTitle, setErrorTitle] = useState();
  const [errorContent, setErrorContent] = useState();

  //--------------------------------------------------함수

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    setErrorWriter("");
    if(event.target.value && pwd && title && content){
      setIsActive(true);
    }else{
      setIsActive(false)
    }
  };

  const onChangePwd = (event) => {
    setPwd(event.target.value);
    setErrorPwd("");
    if(writer && event.target.value && title && content){
      setIsActive(true);
    }else{
      setIsActive(false)
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    setErrorTitle("");
    if(writer && pwd && event.target.value && content){
      setIsActive(true);
    }else{
      setIsActive(false)
    }
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    setErrorContent("");
    if(writer && pwd && title && event.target.value){
      setIsActive(true);
    }else{
      setIsActive(false)
    }
  };

  const submit = async () => {
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
      try {
        const result = await createBoard({
          variables: { 
              writer,
              title,
              content,
          },
        });
        console.log(result.data.createBoard.number);
        router.push(`/portpolio/${result.data.createBoard.number}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const edit = async (event) => {
      const myVariables = {number : Number(router.query.boardid)}

      if(writer) myVariables.writer = writer;
      if(title) myVariables.title = title;
      if(content) myVariables.content = content;

      const result = await updateBoard({
        variables : myVariables
      });

      console.log(result)

      router.push(`/portpolio/${Number(router.query.boardid)}`);
      
  }

  const cancel = () => {
      router.push(`/portpolio/${Number(router.query.boardid)}`);
  }

  // const boardRegister = async () => {
  //   const result = await board({
  //     variables: {
  //       writer: writer,
  //       title: title,
  //       contents: content,
  //     },
  //   });
  // };

  return (
    <BoardNewUI
      errorWriter={errorWriter}
      errorPwd={errorPwd}
      errorTitle={errorTitle}
      errorContent={errorContent}
      onChangeWriter={onChangeWriter}
      onChangePwd={onChangePwd}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      submit={submit}
      isActive = {isActive}
      isEdit={props.isEdit}
      cancel={cancel}
      edit={edit}
      data={props.data}
    />
  );
}

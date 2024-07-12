import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.Head>
        <S.Title>베스트 게시글</S.Title>
        <S.BestContentWrapper>
            <S.BestContent>
              <S.Best_img src="/images/board1.png"></S.Best_img>
              <S.Best_title>게시물 제목입니다.</S.Best_title>
              <S.Best_Wrapper>
                <S.Best_Profile_Wrapper>
                  <S.Best_User_Writer_Wrapper>
                    <S.Best_userImg src="/images/user1.png"></S.Best_userImg>
                    <S.Best_writer>서정호</S.Best_writer>
                  </S.Best_User_Writer_Wrapper>
                    <S.Best_Date>Date : 2021.02.18</S.Best_Date>
                </S.Best_Profile_Wrapper>
                <S.Best_Like_Wrapper>
                  <S.Best_Like_btn></S.Best_Like_btn>
                  <S.Best_Like_Count>356</S.Best_Like_Count>
                </S.Best_Like_Wrapper>
              </S.Best_Wrapper>
            </S.BestContent>

            <S.BestContent>
              <S.Best_img src="/images/board2.png"></S.Best_img>
              <S.Best_title>게시물 제목입니다.</S.Best_title>
              <S.Best_Wrapper>
                <S.Best_Profile_Wrapper>
                  <S.Best_User_Writer_Wrapper>
                    <S.Best_userImg src="/images/user1.png"></S.Best_userImg>
                    <S.Best_writer>서정호</S.Best_writer>
                  </S.Best_User_Writer_Wrapper>
                    <S.Best_Date>Date : 2021.02.18</S.Best_Date>
                </S.Best_Profile_Wrapper>
                <S.Best_Like_Wrapper>
                  <S.Best_Like_btn></S.Best_Like_btn>
                  <S.Best_Like_Count>356</S.Best_Like_Count>
                </S.Best_Like_Wrapper>
              </S.Best_Wrapper>
            </S.BestContent>

            <S.BestContent>
              <S.Best_img src="/images/board3.png"></S.Best_img>
              <S.Best_title>게시물 제목입니다.</S.Best_title>
              <S.Best_Wrapper>
                <S.Best_Profile_Wrapper>
                  <S.Best_User_Writer_Wrapper>
                    <S.Best_userImg src="/images/user1.png"></S.Best_userImg>
                    <S.Best_writer>서정호</S.Best_writer>
                  </S.Best_User_Writer_Wrapper>
                    <S.Best_Date>Date : 2021.02.18</S.Best_Date>
                </S.Best_Profile_Wrapper>
                <S.Best_Like_Wrapper>
                  <S.Best_Like_btn></S.Best_Like_btn>
                  <S.Best_Like_Count>356</S.Best_Like_Count>
                </S.Best_Like_Wrapper>
              </S.Best_Wrapper>
            </S.BestContent>

            <S.BestContent>
              <S.Best_img src="/images/board4.png"></S.Best_img>
              <S.Best_title>게시물 제목입니다.</S.Best_title>
              <S.Best_Wrapper>
                <S.Best_Profile_Wrapper>
                  <S.Best_User_Writer_Wrapper>
                    <S.Best_userImg src="/images/user1.png"></S.Best_userImg>
                    <S.Best_writer>서정호</S.Best_writer>
                  </S.Best_User_Writer_Wrapper>
                    <S.Best_Date>Date : 2021.02.18</S.Best_Date>
                </S.Best_Profile_Wrapper>
                <S.Best_Like_Wrapper>
                  <S.Best_Like_btn></S.Best_Like_btn>
                  <S.Best_Like_Count>356</S.Best_Like_Count>
                </S.Best_Like_Wrapper>
              </S.Best_Wrapper>
            </S.BestContent>

        </S.BestContentWrapper>

        <S.Select_Wrapper>
          <S.Select_Input placeholder="제목을 검색해주세요."></S.Select_Input>
          <S.Date_Input placeholder="YYYY.MM.DD ~ YYYY.MM.DD"></S.Date_Input>
          <S.SelectBtn>검색하기</S.SelectBtn>
        </S.Select_Wrapper>

        
        <S.TableTop></S.TableTop>
        <S.Row>
          <S.ColumHeaderNumber>번호</S.ColumHeaderNumber>
          <S.ColumHeaderTitle>제목</S.ColumHeaderTitle>
          <S.ColumHeaderWriter>작성자</S.ColumHeaderWriter>
          <S.ColumHeaderDate>날짜</S.ColumHeaderDate>
        </S.Row>

        {props.data?.fetchBoards.map((el) => (
        <S.Row key={el.number}>
          {/* <span>
            <button id={el.number} onClick={() => console.log(el.number)}>
                삭제
              </button>
          </span> */}
          <S.ColumHeaderNumber>{String(el.number).slice(-4).toUpperCase()}</S.ColumHeaderNumber>
          <S.ColumTitle id={el.number} onClick={props.onClickMoveToBoardDetail}>{el.title}</S.ColumTitle>
          <S.ColumHeaderWriter>{el.writer}</S.ColumHeaderWriter>
          <S.ColumHeaderDate>{getDate(el.createdAt)}</S.ColumHeaderDate>
        </S.Row>
      ))}
      </S.Head>
      <S.Footer>
        <S.Write_btn onClick={props.onClickMoveToBoardWrite}>게시물 등록하기</S.Write_btn>
      </S.Footer>
    </S.Wrapper>

  );
}

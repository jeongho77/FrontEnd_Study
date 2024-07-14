import * as s from "./BoardComment.styles"
import Rating from 'react-rating-stars-component';
export default function BoardCommentUI(props) {
    return (
        <>
            <s.Write_wrapper>
                <s.Label_wrapper>
                    <s.Label_image/>
                    댓글
                </s.Label_wrapper>

                <s.Register_wrapper>
                    <s.WriterAndPwdAndRating_wrapper>
                        <s.Writer_edit placeholder="작성자"></s.Writer_edit>
                        <s.Pwd_edit placeholder="비밀번호"></s.Pwd_edit>
                        <Rating
                            count={5}
                            onChange={props.onRatingChange}
                            size={30}
                            activeColor="#ffd700"
                            value={props.rating}
                        />
                    </s.WriterAndPwdAndRating_wrapper>

                    <s.ContentAndSubmit_wrapper>
                        <s.Content_input placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></s.Content_input>
                        <s.Submit_wrapper>
                            <s.TextLength>0/100</s.TextLength>
                            <s.Submit_btn>등록하기</s.Submit_btn>
                        </s.Submit_wrapper>
                    </s.ContentAndSubmit_wrapper>

                </s.Register_wrapper>
                
            </s.Write_wrapper>

        </>
    )
}
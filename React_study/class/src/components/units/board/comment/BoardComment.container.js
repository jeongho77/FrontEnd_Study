import { useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";

export default function BoardComment() {
    const [rating,setRating] = useState(0);


    const onRatingChange = (newRating) => {
        setRating(newRating);
        console.log(newRating);
      };

    return <BoardCommentUI
        rating={rating} 
        onRatingChange={onRatingChange}
    ></BoardCommentUI>
}
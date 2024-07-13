import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title:String, $content:String) {
    createBoard(writer: $writer, title : $title, contents: $content) {
      _id
      number
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($number: Int, $writer: String, $title:String, $content:String) {
    updateBoard(number: $number, writer: $writer, title : $title, contents: $content) {
      _id
      number
      message
    }
  }
`;



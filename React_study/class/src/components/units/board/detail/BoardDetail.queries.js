import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number : $number){
      message
      number
    }
  }
`;

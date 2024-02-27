import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct( # 변수의 타입 적는 곳
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "정말 좋은 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
  };

  //한줄일때는 괄호()가 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}

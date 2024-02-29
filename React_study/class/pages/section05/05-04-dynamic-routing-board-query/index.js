import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/1"); //페이지 이동
  };

  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/2"); //페이지 이동
  };

  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/3"); //페이지 이동
  };

  return (
    <div>
      <button onClick={onClickMove1}>1번 페이지 이동하기!!!</button>;
      <button onClick={onClickMove2}>2번 페이지 이동하기!!!</button>;
      <button onClick={onClickMove3}>3번 페이지 이동하기!!!</button>;
    </div>
  );
}

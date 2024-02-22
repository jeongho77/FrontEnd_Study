//모든페이지의 공통설정들을 여기서 진행함
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

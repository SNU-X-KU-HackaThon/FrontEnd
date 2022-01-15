import "../styles/globals.css";
import * as S from "../styles/style";

function MyApp({ Component, pageProps }) {
  return (
    <S.Container>
      <S.Phone>
        <Component {...pageProps} />;
      </S.Phone>
    </S.Container>
  );
}

export default MyApp;

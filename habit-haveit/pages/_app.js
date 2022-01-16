import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import * as S from "../styles/style";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <S.Container>
        <S.Phone>
          <Component {...pageProps} />;
        </S.Phone>
      </S.Container>
    </RecoilRoot>
  );
}

export default MyApp;

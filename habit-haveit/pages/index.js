import Head from "next/head";
import * as S from "../styles/style";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Havit, Have it!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <div>Landing Page</div>
      </S.Main>
    </>
  );
}

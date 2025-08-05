import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

// NextPage 페이지 컴포넌트 + getLayout
type NextPageWithLayout = NextPage & {
  // Book 페이지처럼 검색바가 없는 페이지도 있으므로 ?로 optional chaining
  getLayout?: (page: ReactNode) => ReactNode;
};

// 기존 Component + getLayout으로 확장
export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  // Component.getLayout이 존재하면 그걸 쓰고, 없으면 그냥 page를 그대로 반환하는 기본 함수를 사용함
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

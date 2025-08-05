import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandowBooks from "@/lib/fetch-randow-books";
import Head from "next/head";

// SSR 방식으로 사전렌더링 : getServerSideProps
//export const getServerSideProps = async () => {
// SSG 방식 사전 렌더링 : getStaticProps
export const getStaticProps = async () => {
  // 이건 직렬방식, 아래는 병렬방식
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandowBooks();

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandowBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    // 업데이트 주기
    // revalidate: 3,
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: // getStaticProps함수의 반환값 타입을 자동으로 추론
InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* 페이지별로 다른 메타태그 적용가능 */}
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>
            지금 추천하는 도서
            {recoBooks.map((book) => (
              <BookItem key={book.id} {...book} />
            ))}
          </h3>
        </section>
        <section>
          <h3>
            등록된 모든 도서
            {allBooks.map((book) => (
              <BookItem key={book.id} {...book} />
            ))}
          </h3>
        </section>
      </div>
    </>
  );
}

// javascript 함수는 객체이기 때문에, 메서드형식으로 추가가 가능하다
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

//getLayout(page) 호출 시 search바 사용

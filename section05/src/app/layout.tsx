import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer() {
  // 지정해주지 않으면 자동으로 no-store 캐시 설정 (동적 페이지)
  // <Footer />를 하단 루트 컴포넌트에 사용하여 전체가 다이나믹 페이지로 처리됨
  // 캐시를 사용하려면 force-cache 또는 static-cache 설정
  // force-cache를 사용하면 캐시된 데이터를 사용하고, 서버에 요청하지 않음
  // static-cache를 사용하면 빌드 시점에 캐시된 데이터를 사용하고, 이후 변경되지 않음
  // force-cache를 사용하여 캐시된 데이터를 사용
  // static-cache를 사용하여 빌드 시점에 캐시된 데이터를 사용
  // 캐시를 사용하지 않으려면 no-store 설정
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <footer>제작 @YoungkyuK</footer>;
  }
  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @YoungkyuK</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

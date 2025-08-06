//"use client";
// 클라이언트 컴포넌트 쓰려면 "use client" 선언 필요

import ClientComponent from "../components/client-component";
import styles from "./page.module.css";
import ServerComponent from "../components/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}

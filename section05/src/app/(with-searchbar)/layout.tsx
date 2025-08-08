import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 사전렌더링에서 배제, 클라이언트측에서만 렌더링 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>

      {children}
    </div>
  );
}

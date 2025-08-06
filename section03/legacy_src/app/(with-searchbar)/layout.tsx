// layout : children props 받고 return문 안에 넣어야 함
// search 안에 있는 페이지는 layout으로 컨트롤

import Searchbar from "../components/searchbar";

// router-group : 경로상의 영향을 미치지 않고 레이아웃만 동일하게 적용이 가능하다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>임시 서치바</div>
      <Searchbar />
      {children}
    </div>
  );
}

import { useState } from "react";

export default function useHandleMultiPage() {
  const [currentPage, setCurrentPage] = useState(0);

  function switchPageTo(isNext) {
    const maxPages = 3;
    let page = currentPage;
    if (isNext) {
      page = page === maxPages ? 0 : ++page;
    } else {
      page = page === 0 ? maxPages : --page;
    }
    setCurrentPage(page);
  }

  return { currentPage, switchPageTo };
}

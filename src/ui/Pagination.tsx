import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

type PaginationProps = {
  count: number;
};

function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page") ? 1 : searchParams.get("page")!;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage(){
    const next =  currentPage === pageCount ? pageCount : +currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }
  function prevPage(){
    const prev = currentPage === 1 ? currentPage : +currentPage - 1;

    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount < 1) return null;
  
  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-2 text-sm">
        Showing <span>{(+currentPage - 1) * PAGE_SIZE + 1}</span> to <span>{ +currentPage === pageCount ? count : (+currentPage) * PAGE_SIZE }</span> of <span>{count}</span> results
      </p>

      <div className="flex gap-1.5">
        <button
          onClick={prevPage}
          disabled={+currentPage === 1}
          className={` ${true ? "bg-brand-600 text-brand-50" : "bg-grey-50 text-inherit"}
            hover:enabled:bg-brand-600 hover:enabled:text-brand-50 flex items-center
            justify-center gap-1 rounded-sm border-none px-3 py-1.5 text-sm font-medium
            transition-all duration-300 has-[span:first-child]:pr-1
            has-[span:last-child]:pl-1`}
        >
          <span> Previous </span>
        </button>
        <button
          onClick={nextPage}
          disabled={+currentPage === pageCount}
          className={` ${true ? "bg-brand-600 text-brand-50" : "bg-grey-50 text-inherit"}
            hover:enabled:bg-brand-600 hover:enabled:text-brand-50 flex items-center
            justify-center gap-1 rounded-sm border-none px-3 py-1.5 text-sm font-medium
            transition-all duration-300 has-[span:first-child]:pr-1
            has-[span:last-child]:pl-1`}
        >
          <span> Next </span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;

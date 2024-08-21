import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  type ProductResponseWithParams,
  constructUrl,
  constructPrevOrNext,
} from "@/utils";
import { useLoaderData, useLocation } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData() as ProductResponseWithParams;
  const { page, pageCount } = meta.pagination;

  const { pathname, search } = useLocation();
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  // Don't show pagination container if page count < 2 ------
  if (pageCount < 2) return null;

  // For pages ------
  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrl({ pageNumber, search, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  // For previous and next buttons ------
  const { prevUrl, nextUrl } = constructPrevOrNext({
    curretPage: page,
    pageCount,
    pathname,
    search,
  });

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious to={prevUrl} />
          </PaginationItem>
        )}

        {renderPagination}

        {pageCount > page && (
          <PaginationItem>
            <PaginationNext to={nextUrl} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationContainer;

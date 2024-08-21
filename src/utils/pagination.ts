type ConstructUrlParams = {
  pageNumber: number;
  search?: string;
  pathname: string;
};

export const constructUrl = ({
  pageNumber,
  search,
  pathname,
}: ConstructUrlParams): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("page", pageNumber.toString());
  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevOrNextParams = {
  curretPage: number;
  pageCount: number;
  search?: string;
  pathname: string;
};

export const constructPrevOrNext = ({
  curretPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
  let prevPage = curretPage - 1;
  if (prevPage < 1) prevPage = 1;
  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });

  let nextPage = curretPage + 1;
  if (nextPage > pageCount) nextPage = pageCount;
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });

  return { prevUrl, nextUrl };
};

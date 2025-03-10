import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { Booking } from "../../types";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy");
  const [field, direction] = sortByRaw?.split("-") || ["startDate", "desc"];
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page")!;

  const {
    isLoading,
    data: { data: bookings, count } = { data: [], count: 0 },
    error,
  } = useQuery<Data>({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, count, error };
}

type Data = {
  data: Booking[];
  count: number;
};

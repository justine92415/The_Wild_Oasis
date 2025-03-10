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
  const [field, direction] = sortByRaw?.split("-") || ['startDate', 'desc'];
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery<Booking[]>({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
}

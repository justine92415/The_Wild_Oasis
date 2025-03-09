import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { Booking } from "../../types";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery<Booking[]>({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, bookings, error };
}

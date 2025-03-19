import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type CheckInMutationFn = {
  bookingId: number;
  breakfast?: Breakfast;
};

type Breakfast = {
  hasBreakfast: boolean;
  extrasPrice: number;
  totalPrice: number;
};

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }: CheckInMutationFn) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries();
      navigate("/");
    },

    onError: () => {
      toast.error("Failed to check in booking");
    },
  });

  return { checkin, isCheckingIn };
}

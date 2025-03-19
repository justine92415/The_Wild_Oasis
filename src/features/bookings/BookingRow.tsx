import { format, isToday } from "date-fns";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { Booking } from "../../types";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";

export type BookingRowProps = {
  booking: Booking;
};

function BookingRow({
  booking: {
    id: bookingId,
    cabins: { name: cabinName },
    guests: { fullName: guestName, email },
    startDate,
    endDate,
    numNights,
    status,
    totalPrice,
  },
}: BookingRowProps) {
  const navigate = useNavigate();

  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Table.Row>
      {/* Cabin: font-size 1.6rem, font-weight 600, color grey-600, font-family "Sono" */}
      <div className="text-grey-600 font-['Sono'] text-base font-semibold">
        {cabinName}
      </div>

      {/* Stacked: flex column with gap */}
      <div className="flex flex-col gap-0.5">
        <span className="font-medium">{guestName}</span>
        <span className="text-grey-500 text-xs">{email}</span>
      </div>

      {/* Stacked */}
      <div className="flex flex-col gap-0.5">
        <span className="font-medium">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span className="text-grey-500 text-xs">
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      {/* Tag */}
      <span
        className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase ${
          status === "unconfirmed"
            ? "bg-blue-100 text-blue-700"
            : status === "checked-in"
              ? "bg-green-100 text-green-700"
              : "text-silver-700 bg-silver-100"
          }`}
      >
        {status.replace("-", " ")}
      </span>

      {/* Amount */}
      <div className="font-['Sono'] font-medium">
        {formatCurrency(totalPrice)}
      </div>

      <Menus.Menu>
        <Menus.Toggle id={+bookingId} />
        <Menus.List id={+bookingId}>
          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/bookings/${bookingId}`)}
          >
            See details
          </Menus.Button>

          {status === "unconfirmed" && (
            <Menus.Button
              icon={<HiArrowDownOnSquare />}
              onClick={() => navigate(`/checkin/${bookingId}`)}
            >
              Check in
            </Menus.Button>
          )}

          {status === "checked-in" && (
            <Menus.Button
              icon={<HiArrowUpOnSquare />}
              onClick={() => checkout(+bookingId)}
              disabled={isCheckingOut}
            >
              Check out
            </Menus.Button>
          )}
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default BookingRow;

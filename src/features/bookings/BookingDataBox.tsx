import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import { Flag } from "../../ui/Flag";

export type BookingDataBoxProps = {
  booking: {
    created_at: string;
    startDate: string;
    endDate: string;
    numNights: number;
    numGuests: number;
    cabinPrice: number;
    extrasPrice: number;
    totalPrice: number;
    hasBreakfast: boolean;
    observations: string;
    isPaid: boolean;
    guests: {
      fullName: string;
      email: string;
      country: string;
      countryFlag: string;
      nationalID: string;
    };
    cabins: {
      name: string;
    };
  };
};

// A purely presentational component
function BookingDataBox({ booking }: BookingDataBoxProps) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="bg-grey-0 border-grey-100 overflow-hidden rounded-md border">
      <header
        className="bg-brand-500 flex items-center justify-between px-10 py-5 text-lg font-medium
          text-indigo-100"
      >
        <div className="flex items-center gap-4 text-lg font-semibold">
          <HiOutlineHomeModern className="h-8 w-8" />
          <p>
            {numNights} nights in Cabin{" "}
            <span className="font-sono ml-1 text-xl">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className="px-10 pt-8 pb-3">
        <div className="text-grey-500 mb-4 flex items-center gap-3">
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p className="text-grey-700 font-medium">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem
          icon={<HiOutlineCheckCircle className="text-brand-600 h-5 w-5" />}
          label="Breakfast included?"
        >
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <div
          className={`mt-6 flex items-center justify-between rounded-sm px-8 py-4
            ${isPaid ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
        >
          <DataItem
            icon={<HiOutlineCurrencyDollar className="h-6 w-6 text-current" />}
            label={`Total price`}
          >
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice,
              )} breakfast)`}
          </DataItem>

          <p className="text-sm font-semibold uppercase">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </section>

      <footer className="text-grey-500 px-10 py-4 text-right text-xs">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;

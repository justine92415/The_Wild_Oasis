export type Booking = {
  id: string;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  status: string;
  guests: {
    fullName: string;
    email: string;
  };
  cabins: {
    name: string;
  };
};

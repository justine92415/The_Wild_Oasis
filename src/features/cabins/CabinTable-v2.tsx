import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabins";

function CabinTable() {
  const { isLoading, cabins } = useCabin();

  if (isLoading) return <Spinner />;

  return (
    <div
      className="border-grey-200 bg-grey-0 overflow-hidden rounded-md border text-sm"
      role="table"
    >
      <header
        role="row"
        className="bg-grey-50 border-grey-100 text-grey-600 grid
          grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 border-b px-6
          py-4 font-semibold tracking-wider uppercase"
      >
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {cabins?.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
    </div>
  );
}

export default CabinTable;

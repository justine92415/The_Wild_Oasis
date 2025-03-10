import { useSearchParams } from "react-router-dom";
import { Cabin } from "../../types";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabins";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function CabinTable() {
  const { isLoading, cabins } = useCabin();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins?.length) return <Empty resource="cabins" />;

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins = cabins;

  if (filterValue === "no-discount") {
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  } else if (filterValue === "with-discount") {
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  }

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a: any, b: any) => (+a[field] - +b[field]) * modifier,
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins!}
          render={(cabin: Cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;

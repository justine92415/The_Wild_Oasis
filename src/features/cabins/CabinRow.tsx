import { Cabin } from "../../types";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";

function CabinRow({ cabin }: { cabin: Cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isCreating, createCabin } = useCreateCabin();
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <div
        className="border-grey-100 grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center
          gap-x-6 border-b px-6 py-3.5 last:border-b-0"
      >
        <img
          className="block aspect-[3/2] w-16 -translate-x-2 scale-150 object-cover object-center"
          src={image}
          alt={name}
        />

        <div className="text-grey-600 font-['Sono'] text-base font-semibold">
          {cabin.name}
        </div>

        <div> Fits up to {maxCapacity} guests </div>

        <div className="font-['Sono'] font-semibold">
          {formatCurrency(regularPrice)}
        </div>

        {
          discount ? <div className="font-['Sono'] font-medium text-green-700">
          {formatCurrency(discount)}
        </div> : <span>&mdash;</span>
        }

        <div>
          <button onClick={() => handleDuplicate()} disabled={isCreating}>
            <HiSquare2Stack />
          </button>

          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>

          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;

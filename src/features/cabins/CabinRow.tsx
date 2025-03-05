// 原先的 styled-components 已移除
// import styled from "styled-components";

import { Cabin } from "../../types";
import { formatCurrency } from "../../utils/helpers";

function CabinRow({ cabin }: { cabin: Cabin }) {
  const { name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
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

      <div> Fits up tp {maxCapacity} guests </div>

      <div className="font-['Sono'] font-semibold">
        {formatCurrency(regularPrice)}
      </div>

      <div className="font-['Sono'] font-medium text-green-700">
        {formatCurrency(discount)}
      </div>

      <button>Delete</button>
    </div>
  );
}

export default CabinRow;

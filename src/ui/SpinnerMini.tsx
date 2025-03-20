import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini() {
  return (
    <div className="flex justify-center">
      <BiLoaderAlt className="h-6 w-6 animate-spin" />
    </div>
  );
}

export default SpinnerMini;

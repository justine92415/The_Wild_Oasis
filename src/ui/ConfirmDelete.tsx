import Button from "./Button";
import Heading from "./Heading";

type ConfirmDeleteProps = {
  resourceName: string;
  onConfirm: () => void;
  disabled: boolean;
  // pass from Modal
  onCloseModal?: () => void;
};

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal } : ConfirmDeleteProps) {
  return (
    <div className="w-100 flex flex-col gap-3">
      <Heading type="h3">Delete {resourceName}</Heading>
      <p className="text-grey-500 mb-3">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;

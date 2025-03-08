import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { Cabin } from "../../types";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

type CreateCabinFormProps = {
  cabinToEdit?: Cabin;
  onCloseModal?: () => void;
};

export type CabinForm = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: any;
};

function CreateCabinForm({ cabinToEdit, onCloseModal }: CreateCabinFormProps) {
  const isEditSession = Boolean(cabinToEdit);
  const { id: editId, ...editValues } = cabinToEdit || {};

  const { register, handleSubmit, reset, getValues, formState } =
    useForm<CabinForm>({
      defaultValues: isEditSession ? editValues : {},
    });

  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();

  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  function onSubmit(data: CabinForm) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const newCabin = { ...data, image };

    if (isEditSession) {
      editCabin(
        { newCabin, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createCabin(newCabin, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  function onError(errors: any) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          registration={register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          registration={register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          registration={register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          registration={register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          defaultValue=""
          disabled={isWorking}
          registration={register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          registration={register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <div className="flex justify-end gap-3 py-3 first:pt-0 last:pb-0">
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </div>
    </Form>
  );
}

export default CreateCabinForm;

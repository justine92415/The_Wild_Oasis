// 已移除 styled-components 引入
// import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

function CreateCabinForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log("###", data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
          py-3 first:pt-0 last:border-b-0 last:pb-0"
      >
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <Input type="text" id="name" registration={register("name")} />
      </div>

      <div
        className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
          py-3 first:pt-0 last:border-b-0 last:pb-0"
      >
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <Input type="number" id="maxCapacity" registration={register("maxCapacity")} />
      </div>

      <div
        className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
          py-3 first:pt-0 last:border-b-0 last:pb-0"
      >
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <Input type="number" id="regularPrice" registration={register("regularPrice")} />
      </div>

      <div
        className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
          py-3 first:pt-0 last:border-b-0 last:pb-0"
      >
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <Input type="number" id="discount" defaultValue={0} registration={register("discount")} />
      </div>

      <div
        className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
          py-3 first:pt-0 last:border-b-0 last:pb-0"
      >
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <Textarea id="description" defaultValue="" registration={register("description")} />
      </div>

      <div
        className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
          py-3 first:pt-0 last:border-b-0 last:pb-0"
      >
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <FileInput type="file" id="image" accept="image/*" registration={register("image")} />
      </div>

      <div className="flex justify-end gap-3 py-3 first:pt-0 last:pb-0">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </div>
    </Form>
  );
}

export default CreateCabinForm;

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

function Today() {
  return (
    <div className="bg-grey-0 border border-grey-100 rounded-md p-8 flex flex-col gap-6 col-span-2 pt-6">
      <Row type="horizontal">
        <Heading type="h2">Today</Heading>
      </Row>
    </div>
  );
}

export default Today;

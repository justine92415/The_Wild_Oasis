import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

function App() {
  return (
    <main className="p-5">
      <Row>
        <Row type="horizontal">
          <Heading type="h1">The Wild Oasis</Heading>
          <div>
            <Heading type="h2">Check in out</Heading>
            <Button variation='primary' size='medium' >Check in</Button>
            <Button variation='secondary' size='small'>Check out</Button>
          </div>
        </Row>

        <Row>
          <Heading type="h3">Form</Heading>
          <form>
            <Input />
            <Input />
          </form>
        </Row>
      </Row>
    </main>
  );
}

export default App;

import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";

function App() {
  return (
    <main className="bg-[orangered] p-5">
      <Heading type="h1">The Wild Oasis</Heading>
      <Heading type="h2">Check in out</Heading>
      <Button>Check in</Button>
      <Button>Check out</Button>
      <Heading type="h3">Form</Heading>
      <Input />
    </main>
  );
}

export default App;

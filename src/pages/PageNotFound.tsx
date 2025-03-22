import Heading from "../ui/Heading";

function PageNotFound() {
  return (
    <main className="bg-grey-50 flex h-screen items-center justify-center p-12">
      <div
        className="bg-grey-0 border-grey-100 max-w-6xl flex-none shrink border border-solid p-12
          text-center"
      >
        <Heading type="h1">
          The page you are looking for could not be found 😢
        </Heading>
        {/* <button onClick={moveBack} size="large">
          &larr; Go back
        </button> */}
      </div>
    </main>
  );
}

export default PageNotFound;

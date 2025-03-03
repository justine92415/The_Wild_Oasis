import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

// const StyledPageNotFound = styled.main`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 4.8rem;
// `;

// const Box = styled.div`
//   /* box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 4.8rem;
//   flex: 0 1 96rem;
//   text-align: center;

//   & h1 {
//     margin-bottom: 3.2rem;
//   }
// `;

function PageNotFound() {
  const moveBack = useMoveBack();

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

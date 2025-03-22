const ErrorFallback = ({ error='', resetErrorBoundary=() =>{} }: { error: string; resetErrorBoundary: () => void }) => {
  return (
    <main className="h-screen bg-[--color-grey-50] flex items-center justify-center p-[4.8rem]">
      <div className="bg-[--color-grey-0] border border-[--color-grey-100] rounded-[--border-radius-md] p-[4.8rem] flex-[0_1_96rem] text-center">
        <h1 className="mb-[1.6rem]">Something went wrong! 🧐</h1>
        <p className="font-['Sono'] mb-[3.2rem] text-[--color-grey-500]">{error}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </main>
  );
};

export default ErrorFallback;

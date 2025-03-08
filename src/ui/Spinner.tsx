function Spinner() {
  return (
    <div
      className="w-[6.4rem] aspect-square rounded-full mx-auto my-[4.8rem] animate-spinner"
      style={{
        background: 'radial-gradient(farthest-side, #4f46e5 94%, transparent) top/10px 10px no-repeat, conic-gradient(transparent 30%, #4f46e5)',
        maskImage: 'radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)',
      }}
    ></div>
  );
}

export default Spinner;

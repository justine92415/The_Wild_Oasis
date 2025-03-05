function Spinner() {
  return (
    <div
      style={{
        width: '6.4rem',
        aspectRatio: '1',
        borderRadius: '50%',
        margin: '4.8rem auto',
        background: 'radial-gradient(farthest-side, #4f46e5 94%, transparent) top/10px 10px no-repeat, conic-gradient(transparent 30%, #4f46e5)',
        maskImage: 'radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)',
        animation: 'spinner 1.5s infinite linear',
      }}
    ></div>
  );
}

export default Spinner;

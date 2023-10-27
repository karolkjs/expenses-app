const CaretIcon = ({ direction }: { direction: string }) => {
  return (
    <div
      className={`border-solid border-t-black border-t-8 border-x-transparent border-x-8 border-b-0 mr-1 ${
        direction === "asc" && "transform rotate-180"
      }`}
    ></div>
  );
};

export default CaretIcon;

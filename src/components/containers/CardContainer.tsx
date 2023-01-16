interface ICardContainerProps {
  children: React.ReactNode;
}
const CardContainer = ({ children }: ICardContainerProps) => {
  return (
    <div className="w-full h-auto px-3 gap-[6.25rem] grid grid-cols-3 grid-rows-2 border border-blue-500">
      {children}
    </div>
  );
};

export default CardContainer;

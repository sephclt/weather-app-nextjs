interface ICardContainerProps {
  children: React.ReactNode;
}
const CardContainer = ({ children }: ICardContainerProps) => {
  return (
    <div className="w-full h-auto px-3 flex xl:flex-row sm:flex-col xl:items-start sm:items-center gap-3 text-white">
      {children}
    </div>
  );
};

export default CardContainer;

interface ICardContainerProps {
  children: React.ReactNode;
}
const CardContainer = ({ children }: ICardContainerProps) => {
  return (
    <div className="w-full h-auto px-3 flex items-start gap-3 text-white">
      {children}
    </div>
  );
};

export default CardContainer;

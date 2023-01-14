interface ICardContainerProps {
  children: React.ReactNode;
}
const CardContainer = ({ children }: ICardContainerProps) => {
  return (
    <div className="max-w-wrapper h-auto grid grid-cols-3 grid-rows-4">
      {children}
    </div>
  );
};

export default CardContainer;

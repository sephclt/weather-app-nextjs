interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return (
    <div className="px-[4.938rem] py-10 flex flex-col justify-center items-center gap-4 border border-blue-500">
      {children}
    </div>
  );
};

export default Card;

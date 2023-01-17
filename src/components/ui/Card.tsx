interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return (
    <div
      className={`px-10 py-8 flex flex-col justify-center items-center gap-6 border border-blue-500`}
    >
      {children}
    </div>
  );
};

export default Card;

interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return (
    <div
      className={`max-w-card px-16 py-10 flex flex-col justify-center items-center gap-6 border border-blue-500`}
    >
      {children}
    </div>
  );
};

export default Card;

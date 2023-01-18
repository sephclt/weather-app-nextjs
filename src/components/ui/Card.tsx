interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return (
    <div
      className={`min-w-[23rem] px-10 py-8 flex flex-col justify-center items-center gap-6 bg-darkBg/40 rounded-xl`}
    >
      {children}
    </div>
  );
};

export default Card;

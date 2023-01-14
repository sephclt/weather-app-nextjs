interface IButtonProps {
  children: React.ReactNode;
  action?: () => {};
}

const Button = ({ children, action }: IButtonProps) => {
  return (
    <button
      className="bg-white hover:bg-gray-300 duration-100 rounded-xl px-5 py-4"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;

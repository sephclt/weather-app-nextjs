interface IHeaderWrapper {
  children: React.ReactNode;
}

const HeaderContainer = ({ children }: IHeaderWrapper) => {
  return (
    <div className="w-full h-25 flex justify-between items-center">
      {children}
    </div>
  );
};

export default HeaderContainer;

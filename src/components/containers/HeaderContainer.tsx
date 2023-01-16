interface IHeaderWrapper {
  children: React.ReactNode;
}

const HeaderContainer = ({ children }: IHeaderWrapper) => {
  return (
    <div className="p-4 flex justify-center items-center md:gap-[12.5rem] border border-blue-500">
      {children}
    </div>
  );
};

export default HeaderContainer;

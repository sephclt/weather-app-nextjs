interface IHeaderWrapper {
  children: React.ReactNode;
}

const HeaderContainer = ({ children }: IHeaderWrapper) => {
  return (
    <div className="w-full h-25 flex justify-center items-center md:gap-[22.188rem]">
      {children}
    </div>
  );
};

export default HeaderContainer;

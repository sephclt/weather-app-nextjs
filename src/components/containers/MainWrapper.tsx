interface IMainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: IMainWrapperProps) => {
  return (
    <div className="max-w-wrapper h-full flex flex-col justify-start items-center gap-3">
      {children}
    </div>
  );
};

export default MainWrapper;

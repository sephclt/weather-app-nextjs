interface IMainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: IMainWrapperProps) => {
  return (
    <div className="max-w-wrapper h-auto flex flex-col justify-center items-center gap-4">
      {children}
    </div>
  );
};

export default MainWrapper;

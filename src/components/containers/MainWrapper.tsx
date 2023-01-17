interface IMainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: IMainWrapperProps) => {
  return (
    <div className="max-w-wrapper h-auto flex flex-col justify-center items-center gap-3 border border-yellow-400">
      {children}
    </div>
  );
};

export default MainWrapper;

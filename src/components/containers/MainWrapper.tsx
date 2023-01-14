interface IMainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: IMainWrapperProps) => {
  return (
    <div className="max-w-wrapper h-auto py-4 flex flex-col justify-center items-center gap-5">
      {children}
    </div>
  );
};

export default MainWrapper;

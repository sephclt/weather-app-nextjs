import { Inter } from '@next/font/google';

import MainWrapper from '../containers/MainWrapper';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div
      className={`w-full h-full relative flex flex-col justify-center items-center ${inter.variable} font-sans bg-gray-700`}
    >
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default MainLayout;

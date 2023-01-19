import { Inter } from '@next/font/google';
import { StaticImageData } from 'next/image';

import MainWrapper from '../containers/MainWrapper';

interface IMainLayoutProps {
  children: React.ReactNode;
  imageOutput: { imageUrl: string; iconUrl: StaticImageData };
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MainLayout = ({ children, imageOutput }: IMainLayoutProps) => {
  return (
    <div
      className={`w-full h-full relative flex flex-col justify-center items-center ${inter.variable} font-sans ${imageOutput.imageUrl} bg-cover bg-center duration-150`}
    >
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default MainLayout;

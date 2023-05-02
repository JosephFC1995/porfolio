import { cn } from '@/utils/tw';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import Squares from '@/assets/svg/squares.svg';

interface HeroeProps {}

const Heroe = ({}: HeroeProps) => {
  return (
    <>
      <section id="top" className="flex min-h-[500px] items-center py-40 relative">
        <div className="mask-gradient absolute -right-[14rem] top-20 h-[700px] w-[1000px] overflow-hidden opacity-20">
          <Squares />
        </div>
        <div className="absolute right-0 top-52 h-[550px] w-[550px] bg-primary opacity-20 blur-[200px]"></div>
        <div className="container mt-32">
          <div className="relative max-w-[960px]">
            <span
              className={cn(
                'pointer-events-none absolute -top-16 left-auto right-0 -z-10 font-jost',
                'text-[130px] font-medium leading-[130px] text-primary md:text-[180px] md:leading-[160px] lg:-left-16 lg:right-auto'
              )}
            >
              Hello
            </span>
            <Balancer as={'h1'} className="mb-4 font-inter text-5xl font-extrabold leading-[48px] md:text-[68px] md:leading-[73px]">
              I'm Joseph and i am a Frontend Developer
            </Balancer>
            <Balancer as={'p'} className="text-base text-gray" ratio={0.3}>
              I’m a frontend developer located in Perú. I have nearly 2 years of experience in the market and i am passionate about crating attractive and functional web and mobile applications. I am
              open yo new opportunities and interesting projects.
            </Balancer>
            <div className="mt-7 flex gap-4 md:inline-flex">
              <Link href="#contact" className="btn btn-primary" scroll={false}>
                Contact me
              </Link>
              <Link href="#work" className="btn btn-outline" scroll={false}>
                Check my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heroe;

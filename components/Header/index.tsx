import { cn } from '@/utils/tw';
import { FC, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Scrollspy from 'react-scrollspy';

interface HeaderProps {}

interface ILink {
  id: string;
  label: string;
  to: string;
}

const links: ILink[] = [
  {
    id: 'work',
    label: 'Work',
    to: '/#work',
  },
  {
    id: 'resume',
    label: 'Resume',
    to: '/#resume',
  },
  {
    id: 'contact',
    label: 'Contact',
    to: '/#contact',
  },
  // {
  //   id: 'tools',
  //   label: 'Tools',
  // },
];

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Header: FC<HeaderProps> = () => {
  const [activeTab, setActiveTab] = useState(links[0].id);
  const [hasScrollPage, setHasScrollPage] = useState<boolean>(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (Number(latest) > 100) {
      setHasScrollPage(true);
      return;
    }
    setHasScrollPage(false);
  });

  return (
    <>
      <header
        className={cn(
          'fixed left-1/2 z-50 mt-[30px] flex h-[70px] w-full -translate-x-1/2 items-center justify-between px-4 transition-all duration-300 md:px-8',
          hasScrollPage && ' mt-0 bg-background shadow-xl shadow-black/5'
        )}
      >
        <div className="flex-1 font-inter text-2xl font-bold">
          <a className="cursor-pointer" onClick={() => scrollToTop()}>
            Joseph <span className="font-jost text-primary">DEV</span>
          </a>
        </div>
        <div className="hidden flex-1 justify-center md:flex">
          <nav>
            <Scrollspy
              items={['top', 'work', 'resume', 'contact']}
              className="flex h-[50px] items-center rounded-[96px] bg-black p-[6px] text-white"
              currentClassName="isCurrent"
              offset={-100}
              onUpdate={(e) => setActiveTab(e.id)}
            >
              {links.map((link) => (
                <li className="h-full" key={link.id} onClick={() => setActiveTab(link.id)}>
                  <Link
                    className={cn(
                      'relative flex h-full items-center rounded-[90px] px-6 font-semibold transition duration-300 focus-visible:outline-2',
                      activeTab === link.id ? '' : 'hover:text-white/80'
                    )}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                    href={link.to}
                    scroll={false}
                  >
                    {activeTab === link.id && (
                      <motion.span layoutId="bubble" className="absolute inset-0 z-10 bg-primary" style={{ borderRadius: 9999 }} transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                    )}
                    <p className={cn(activeTab === link.id && 'z-20 text-black transition')}>{link.label}</p>
                  </Link>
                </li>
              ))}
            </Scrollspy>
          </nav>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="flex gap-4">
            <Link href={'https://www.linkedin.com/in/josefc9512/'} target="_blank" className="relative">
              <span className="absolute -right-1 -top-1 h-[8px] w-[8px] rounded-full bg-primary"></span>
              <Linkedin color="black" size={24} />
            </Link>
            <Link href={'https://github.com/JosephFC1995'} target="_blank" className="relative">
              <span className="absolute -right-1 -top-1 h-[8px] w-[8px] rounded-full bg-primary"></span>
              <Github color="black" size={24} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

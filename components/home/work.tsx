import { cn } from '@/utils/tw';
import { useEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import WorkItem from '@/components/WorkItem';
import Squares from '@/assets/svg/squares.svg';

import workJson from '@/data/works.json';

type TTags = 'All' | 'TypeScript' | 'React' | 'JavaScript' | 'HTML & CSS' | 'Node JS' | 'WordPress' | 'Vue JS';

const tags: TTags[] = ['All', 'TypeScript', 'JavaScript', 'React', 'Vue JS', 'HTML & CSS', 'Node JS', 'WordPress'];

export interface IWorkItem {
  image: any;
  title: string;
  tags: TTags[];
  description: string;
  previewLink?: null | string;
  repositoryLink?: null | string;
}

const workItems: IWorkItem[] = workJson as IWorkItem[];

interface WorkSectionProps {}

const WorkSection = ({}: WorkSectionProps) => {
  const [activeWork, setActiveWork] = useState<TTags>('All');
  const [works, setworks] = useState(workItems);

  useEffect(() => {
    const filter = activeWork === 'All' ? workItems : workItems.filter((work) => work.tags.includes(activeWork));
    setworks([...filter]);
  }, [activeWork]);

  return (
    <>
      <section id="work" className="relative pb-10 pt-20">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <span className="relative mr-[73px] font-jost before:absolute before:inset-0 before:left-1/2 before:w-full before:rounded-full before:bg-primary">
                <h2 className="relative">Work</h2>
              </span>
            </div>
            <Balancer as={'p'} className="text-gray">
              Take a look at my commercial and non-commercial projects. If you have any questions, feel free to ask for more information.
            </Balancer>
          </div>
          {/* TABS */}
          <ul
            className={cn(
              'mb-11 flex justify-start gap-6 overflow-x-scroll whitespace-nowrap xl:justify-center lg:overflow-x-auto pb-1 xl:pb-0',
              'scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary'
            )}
          >
            {tags.map((tag, index) => (
              <li
                key={index}
                className={cn('cursor-pointer rounded-full bg-black px-6 py-2 text-sm font-bold text-white transition-all duration-200', activeWork === tag && 'bg-primary text-black')}
                onClick={() => setActiveWork(tag)}
              >
                <span>{tag}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
            {works.map((work, index) => {
              return <WorkItem key={index} {...work} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSection;

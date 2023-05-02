import Squares from '@/assets/svg/squares.svg';
import Balancer from 'react-wrap-balancer';
import resumeJson from '@/data/resume.json';
import Button from '@/components/Button';
import { padLeadingZeros } from '@/utils/string';
import { cn } from '@/utils/tw';
import { Download } from 'lucide-react';
import { FC } from 'react';

const skills: string[] = ['TypeScript', 'Node JS', 'Git', 'JavaScript', 'HTML & CSS', 'Figma', 'React', 'PHP', 'Android', 'Vue JS', 'WordPress', '', 'Angular', 'MySQL'];

const resumes: IResume[] = resumeJson as IResume[];

interface IResume {
  title: string;
  subTitle: string;
  time: string;
}

interface ResumeSectionProps {}

const ItemResume: FC<IResume> = ({ title, subTitle, time }) => {
  return (
    <>
      <div className="relative block text-center">
        <h4 className="mb-3">{title}</h4>
        <p className="text-sm text-gray">{subTitle}</p>
        <p className="text-sm text-gray">{time}</p>
      </div>
    </>
  );
};

const ResumeSection = ({}: ResumeSectionProps) => {
  return (
    <>
      <section id="resume" className="relative py-20">
        <div className="mask-gradient absolute -left-[14rem] top-40 h-[700px] w-[1000px] overflow-hidden opacity-20">
          <Squares />
        </div>
        <div className="absolute left-0 top-52 h-[550px] w-[550px] bg-primary opacity-20 blur-[200px]"></div>
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <span className="relative mr-[73px] font-jost before:absolute before:inset-0 before:left-1/2 before:w-full before:rounded-full before:bg-primary">
                <h2 className="relative">Resume</h2>
              </span>
            </div>
            <Balancer as={'p'} className="text-gray">
              Discover my journey as a programmer since I graduated as a Systems Engineer 2 years ago. Throughout this journey, I was able to develop my skills to become a frontend developer.
            </Balancer>
          </div>
          <div className="relative">
            <h3 className="mb-9 text-center font-bold uppercase">Education</h3>
            <div className="text-center">
              <ItemResume title="System Engineer" subTitle="Cesar Vallejo University - Lima" time="2014 - 2019" />
            </div>
            <h3 className="mb-9 mt-16 text-center font-bold uppercase">Work experience</h3>
            <div className="mx-auto mb-20 flex max-w-3xl flex-wrap gap-x-4">
              {resumes.map((resume, index) => {
                return (
                  <div key={index} className={cn('my-10 flex-[0_0_100%] md:flex-[0_0_50%] first:mt-0 last:mb-0', index % 2 !== 0 && 'ml-auto')}>
                    <div className="relative flex justify-center">
                      <span
                        className={cn(
                          'pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-jost text-[120px] font-bold leading-[90px] text-primary opacity-40',
                          index % 2 !== 0 && 'left-0 right-auto'
                        )}
                      >
                        {padLeadingZeros(index + 1)}
                      </span>
                      <ItemResume {...resume} />
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="mb-9 text-center font-bold uppercase">Skills</h3>
            <div className="relative mx-auto mb-20 max-w-xl">
              <div className="grid text-center md:text-left grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  return (
                    <div key={index} className="col-span-1">
                      <h4>{skill}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <h4 className="mb-5 text-center">Download my resume as PDF File</h4>
            <div className="flex justify-center">
              <Button>
                <Download width={20} height={20} />
                Download (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeSection;

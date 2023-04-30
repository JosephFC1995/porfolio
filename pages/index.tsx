import Button from '@/components/Button';
import GlobalHead from '@/components/Head';
import Header from '@/components/Header';
import WorkItem from '@/components/WorkItem';
import { padLeadingZeros } from '@/utils/string';
import { cn } from '@/utils/tw';
import { Formik } from 'formik';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { object, string } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Squares from '@/assets/svg/squares.svg';

type TTags = 'JavaScript' | 'HTML & CSS' | 'Node JS' | 'WordPress' | 'TypeScript';

const tags: TTags[] = ['TypeScript', 'JavaScript', 'HTML & CSS', 'Node JS', 'WordPress'];

const skills: string[] = ['TypeScript', 'Node JS', 'Git', 'JavaScript', 'HTML & CSS', 'Figma', 'React', 'PHP', 'Android', 'Vue JS', 'WordPress', '', 'Angular', 'MySQL'];

export interface IWorkItem {
  image: any;
  title: string;
  tags: TTags[];
  description: string;
  previewLink?: null | string;
  repositoryLink?: null | string;
}

const workItems: IWorkItem[] = [
  {
    image: null,
    title: 'Work Item',
    tags: ['JavaScript', 'HTML & CSS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium libero. Magnam commodi nam nemo.',
    previewLink: '#',
    repositoryLink: null,
  },
  {
    image: null,
    title: 'Work Item',
    tags: ['JavaScript', 'HTML & CSS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium libero. Magnam commodi nam nemo.',
    previewLink: '#',
    repositoryLink: null,
  },
  {
    image: null,
    title: 'Work Item',
    tags: ['JavaScript', 'HTML & CSS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium libero. Magnam commodi nam nemo.',
    previewLink: '#',
    repositoryLink: null,
  },
  {
    image: null,
    title: 'Work Item',
    tags: ['JavaScript', 'HTML & CSS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium libero. Magnam commodi nam nemo.',
    previewLink: '#',
    repositoryLink: null,
  },
  {
    image: null,
    title: 'Work Item',
    tags: ['JavaScript', 'HTML & CSS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium libero. Magnam commodi nam nemo.',
    previewLink: '#',
    repositoryLink: null,
  },
  {
    image: null,
    title: 'Work Item',
    tags: ['JavaScript', 'HTML & CSS'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium libero. Magnam commodi nam nemo.',
    previewLink: '#',
    repositoryLink: null,
  },
];

const resumes: IResume[] = [
  {
    title: 'Freelancer - WordPress Developer',
    subTitle: 'RBM Import - Virtual Dent',
    time: 'Jan 2018 -  Feb 2018',
  },
  {
    title: 'Freelancer - WordPress Developer',
    subTitle: 'Krear 3D',
    time: 'Nov 2018 -  Feb 2019',
  },
  {
    title: 'Web Developer',
    subTitle: 'Somos Sistemas SAC',
    time: 'Jan 2018 -  Jun 2019',
  },
  {
    title: 'Freelancer - Web Developer',
    subTitle: 'Tribunal Constitucional del Perú',
    time: 'Mar 2019 -  Agu 2019',
  },
  {
    title: 'Freelancer - Web Developer',
    subTitle: 'Tribunal Constitucional del Perú',
    time: 'Jan 2020 -  Sep 2020',
  },
  {
    title: 'Web consultant',
    subTitle: 'Algoritmo Creativo',
    time: 'Agu 2020 -  Nov 2020',
  },
  {
    title: 'Developer Full Stack',
    subTitle: 'Comunal Co',
    time: 'Jan 2021 -  Feb 2022',
  },
  {
    title: 'Frontend Developer',
    subTitle: 'Comunal Co',
    time: 'Feb 2022 -  Now',
  },
];

interface IResume {
  title: string;
  subTitle: string;
  time: string;
}

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

export default function Home() {
  const [activeWork, setActiveWork] = useState<TTags | null>(null);

  const contactFormSchema = object({
    name: string({
      required_error: 'Please enter your name',
    }),
    email: string({
      required_error: 'Please enter your name',
    }).email('Please enter correct email'),
    message: string().min(0).max(1000),
  });

  const submitForm = (values: any, actions: any) => {
    console.log(values, actions);
  };

  return (
    <>
      <GlobalHead title="Frontend Developer - Joseph Flores" />
      <Header />
      <div className="mask-gradient absolute -right-[14rem] h-[700px] w-[1000px] overflow-hidden">
        <Squares />
      </div>
      <div className="absolute right-0 top-52 h-[550px] w-[550px] bg-primary opacity-20 blur-[200px]"></div>
      <section id="top" className="flex min-h-[500px] items-center py-40">
        <div className="container mt-32">
          <div className="relative max-w-[960px]">
            <span className="pointer-events-none absolute -left-16 -top-16 -z-10 font-jost text-[180px] font-medium leading-[160px] text-primary">Hello</span>
            <Balancer as={'h1'} className="mb-4 font-inter text-[68px] font-extrabold leading-[73px]">
              I'm Joseph and i am a Frontend Developer
            </Balancer>
            <Balancer as={'p'} className="text-base text-gray" ratio={0.3}>
              I’m a frontend developer located in Perú. I have nearly 2 years of experience in the market and i am passionate about crating attractive and functional web and mobile applications. I am
              open yo new opportunities and interesting projects.
            </Balancer>
            <div className="mt-7 inline-flex gap-4">
              <a href="#" className="btn btn-primary">
                Contact me
              </a>
              <a href="#" className="btn btn-outline">
                Check my work
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="pb-10 pt-20">
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
          <ul className="mb-11 flex justify-center gap-6">
            <li
              className={cn('relative cursor-pointer rounded-full bg-black px-6 py-2 text-sm font-bold text-white transition duration-200', !activeWork && 'bg-primary text-black')}
              onClick={() => setActiveWork(null)}
            >
              <span>All</span>
            </li>
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

          <div className="grid grid-cols-4 gap-7">
            {workItems.map((work, index) => {
              return <WorkItem key={index} {...work} />;
            })}
          </div>
        </div>
      </section>
      <section id="resume" className="py-20">
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
              <ItemResume title="System Engineer" subTitle="Universidad Cesar Vallejo - Lima" time="2014 - 2019" />
            </div>
            <h3 className="mb-9 mt-16 text-center font-bold uppercase">Work experience</h3>
            <div className="mx-auto mb-20 flex max-w-3xl flex-wrap gap-x-4">
              {resumes.map((resume, index) => {
                return (
                  <div key={index} className={cn('my-10 flex-[0_0_50%] first:mt-0 last:mb-0', index % 2 !== 0 && 'ml-auto')}>
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
              <div className="grid grid-cols-3 gap-4">
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
      <section id="contact" className="py-20 pt-5">
        <div className="container">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <span className="relative mr-[73px] font-jost before:absolute before:inset-0 before:left-1/2 before:w-full before:rounded-full before:bg-primary">
                <h2 className="relative">Contact</h2>
              </span>
            </div>
            <Balancer as={'p'} className="text-gray" ratio={0.56}>
              Let me know if you are interested in my services or collaboration. I will reply as soon as possible.
            </Balancer>
          </div>
          <div className="mx-auto mb-20 max-w-2xl">
            <Formik
              initialValues={{
                email: '',
                name: '',
                message: '',
              }}
              onSubmit={submitForm}
              validationSchema={toFormikValidationSchema(contactFormSchema)}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className="relative mb-2 pb-6">
                    <input
                      type="email"
                      inputMode="email"
                      className={cn(
                        'form-input h-12 w-full rounded-full bg-transparent px-4 text-base text-black shadow-none focus:border-primary focus:ring-primary focus:ring-opacity-50',
                        'transition-all duration-300 placeholder:text-black',
                        props.errors.email && 'border-red-500 text-red-500 placeholder:text-red-500'
                      )}
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="email"
                      placeholder="Enter your email address"
                      autoComplete="email"
                    />
                    {props.errors.email && <div className="absolute -bottom-[0px] left-4 text-xs font-bold text-red-500">{props.errors.email}</div>}
                  </div>
                  <div className="relative mb-2 pb-6">
                    <input
                      type="text"
                      inputMode="text"
                      className={cn(
                        'form-input  h-12 w-full rounded-full bg-transparent px-4 text-base text-black shadow-none focus:border-primary focus:ring-primary focus:ring-opacity-50',
                        'transition-all duration-300 placeholder:text-black',
                        props.errors.name && 'border-red-500 text-red-500 placeholder:text-red-500'
                      )}
                      value={props.values.name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                    />
                    {props.errors.name && <div className="absolute -bottom-[0px] left-4 text-xs font-bold text-red-500">{props.errors.name}</div>}
                  </div>

                  <div className="relative mb-2 pb-6">
                    <textarea
                      rows={5}
                      className={cn(
                        'form-input w-full rounded-3xl bg-transparent px-4 text-base text-black shadow-none focus:border-primary focus:ring-primary focus:ring-opacity-50',
                        'resize-none transition-all duration-300 placeholder:text-black'
                      )}
                      value={props.values.message}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="message"
                      placeholder="Tell me"
                    />
                  </div>

                  <div className="flex justify-center">
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <h3 className="mb-9 text-center font-bold uppercase">Let's Talk</h3>
          <div className="relative flex justify-center text-lg font-bold">
            <Link href="mailto:josefc9512@gmail.com" target="_blank" legacyBehavior passHref>
              <a className="group inline-flex items-center gap-3 text-center">
                josefc9512@gmail.com <ArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import GlobalHead from '@/components/Head';
import Header from '@/components/Header';
import { cn } from '@/utils/tw';
import { Formik } from 'formik';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { object, string } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Squares from '@/assets/svg/squares.svg';

import Heroe from '@/components/home/heroe';
import WorkSection from '@/components/home/work';
import ResumeSection from '@/components/home/resume';
import ContactSection from '@/components/home/contact';

export default function Home() {
  return (
    <>
      <GlobalHead title="Frontend Developer - Joseph Flores" description="Frontend developer, specialized in Javascript with 3 years of experience in markup." />
      <Header />
      <Heroe />
      <WorkSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}

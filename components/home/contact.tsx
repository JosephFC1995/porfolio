import Squares from '@/assets/svg/squares.svg';
import { cn } from '@/utils/tw';
import { Formik } from 'formik';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { object, string } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

interface ContactSectionProps {}

const ContactSection = ({}: ContactSectionProps) => {
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
      <section id="contact" className="relative py-20 pt-5">
        <div className="mask-gradient absolute -right-[14rem] top-0 h-[700px] w-[1000px] overflow-hidden opacity-20">
          <Squares />
        </div>
        <div className="absolute right-0 top-0 h-[550px] w-[550px] bg-primary opacity-20 blur-[200px]"></div>
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
};

export default ContactSection;

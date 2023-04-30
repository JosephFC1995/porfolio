import Head from 'next/head';
import React, { FC } from 'react';

interface GlobalHeadProps {
  title: string;
  description?: string;
  keyword?: string;
  children?: React.ReactNode;
}

const GlobalHead: FC<GlobalHeadProps> = ({ title, description, keyword, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keyword} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default GlobalHead;

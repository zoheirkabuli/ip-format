import Head from 'next/head';
import { GetServerSideProps } from 'next';
// *
import ListIp from '@/components/list/ListIp';

export default function Home({ query }: any) {
  return (
    <>
      <Head>
        <title>Hiddify</title>
        <meta name="description" content="ساخت آی پی سفارشی برای auto cdn" />
      </Head>
      <ListIp ipsQuery={query as string} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      query: ctx.query.ips,
    },
  };
};

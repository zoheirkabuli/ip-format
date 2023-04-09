import Head from 'next/head';

// *
import ListIp from '@/components/list/ListIp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiddify</title>
        <meta name="description" content="ساخت آی پی سفارشی برای auto cdn" />
      </Head>
      <ListIp />
    </>
  );
}

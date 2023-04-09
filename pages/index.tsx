import Head from 'next/head';

// *
import ListIp from '@/components/list/ListIp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiddify</title>
      </Head>
      <ListIp />
    </>
  );
}

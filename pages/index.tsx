import Head from 'next/head';
import { useRouter } from 'next/router';
// *
import ListIp from '@/components/list/ListIp';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Hiddify</title>
        <meta name="description" content="ساخت آی پی سفارشی برای auto cdn" />
      </Head>
      <ListIp ipsQuery={router.query['ips'] as string} />
    </>
  );
}

import {SessionProvider} from 'next-auth/react';
import '@/styles/globals.css';

export default function MyApp({
  Component,
  pageProps: {session, ...pageProps},
}) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

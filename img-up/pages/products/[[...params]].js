import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';

export default function Params() {
  console.log(1);
  const router = useRouter();
  return (
    <h1>Params: {JSON.stringify(router.query)}</h1>
  )
}

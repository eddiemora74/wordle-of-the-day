
import Head from 'next/head'; 
import Body from '../components/Body';
import Text from '../components/Text';
import getWordle from '../server/getWordle';

export default function Home({ number, word }) {
  return (
    <>
    <Head>
      <title>Wordle of the day</title>
    </Head>
    <Body>
      <Text>Wordle Number: {number}</Text>
      <Text>Wordle of the day: {word.toUpperCase()}</Text>
    </Body>
    </>
    
  )
}

export async function getServerSideProps() {
  const {number, word} = await getWordle();
  return {props: { number, word }};
}


import Head from 'next/head'; 
import Body from '../components/Body';
import Text from '../components/Text';
import WordTile from '../components/WordTile';
import WordTileGroup from '../components/WordTileGroup';
import getWordle from '../server/getWordle';

export default function Home({ number, word }) {
  return (
    <>
    <Head>
      <title>Wordle of the day</title>
    </Head>
    <Body>
      <Text>WORDLE {number}</Text>
      <WordTileGroup>
        {word.split("").map((letter, idx) => (
          <WordTile key={idx}>{letter}</WordTile>
        ))}
      </WordTileGroup>
    </Body>
    </>
    
  )
}

export async function getServerSideProps() {
  const {number, word} = await getWordle();
  return {props: { number, word }};
}

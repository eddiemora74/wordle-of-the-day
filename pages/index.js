
import Head from 'next/head'; 
import Body from '../components/Body';
import Text from '../components/Text';
import WordTile from '../components/WordTile';
import WordTileGroup from '../components/WordTileGroup';
import Footer from '../components/Footer';
import MediaIcon from '../components/MediaIcon';
import ghLogo from "../public/github.png";
import wdLogo from "../public/wordle.png";
import getWordle from '../server/getWordle';

export default function Home({ number, word }) {
  const githubIcon = {
    link: process.env.NEXT_GITHUB_LINK,
    src: ghLogo,
    alt: process.env.NEXT_GITHUB_ALT
  };

  const wordleIcon = {
    link: process.env.NEXT_WORDLE_LINK,
    src: wdLogo,
    alt: process.env.NEXT_WORDLE_ALT
  };

  return (
    <>
    <Head>
      <title>Wordle of the day</title>
    </Head>
    <Body id='main-content'>
      <Text>WORDLE {number}</Text>
      <WordTileGroup>
        {word.split("").map((letter, idx) => (
          <WordTile key={idx}>{letter}</WordTile>
        ))}
      </WordTileGroup>
    </Body>
    <Footer>
      <MediaIcon {...githubIcon} />
      <MediaIcon {...wordleIcon} />
    </Footer>
    </>
  );
}

export async function getServerSideProps() {
  const {number, word} = await getWordle();
  return {props: { number, word }};
}

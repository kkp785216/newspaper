import React from 'react'
import Highlights from '../components/Highlights';
import FlashNew from '../components/FlashNew';
import { Aside, Main, Section } from '../components/Layout';
import Featured from '../components/Featured';
import StayConnected from '../components/StayConnected';
import { Ad300 } from '../components/Advertisement';
import LatestArticles from '../components/LatestArticles';
import MostPopular from '../components/MostPopular';

const Home = () => {

  return (<>
    <Highlights />
    <FlashNew />

    <Section>
      <Main>
        {/* Featured */}
        <Featured />
      </Main>
      <Aside>
        {/* Stay Connected */}
        <StayConnected />
        {/* Advertisement 300 */}
        <Ad300 />
      </Aside>
    </Section>

    <Section>
      <Main>
        {/* Latest Articles */}
        <LatestArticles />
      </Main>
      <Aside>
        {/* Most Popular */}
        <MostPopular />
      </Aside>
    </Section>
  </>)
}

export default Home
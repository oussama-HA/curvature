import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About Us</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About Us</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">

              <h2>What Is The Curvature?</h2>
              <br/>
              <p>
              The Curvature is your destination to discover the best women's workouts, 
              exercises, fitness, pre-workouts, diet, healthy recipes, relationships, Dating, Sex, 
              and much more. Our team is dedicating to provide you with the latest weight loss tips, 
              and products, Where we pick up the most fabulous products and feed it into our review 
              process, to make sure you will get the most enlightening, non-biased and valuable reviews 
              on your next buying. 
              </p>
              <h2>Why The Curvature Is Different?</h2>
              <br/>
              <p>
              The internet is a thriving place of information where you can find millions of articles 
              about weight loss, fitness, pre-workouts, food, diet, healthy recipes...etc 

              It's really hard and confusing to find the right piece of information without getting lost
              in this huge jungle of blogs, forums, social media and search engines. 
               <br/>
               We have been there, Finding a simple website that loads fast without annoying ads and pop-ups and provides 
               a well-written content was like a mission impossible.
              </p>
              <p>
              The idea behind The Curvature starts here. We developed a website with clean design, fast-loading, 
              with No ads whatsoever, and a lot of high-quality content that provides real value to the readers.
              </p>
              <p>
              We aim to be the go-to destination to learn about topics related only to women such as Fitness, 
              Workouts, Health, Weight Loss, Beauty, Skin-care, Sex, Dating, Relationships... etc
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

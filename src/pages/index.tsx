import { type GetServerSideProps } from 'next';
import Head from 'next/head';
import { type ReactNode } from 'react';

import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { ChallengeProvider, CountDownProvider } from '../contexts';

interface HomeProps {
  completedChallenges: number;
  experience: number;
  level: number;
}

export default function Home(props: HomeProps): ReactNode {
  return (
    <ChallengeProvider initialValue={props}>
      <div className="container">
        <Head>
          <title>Move.it | Home</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <main>
            <section className="leftSection">
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </section>

            <section className="rightSection">
              <ChallengeBox />
            </section>
          </main>
        </CountDownProvider>
      </div>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      level: Number(ctx.req.cookies[process.env.NEXT_PUBLIC_STORAGE_KEY_LEVEL]) || 1,
      experience: Number(ctx.req.cookies[process.env.NEXT_PUBLIC_STORAGE_KEY_EXPERIENCE]) || 0,
      completedChallenges:
        Number(ctx.req.cookies[process.env.NEXT_PUBLIC_STORAGE_KEY_CHALLENGES]) || 0,
    },
  };
};

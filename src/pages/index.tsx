import Head from 'next/head'
import ChallengeProvider from '../contexts'
import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import ChallengeBox from '../components/ChallengeBox'
import CountDown from '../components/CountDown'
import Profile from '../components/Profile'

function Home() {
  return (
    <ChallengeProvider>
      <div className="container">
        <Head>
          <title>Move.it | Home</title>
        </Head>

        <ExperienceBar />

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
      </div>
    </ChallengeProvider>
  )
}

export default Home

import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import CountDown from '../components/CountDown'
import Profile from '../components/Profile'

function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <main>
        <section className="leftSection">
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </section>
        <section className="rightSection">
          Right section
        </section>
      </main>
    </div>
  )
}

export default Home

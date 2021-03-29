import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'

function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <main>
        <section className="leftSection">
          <Profile />
          <CompletedChallenges />
        </section>
        <section className="rightSection">
          Right section
        </section>
      </main>
    </div>
  )
}

export default Home

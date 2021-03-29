import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <main>
        <section className="leftSection">
          <Profile />
        </section>
        <section className="rightSection">
          Right section
        </section>
      </main>
    </div>
  )
}

export default Home

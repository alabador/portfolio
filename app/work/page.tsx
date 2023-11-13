import CardSection from "./components/CardSection"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-20 md:px-[20%]">
        <CardSection />
        <Footer />
    </main>
  )
}

export default Home
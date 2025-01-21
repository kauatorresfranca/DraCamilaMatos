import AboutUs from './components/about_us'
import Banner from './components/banner'
import Contact from './components/contact'
import EveryThing from './components/everything'
import Header from './components/header/index'
import Procedures from './components/procedures'
import Results from './components/results'
import { GlobalCss } from './styles'


function App() {

  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <EveryThing />
      <AboutUs />
      <Procedures />
      <Results />
      <Contact />
    </>
  )
}

export default App

import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Features from './Components/Features';
import FeaturedJournals from './Components/FeaturedJournals';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ForgotPassword from './Components/ForgotPassword';
//import InvalidEmailError from './Components/InvalidEmailError';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Features />
      <FeaturedJournals />
      <Footer />
      <SignUp />
      <SignIn />
      <ForgotPassword />
      {/*<InvalidEmailError/>*/}
    </div>
  );
}

export default App;

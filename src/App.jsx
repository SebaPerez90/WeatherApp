import '../src/styles/dark-theme.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import Readme from './routes/Readme.jsx';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound.jsx';
import { Toaster } from 'react-hot-toast';
import { Route, Switch, Router } from 'wouter';

export default function App() {
  return (
      <Router base='/WeatherApp'>
        <Switch>
          <Route path='/'>
            <Header /> <Main /> <Footer />
          </Route>
          <Route
            path='/readme'
            component={Readme}
          />
          <Route
            path='/contact'
            component={Contact}
          />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </Router>
  );
}
  
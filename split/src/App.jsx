import './App.css'
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import { Home } from './Components/Home';
import { SignIn } from './pages/SignIn';
import {Blog} from "./pages/Blog";
import {AddWebsite} from "./pages/AddWebsite";
import {Changelog} from "./pages/Changelog";
import {Community} from "./pages/Community";
import {Documentations} from "./pages/Documentations";
import {GoogleAnalytics} from "./pages/GoogleAnalytics";
import {Imprint} from "./pages/Imprint";
import {Pricing} from "./pages/Pricing";
import {Privacy} from "./pages/Privacy";
import {TermsCondition} from "./pages/TermsCondition";

const routeConfig = [
  { path: '/', element: <Home /> },
  { path: '/blog', element: <Blog /> },
  { path: '/addWebsite', element: <AddWebsite /> },
  { path: '/changelog', element: <Changelog /> },
  { path: '/community', element: <Community /> },
  { path: '/documentation', element: <Documentations /> },
  { path: '/googleAnalytics', element: <GoogleAnalytics /> },
  { path: '/imprint', element: <Imprint /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/signIn', element: <SignIn /> },
  { path: '/terms', element: <TermsCondition /> }
];
function App() {


  return (
  <>
    <Router>
      <Routes>
                
       
        {routeConfig.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} exact />
                ))}

      </Routes>
    </Router>
    

</>
  )
}

export default App

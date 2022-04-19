import { Route,Switch,Redirect } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import NotFound from "./Pages/NotFound";
import QuoteDetail from "./Pages/QuoteDetail";


function App() {
  
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}
if(darkMode){
  document.body.style.backgroundColor='#3a3b3c';
}else {
  document.body.style.backgroundColor='#e7f8f8'
}


  return (
    <Layout>
      <button className='btn' onClick={toggleDarkMode} style={{marginBottom:'5px'}}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
   <Switch>
  <Route path='/' exact>
    <Redirect to='/quotes' />
  </Route>
     <Route path='/quotes' exact>
       <AllQuotes />
     </Route>
     <Route path='/quotes/:quoteId'>
    <QuoteDetail />
     </Route>
     <Route path='/new-quote'>
    <NewQuotes />
     </Route>
     <Route path='*'>
       <NotFound />
     </Route>
   </Switch>
   </Layout>
  );
}

export default App;


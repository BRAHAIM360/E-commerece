
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch,Route
} from "react-router-dom";

function App() {
  return (<div>
<Router>

<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/ProductList">
            <ProductList />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          
        </Switch>
</Router>
  
  </div>
  );
}

export default App;



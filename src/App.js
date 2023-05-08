import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import "./app.css"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users" exact>
              <UserList />
            </Route>
            <Route path="/users/:userId">
              <User />
            </Route>
            <Route path="/newUser" exact>
              <NewUser />
            </Route>
            <Route path="/products" exact>
              <ProductList />
            </Route>
            <Route path="/products/:productId">
              <Product />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
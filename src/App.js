import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import AddProduct from "./components/AddProduct/AddProduct";
import Booking from "./components/Booking/Booking";
import Dashboard from "./components/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import ManageProducts from "./components/ManegeProducts/ManageProducts";
import NotFound from "./components/NotFound/NotFound";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import Orders from "./components/Orders/Orders";
import Payment from "./components/Payment/Payment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/manageproducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/booking/:productId">
           <Booking></Booking>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/orderPlace">
            <OrderPlace></OrderPlace>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route> 
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

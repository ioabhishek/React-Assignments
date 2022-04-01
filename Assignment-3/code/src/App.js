import React from 'react'
import './App.css';
import CustomerHeader from './components/CustomerHeader';
import CustomerInfo from './components/CustomerInfo';
import OrderInfo from './components/OrderInfo';
import ProductList from './components/ProductList';

var leftArrow ="<"
var rightArrow = ">"
function App() {
  return (
    <div className="site-container">
      <CustomerHeader
        leftArrow = {leftArrow}
        name = "Alan Ford"
        employeeid = "00005152"
      />
      <CustomerInfo
        appointment = "9:00 (22-04-2022)"
        email = "johndoe@gmail.com"
        phone = "+918888888888"
      />
      <OrderInfo
        status = "In Progress"
        door = "Mark"
        time = "9:00"
        date = "(22-04-2022)"
      />
      <ProductList
        profileImg = 'https://www.w3schools.com/howto/img_avatar.png'
        proName = "Boltaart Bosbessen"
        proInfo = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore illum libero fugiat accusamus quibusdam."
        rightArrow = {rightArrow}
      />
    </div>
  );
}

export default App;

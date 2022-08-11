
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from '@/pages/Login';
import AdminLayout from '@/pages/Admin';
import AccountCenter from '@/pages/Admin/AccountCenter';
import PaymentCenter from '@/pages/Admin/PaymentCenter';
import AddressCenter from '@/pages/Admin/AddressCenter';
import OrderList from '@/pages/Admin/OrderCenter/OrderList';
import CreateOrder from '@/pages/Admin/OrderCenter/CreateOrder';
import TransactionHistory from '@/pages/Admin/TransactionCenter';
import DashBoard from '@/pages/Admin/DashBoard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<AdminLayout/>}>
              <Route index element={<DashBoard/>}/>
              <Route path='user/info' element={<AccountCenter/>}></Route>
              <Route path='user/recharge' element={<PaymentCenter/>}/>
              <Route path='addressbook/index' element={<AddressCenter/>}/>
              <Route path='express/orderlist' element={<OrderList/>}/>
              <Route path='localdeliveryorder/index' element={<CreateOrder/>}/>
              <Route path='incomingoutgoings/index' element={<TransactionHistory/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {lazy,Suspense} from 'react'
import {history,HistoryRouter} from '@/utils'
import AuthRoute  from '@/components/AuthRoute';
const Login = lazy(()=>import('@/pages/Login'));
const AdminLayout = lazy(()=>import('@/pages/Admin'))
const DashBoard = lazy(()=>import('@/pages/Admin/DashBoard'))
const AccountCenter =lazy(()=>import('@/pages/Admin/AccountCenter'))
const PaymentCenter = lazy(()=>import('@/pages/Admin/PaymentCenter'))
const AddressCenter = lazy(()=>import('@/pages/Admin/AddressCenter'))
const OrderList = lazy(()=>import('@/pages/Admin/OrderCenter/OrderList'))
const CreateOrder = lazy(()=>import('@/pages/Admin/OrderCenter/CreateOrder'))
const TransactionHistory =lazy(()=>import('@/pages/Admin/TransactionCenter'))

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense fallback={
        <div style={{textAlign:'center',marginTop:300}}>loading...</div>
      }>
      <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={
            // <AuthRoute>
                <AdminLayout/>
            // </AuthRoute>
           }>
              <Route index element={<DashBoard/>}/>
              <Route path='user/info' element={<AccountCenter/>}></Route>
              <Route path='user/recharge' element={<PaymentCenter/>}/>
              <Route path='addressbook/index' element={<AddressCenter/>}/>
              <Route path='express/orderlist' element={<OrderList/>}/>
              <Route path='localdeliveryorder/index' element={<CreateOrder/>}/>
              <Route path='incomingoutgoings/index' element={<TransactionHistory/>}/>
          </Route>
      </Routes>
      </Suspense>
      
    </HistoryRouter>
  );
}

export default App;

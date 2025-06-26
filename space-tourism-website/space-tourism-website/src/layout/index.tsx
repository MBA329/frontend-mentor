import {Outlet,Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <> 
    <div>
      <div><Navbar/></div>
       <main>
      <Outlet/>
    </main>
    </div>
   
    </>
   
  )
}

export default RootLayout
import logo from 'logo.svg';
import { Link } from 'react-router-dom'; 

function Dashboard() {
  return (
    <div className='App'>
      <h1>Our Dashboard</h1>      
      <Link to='/newAccount'>NEW ACCOUNT</Link>
    </div>
  );
}

export default Dashboard;

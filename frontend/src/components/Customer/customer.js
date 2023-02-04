import { useEffect, useState } from 'react'
import axios from 'axios';
import './customer.css'
import { useNavigate } from 'react-router-dom';


const Customer = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const fetchData = () => {
        return (
            axios.get(`https://api.bcapoints.in//api/customer`).then((response) => setData(response.data))
        )
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token) {
          fetchData();
        }
        if (!token) {
          navigate('/login');
        }
      }, []);


    return (
           <div className='container'>
             <h5>Total - {data.length}</h5>
              
             <table>
                <thead>
                    <tr>
                        <th scope="col">User-Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => 
                            <tr key={item._id}>
                            <td data-label="Account">{item.username}</td>
                            <td data-label="Due Date">{item.email}</td>
                            <td data-label="Amount">{item.message}</td>
                        </tr>
                    )}

                </tbody>
            </table>
           </div>
            
           
    )
}

export default Customer
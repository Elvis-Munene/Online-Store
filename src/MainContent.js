import { refresh } from 'aos'
import React from 'react'
import {useState} from "react"
import { NavItem } from 'react-bootstrap';

export default function MainContent() {
const [digit, setDigit] = useState(5);

function handleClick(){
 console.log(digit);
} 


const customers = [
  {id:1,name: 'John',phone:'0797653523',location: "Nakuru", photo:"https://picsum.com/id/1020/60"},
  {id:2,name: 'qohn',phone:null,location: "Nyeri", photo:"https://picsum.com/id/1021/60"},
  {id:3,name: 'wohn',phone:'0797653523',location: "Loliondo", photo:"https://picsum.com/id/1023/60"},
  {id:4,name: 'eohn',phone:null,location: "GuruNanak", photo:"https://picsum.com/id/1024/60"},
  {id:5,name: 'rohn',phone:'0797653523',location: "Shikamoyo", photo:"https://picsum.com/id/200/60"}
]


  return (
    <div>
    <div className='border-bottom m-1 p-1'>Customer  <span>5</span> </div>
    <button onClick={handleClick}>Refresh</button>
   {/* <h4>
    

{customers.map(cust => {
    return <div>attributes={cust}</div>})}
  

   </h4> */}

<table className="table">

<thead>
<tr>
  <th>#</th>
  <th>Customer Name</th>
  <th>Phone</th>
  </tr>
</thead>
<tbody>
{customers.map((cust)=>{
  return (
    <tr key={cust.id}>
       <td>{<img src={cust.photo} alt=""/>}</td>
      <td>{cust.id}</td>
      <td style={{backgroundColor:(cust.name.startsWith("r"))?'brown':'green'}}>{cust.name}</td>
      <td>{cust.phone == null ? <div className='bg-warning p-2 text-center'>"No phone"</div>:cust.phone}</td>
    </tr>
  );
})}



</tbody>

</table>




    </div>
  )
}

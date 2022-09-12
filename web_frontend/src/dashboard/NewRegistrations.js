import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import Menu from './Menu';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Colors from '../components/Colors';



function NewRegistrations() {
  
  const navigate = useNavigate();

const HandleClick=()=>{
  navigate('/newCVDetails')

  // let role="vendor"
 
  // if (role==="company"){
  // navigate('/CompanyDetails');
  // }
  // else if (role==="vendor"){
  //   navigate('/VendorDetails');
  // }
}



  return (
    <>
    <Header/>
   
    <div >
     {/*New Registrations code  */}
         <div className="content-wrapper">
            <section className="col-lg-12 connectedSortable">
            <div className="card"  style={{width:'100%'}}>
              <div className="card-header">
                <h1 className="card-title">
                  <i className="ion ion-clipboard mr-1" style={{fontSize:30}} />
                  <span style={{color:Colors.primary, fontWeight:'bold',fontSize:25}}>New Registrations</span>
                </h1>
              </div>
              {/* /.card-header */}
              <div>
      <ul >
      <Table striped bordered hover variant="light">
        <thead style={{fontSize:15,fontWeight:'bold',color:Colors.primary}}>
        <tr   >
          <th>#</th>
          <th style={{width:'17%'}}>Business Name </th>
          <th style={{width:'20%'}}>Business Type</th>
          <th >City</th>
          <th style={{width:'17%'}}>Price Range</th>
          <th style={{width:'24%'}}>Services</th>
          <th style={{width:'17%'}}>Date</th>
          <th >Action</th>
          <th></th>
         
        </tr>
      </thead>
      <tbody style={{fontSize:13,fontWeight:'bold'}}>
        <tr>
          <td>1</td>
          <td>Floral Weddings</td>
          <td>Company</td>
          <td>Islamabad</td>
          <td>Above 1500000</td>
          <td>Venue Decoration Photography Catering</td>
          <td>16-8-2022</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
          <td><button style={{color:'blue' }}  onClick={HandleClick} >Details</button></td>
         </tr>
        <tr>
          <td>2</td>
          <td>Spice Foods</td>
          <td>Vendor</td>
          <td>Karachi</td>
          <td>Above 100000</td>
          <td>Catering</td>
          <td>16-8-2022</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
          <td><button style={{color:'blue' }}  onClick={HandleClick} >Details</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Royal Photographers</td>
          <td>Vendor</td>
          <td>Sukkur</td>
          <td>Above 150000</td>
          <td>Photography</td>
          <td>16-8-2022</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
          <td><button style={{color:'blue' }}  onClick={HandleClick} >Details</button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Cocktail Parties</td>
          <td>Vendor</td>
          <td>Islamabad</td>
          <td>Above 600000</td>
          <td>Venue</td>
          <td>15-8-2022</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
          <td><button style={{color:'blue', backgroundColor:'none' }}  onClick={HandleClick} >Details</button></td>
        </tr>
      </tbody>
    </Table>
 </ul>
 </div>
 </div>
</section>
</div>
</div>
<Menu/>
    </>
    )
}

export default NewRegistrations

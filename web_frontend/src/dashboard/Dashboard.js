import React, { Component } from 'react'
import styled from "styled-components";
import Table from 'react-bootstrap/Table';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>New Requests</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="/new" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53</h3>
                <p>Registered Companies</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="/allCompanies" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
         
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>65</h3>
                <p>Registered Vendors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <a href="/allVendors" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
           {/* ./col */}
           <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>1000</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="/allUsers" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
        </div>
        
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <section className="col-lg-7 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  Sales
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                    </li>
                  </ul>
                </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
                  </div>
                  <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                  </div>  
                </div>
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}
           
            {/*/.direct-chat */}
            {/* TO DO List */}
            <div className="card"  style={{width:'100%'}}>
              <div className="card-header">
                <h1 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                  New Registrations
                </h1>
              </div>
              {/* /.card-header */}
              <div>
                <ul >
                <Table striped bordered hover variant="light">
        <thead style={{fontSize:14}}>
        <tr>
          <th>#</th>
          <th>Business Name </th>
          <th>Business Type</th>
          <th>Date</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody style={{fontSize:14}}>
        <tr>
          <td>1</td>
          <td>Floral Weddings</td>
          <td>Company</td>
          <td>18-8-2022</td>
          <td>Approved</td>
          <td><a style={{color:'blue' }} href="#/deatils">Details</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Spice Foods</td>
          <td>Vendor</td>
          <td>16-8-2022</td>
          <td>Pending</td>
          <td><a style={{color:'blue' }} href="#/deatils">Details</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Royal Photographers</td>
          <td>Vendor</td>
          <td>16-8-2022</td>
          <td>Rejected</td>
          <td><a style={{color:'blue' }} href="#/deatils">Details</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Cocktail Parties</td>
          <td>Company</td>
          <td>15-8-2022</td>
          <td>Approved</td>
          <td><a style={{color:'blue' }} href="#/deatils">Details</a></td>
        </tr>
        
      </tbody>
    </Table>
 </ul>
 </div>
 </div>
            {/* /.card */}
          </section>
          {/* /.Left col */}
          {/* right col (We are only adding the ID to make the widgets sortable)*/}
          <section className="col-lg-5 ">

          {/* Map card  Extra code*/}
          <div ><div >
                <div className="row">
                  <div className="col-4 text-center">
                    <div id="sparkline-1" />
                    </div>
                 <div className="col-4 text-center">
                    <div id="sparkline-2" />
                  </div>
                 <div className="col-4 text-center">
                    <div id="sparkline-3" /> </div>  </div>   </div>  </div>

              {/* TO DO List */}
              <div  className="card bg-gradient-primary" style={{width:'100%'}}>
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                  Top Companies & Vendors
                </h3>
               
              </div>
              {/* /.card-header */}
              <div>
                <ul >
                <Table striped bordered hover variant="gray">
        <thead>
        <tr>
          <th>#</th>
          <th>Business Name </th>
          <th>Total Orders</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Floral Weddings</td>
          <td>400</td>
          </tr>
        <tr>
          <td>2</td>
          <td>Spice Foods</td>
          <td>350</td>
         </tr>
        <tr>
          <td>3</td>
          <td>Royal Photographers</td>
          <td>200</td>
      </tr>
     
        <tr>
          <td>4</td>
          <td>Heaven Venue</td>
          <td>180</td>
      </tr>
   
        <tr>
          <td>5</td>
          <td>Royal Weddings</td>
          <td>150</td>
      </tr>
      
      
      </tbody>
    </Table>
 </ul>
 </div>
 </div>

            {/* /.card */}
            {/* Calendar */}
            <div className="card bg-gradient-success" style={{height:'38%', marginTop:'20%'}}>
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="far fa-calendar-alt" />
                  Calendar
                </h3>
                {/* tools card */}
                <div className="card-tools">
                  {/* button with a dropdown */}
                  <div className="btn-group">
                    <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                      <i className="fas fa-bars" /></button>
                    <div className="dropdown-menu float-right" role="menu">
                      <a href="#" className="dropdown-item">Add new event</a>
                      <a href="#" className="dropdown-item">Clear events</a>
                      <div className="dropdown-divider" />
                      <a href="#" className="dropdown-item">View calendar</a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
                {/* /. tools */}
              </div>
              {/* /.card-header */}
              <div className="card-body pt-0">
                {/*The calendar */}
                <div id="calendar" style={{width: '100%'}} />
              </div>
              {/* /.card-body */}
            </div>
{/* till here */}
            {/* /.card */}
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }
}




import React, { Component } from 'react'
import Content1 from '../Content1'
import ChartExample from '../DBTComponent/ChartExample'
import DBTDashboard from '../DBTComponent/DBTDashboard'
import DBTFarmerDashboard from '../DBTComponent/DBTFarmerDashboard'
import FarmerBarChart from '../DBTComponent/FarmerBarChart'
import FarmerFPCChart from '../DBTComponent/FarmerFPCChart'

export default class MainContent extends Component {
    render() {
        return (
            <div>
                <DBTDashboard/>
                <div className="content-wrapper">

                   

                    <section className="content">
                        <div className="container-fluid">

                            <div className="row">

                                {/* <div className="col-lg-3 col-6">
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                            <p>Bounce Rate</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>65</h3>
                                            <p>Unique Visitors</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-pie-graph" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div> */}
                                {/* ./col */}
                            </div>
                            {/* /.row */}
                            {/* Main row */}
                            <div className="row">
                                {/* Left col */}
                                <section className="col-lg-12 connectedSortable">
                                    {/* Custom tabs (Charts with tabs)*/}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i class="fas fa-chart-bar" /> DBT Farmer
                                            </h3>
                                            <div class="card-tools">
                                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                                </button>
                                                {/* <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button> */}
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content p-0">
                                                <FarmerBarChart chartProps={{
                                                    activityLabel: "Farmer Report",
                                                    activity: "Farmer",
                                                    // xlabel: "Source : PoCRA DBT",
                                                    ylabel: "Total No of Applications"
                                                }} />

                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                </section>
                                {/* /.Left col */}
                                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                                <section className="col-lg-6 connectedSortable">
                                    {/* Custom tabs (Charts with tabs)*/}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i class="fas fa-chart-bar" /> FPC/FPO
                                            </h3>
                                            <div class="card-tools">
                                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                                </button>
                                                {/* <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button> */}
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content p-0">
                                                <FarmerBarChart chartProps={{
                                                    activityLabel: "FPC/FPO Report",
                                                    activity: "FPC",
                                                    // xlabel: "Source : PoCRA DBT",
                                                    ylabel: "Total No of Applications"
                                                }} />

                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                </section>
                                <section className="col-lg-6 connectedSortable">
                                    {/* Custom tabs (Charts with tabs)*/}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i class="fas fa-chart-bar" /> NRM
                                            </h3>
                                            <div class="card-tools">
                                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                                </button>
                                                {/* <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button> */}
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content p-0">
                                                <FarmerFPCChart />

                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                </section>

                                {/* right col */}
                            </div>
                            {/* /.row (main row) */}
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* <Content1 /> */}
            </div>
        )
    }
}

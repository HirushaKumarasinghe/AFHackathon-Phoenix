'use strict'

import React, {Component} from 'react';
import summer from './summer.jpeg';
import discover from './discover.jpeg';
import heritage from './images.jpeg';
import scenic from './download.jpeg';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <div className="row">
                <div className="col-md-3">
                    <div className="container">
                        <div className="sidenav">
                            <fieldset>
                                <legend>Card Offers</legend>
                                <a href="#about">Commercial Credit Card 15%</a>
                                <a href="#services">BoC Debit Card 10%</a>
                                <a href="#clients">Sampath Credit Card 15%</a>
                                <a href="#contact">HSBC Credit Card 20%</a>
                            </fieldset>
                            <fieldset>
                                <legend>Seasonal Discount</legend>
                                <a href="#about">Summer Package</a>
                                <a href="#services">Special Awrudu Offer</a>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <h3>Sri Lanka Holiday Packages</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <view id="myImg">
                                <img id="myImg" src={summer} alt="logo" resizeMode={'cover'}/>
                                <view style={{ position: 'absolute', top: 90, left: 20, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                    <h4>Sri Lanka Summer Package</h4>
                                    <h6>Special Offer</h6>
                                    <h6>May 20th - 28th</h6>
                                </view>
                            </view>
                        </div>
                        <div className="col-md-6">
                            <view id="myImg">
                                <img id="myImg" src={discover} alt="discover" resizeMode={'cover'}/>
                                <view style={{ position: 'absolute', top: 90, left: 20, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                    <h4>Discover Sri Lanka Tour</h4>
                                    <h6>20N/21D</h6>
                                </view>
                            </view>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <view id="myImg">
                                <img id="myImg" src={heritage} alt="heritage" />
                                <view style={{ position: 'absolute', top: 90, left: 20, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                    <h4>Culture Heritage Tour</h4>
                                    <h6>5N/6D</h6>
                                </view>
                            </view>
                        </div>
                        <div className="col-md-6">
                            <view id="myImg">
                                <img id="myImg" src={scenic} alt="scenic" />
                                <view style={{ position: 'absolute', top: 90, left: 20, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                    <h4>Scenic Sri Lanka Tour</h4>
                                    <h6>9N/10D</h6>
                                </view>
                            </view>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
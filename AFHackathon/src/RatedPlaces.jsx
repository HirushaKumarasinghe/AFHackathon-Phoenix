'use strict'

import React, {Component} from 'react';

import rating from './rating.png';
import graph from './graph.png';
import summer from "./summer.jpeg";
import discover from "./discover.jpeg";



export default class RatedPlaces extends Component {
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
                                <legend>Most Searched</legend>
                                <a href="#about">Pidurangala Rock</a>
                                <a href="#services">Sripadaya</a>
                                <a href="#clients">Unawatuna</a>
                                <a href="#contact">Whale Watching from the Air</a>
                            </fieldset>
                            <fieldset>
                                <legend>Top Rated Places</legend>
                                <a href="#services">Little Adam's Peak</a>
                                <a href="#about">Arugam Bay</a>
                                <a href="#services">Hikkaduwa Beach</a>
                                <a href="#about">Ella</a>
                                <a href="#services">Kandy</a>
                                <a href="#about">Trincomalee</a>
                                <a href="#services">Kumana National Park</a>
                                <a href="#services">Pasikudah</a>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <h3>Top Rated Places</h3>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Little Adam's Peak</h5>
                        </div>
                        <div className="col-md-4"/>
                        <div className="col-md-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 rating_">
                            <img src={graph} alt="graph"/>
                        </div>
                        <div className="col-md-4"/>
                        <div className="col-md-4">
                            <img src={rating} alt="rating"/>
                        </div>
                    </div>
                    <div className="row">
                        <p>Ella in Sri Lanka is a very well known worldwide for it’s breathtaking view and scenery, Little Adam’s Peak is just one of it. The eye catching, jaw dropping and conspicuous peak is the one not to miss, Situated in Ella, Sri Lanka, it has been attracting tourists for a long time now. The reason for its popularity is the amazing view that never fails to attract and impress the visitors.</p>
                    </div>
                    <div className="row">
                        <ul>
                            <li><a href="#news">Opinions</a></li>
                            <li><a href="#contact">Reviews</a></li>
                            <li><a className="active" href="#home">Pictures</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img id="myImg" src={summer} alt="logo" resizeMode={'cover'}/>
                        </div>
                        <div className="col-md-6">
                            <img id="myImg" src={discover} alt="discover" resizeMode={'cover'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
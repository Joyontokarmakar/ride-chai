import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RideData from '../Data/Data';
import'./Destination.css';
import GoogleMapReact from 'google-map-react';

const Destination = (props) => {
    const {id} = useParams()
    const obj = RideData.find(o => o.id === id);
    console.log(obj);

    const {name, img} = obj;
    const [search, setSearch] = useState(false)
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">

                        {!search ? [

                        <div className="inputDestination" id="input">
                            <form onSubmit={() => setSearch(true)}>
                                <label htmlFor="from">Pick From</label>
                                <input className="inputField" type="text" id="from" name="from" placeholder="From"/>
                                <br/>
                                <label htmlFor="to">Pick To</label>
                                <input className="inputField" type="text" id="to" name="to" placeholder="To"/>
                                <br/>
                                <input className="submit_btn" type="submit" value="submit"/>
                            </form>
                        </div>
                        ] : 
                        [
                        <div className="inputDestination" id="results">
                            <div className="common_style destination_info">
                                <p>Pick From: Mirpur</p>
                                <p>Pick To: Dhanmondi</p>
                            </div>

                            <div className="available_riders">
                                <div className="common_style rider">
                                    <div className="row">
                                        <div className="col-md-4 col-4">
                                            <img src={img} alt=""/>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            <p>{name}</p>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            $67
                                        </div>
                                    </div>
                                </div>
                                <div className="common_style rider">
                                    <div className="row">
                                        <div className="col-md-4 col-4">
                                            <img src={img} alt=""/>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            <p>{name}</p>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            $67
                                        </div>
                                    </div>
                                </div>
                                <div className="common_style rider">
                                    <div className="row">
                                        <div className="col-md-4 col-4">
                                            <img src={img} alt=""/>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            <p>{name}</p>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            $67
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ] }
                    </div>

                    <div className="col-md-8">
                        <div className="map_data d-flex justify-content-center p-5">
                            {/* <img className="map_img" src={map} alt=""/> */}
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDVeumCNvj7cYBUm1iK57xLU2fiT7l4EjU"}}
                                defaultCenter={
                                    {
                                        lat: 23.7937,
                                        lng:90.4066
                                    }
                                }
                                defaultZoom={12}
                            >
                                
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
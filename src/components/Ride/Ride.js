import React from 'react';
import './Ride.css';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

const Ride = (props) => {
    const {name, img,id} = props.RideData;
    return (
        
            <div className="col-12 col-sm-6 col-md-3">
                <Link className="ride_select" to={`/destination/${id}`}>
                    <div className="ride">
                        <div className="vehicle_image">
                            <img src={img} alt=""/>
                        </div>
                        <div className="vehicle_info text-center">
                            <h4 className="vehicle_name">{name}</h4>
                        </div>
                    </div>
                </Link>
            </div>
    );
};

export default Ride;
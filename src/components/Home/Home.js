import React, {useState,useEffect} from 'react';
import RideData from '../Data/Data'
import Ride from '../Ride/Ride';
import './Home.css'

const Home = () => {
    const [Rides, setRides] = useState(RideData)
    const [selected, setSelected] = useState([])
    useEffect (() => {
        setRides(RideData)
    }, [])
    
    const handleAddRide = (RideData) =>{
        const newSelected = [...selected, RideData]
        setSelected(newSelected)
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <h5 className="vehicle_head">Select Your Preferable Ride</h5>
                </div>
                <div className="row justify-content-center ">
                    {
                        Rides.map(rd => <Ride handleAddRide={handleAddRide} RideData={rd}></Ride>)
                    }
                </div>
            </div>
        </div>  
    
    );
};

export default Home;
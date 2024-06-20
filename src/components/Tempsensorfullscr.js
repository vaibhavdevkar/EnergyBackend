import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Tempsensorfullscr = () => {

    const [Tempsku, setTempsku] = useState("")
    const [Tempeng, setTempEng] = useState("")
    const [Tempvalue, setTempValue] = useState("")
    const [Tempstatus, setTempStatus] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Tempsku = await axios.get("http://localhost:4000/api/latest-mqtt-message/SKUtemp");
                setTempsku(Tempsku.data.message)

                const Tempeng = await axios.get("http://localhost:4000/api/latest-mqtt-message/engtemp");
                setTempEng(Tempeng.data.message)

                const Tempvalue = await axios.get("http://localhost:4000/api/latest-mqtt-message/ststemp");
                setTempValue(Tempvalue.data.message)

                const Tempstatus = await axios.get("http://localhost:4000/api/latest-mqtt-message/availtemp");
                setTempStatus(Tempstatus.data.message);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Initial data fetch

        const intervalId = setInterval(() => {
            fetchData(); // Fetch data every second
        }, 1000);

        return () => {
            clearInterval(intervalId); // Cleanup interval on component unmount
        };
    }, []);




    return (
        <div className="container-fluid py-4" >
            <div className="card shadow-sm" style={{ borderRadius: '10px', borderTop : "3px solid #ff6600" }}>
                <div className="card-body">
                    <h1 className="card-title text-primary mb-3" style={{ fontSize: '3rem', fontWeight: "bold" }}>
                        STAGE NAME :  TEMPERATURE SENSOR
                    </h1>
                    <div className="mb-1">
                        <span className="text-success fw-bold me-2" style={{ fontSize: '3rem' }}>
                            SKU :
                        </span>
                        <span className="text-primary" style={{ fontSize: '3rem' }}>
                            {/* SKU Value */}
                        </span>
                    </div>
                    <div className="mb-1">
                        <span className="text-success fw-bold me-2" style={{ fontSize: '3rem' }}>
                            ENG. NO :
                        </span>
                        <span className="text-primary" style={{ fontSize: '3rem' }}>
                            {/* Eng No Value */}
                        </span>
                    </div>
                    <div className="mb-1">
                        <span className="text-success fw-bold me-2" style={{ fontSize: '3rem' }}>
                            REQUIRED : 
                        </span>
                        <span className="text-primary" style={{ fontSize: '3rem' }}>
                            {/* Eng No Value */}
                        </span>
                    </div>
                    <div className="mb-1">
                        <span className="text-success fw-bold me-2" style={{ fontSize: '3rem' }}>
                            STATUS :
                        </span>
                        <span className="text-primary" style={{ fontSize: '3rem' }}>
                            {/* Status Value */}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tempsensorfullscr
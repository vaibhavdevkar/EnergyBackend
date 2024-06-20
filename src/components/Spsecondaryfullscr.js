import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Spsecondaryfullscr = () => {

    const [spssku, setSpssku] = useState("")
    const [spseng, setSpsEng] = useState("")
    const [spsvalue, setSpsValue] = useState("")
    const [spsstatus, setSpsStatus] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const spssku = await axios.get("http://localhost:4000/api/latest-mqtt-message/SKUsparksecond");
                setSpssku(spssku.data.message)

                const spseng = await axios.get("http://localhost:4000/api/latest-mqtt-message/engsparksecond");
                setSpsEng(spseng.data.message)

                const spsvalue = await axios.get("http://localhost:4000/api/latest-mqtt-message/sparksecoavail");
                setSpsValue(spsvalue.data.message)

                const spsstatus = await axios.get("http://localhost:4000/api/latest-mqtt-message/Stssparksecond");
                setSpsStatus(spsstatus.data.message);

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
                        STAGE NAME :  SPARK PLUG SECONDARY
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

export default Spsecondaryfullscr
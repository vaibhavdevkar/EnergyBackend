// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const Camchainfullscr = () => {
//     const [camsku, setCamsku] = useState("")
//     const [cameng, setCamEng] = useState("")
//     const [camvalue ,setCamValue] = useState("")
//     const [camstatus, setCamStatus] = useState("")

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const camsku = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camsku");
//           setCamsku(camsku.data.message)

//           const cameng = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camengno");
//           setCamEng(cameng.data.message)

//           const camvalue = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camvalue");
//           setCamValue(camvalue.data.message)

//           const camstatus = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camstatus");
//            setCamStatus(camstatus.data.message);


//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchData(); // Initial data fetch

//       const intervalId = setInterval(() => {
//         fetchData(); // Fetch data every second
//       }, 1000);

//       return () => {
//         clearInterval(intervalId); // Cleanup interval on component unmount
//       };
//     }, []); 

//   return (
//     <div>
//         SKU : {camsku}
//         CamEng : {cameng}
//         CamValue : {camvalue}
//         CamStatus : {camstatus}
//     </div>
//   )
// }

// export default Camchainfullscr


// SparkPlugPrimary.js
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Camchainfullscr = () => {

    const [camsku, setCamsku] = useState("")
    const [cameng, setCamEng] = useState("")
    const [camvalue, setCamValue] = useState("")
    const [camstatus, setCamStatus] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const camsku = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camsku");
                setCamsku(camsku.data.message)

                const cameng = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camengno");
                setCamEng(cameng.data.message)

                const camvalue = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camvalue");
                setCamValue(camvalue.data.message)

                const camstatus = await axios.get("http://localhost:4000/api/latest-mqtt-message/Camstatus");
                setCamStatus(camstatus.data.message);


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
                        STAGE NAME :  CAM CHAIN
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
                            CAM VALUE :
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

export default Camchainfullscr;

import React from "react";

import "../style.css";

const Schedule = () => {
  return (
    <div id="schedule" className="container-fluid my-sm-5">
        <div className="row px-2 px-m-3">
            <h1 className="col-12 mb-4 mt-3">Schedule</h1>
        </div>
        <div className="schedule-desktop">
            <div className="schedulehead schedrow">
                <div className="headvalue1">City</div>
                <div className="vlhead vl1"></div>
                <div className="headvalue2">Venue Name</div>
                <div className="vlhead vl2"></div>
                <div className="headvalue3">Venue address</div>
                <div className="vlhead vl3"></div>
                <div className="headvalue4">Date</div>
                <div className="vlhead vl4"></div>
                <div className="headvalue5">Contact</div>
            </div>
            <div className="type1 schedrow">
                <div className="rowvalue1">Trivandrum</div>
                <div className="vl vl1"></div>
                <div className="rowvalue2">Kendriya Vidyalaya</div>
                <div className="vl vl2"></div>
                <div className="rowvalue3">A.A.I, Rangpuri, Delhi, New Delhi, Delhi 110037</div>
                <div className="vl vl3"></div>
                <div className="rowvalue4">05-09-2022</div>
                <div className="vl vl4"></div>        
                <div className="rowvalue5">B.Sundar Balarka ,8333045402</div>        
            </div>
            <div className="type2 schedrow">
            <div className="rowvalue1">Patna</div>
                <div className="vl vl1"></div>
                <div className="rowvalue2">Patna Global School</div>
                <div className="vl vl2"></div>
                <div className="rowvalue3">NRL Petrol Pump</div>
                <div className="vl vl3"></div>
                <div className="rowvalue4">04-09-2022</div>
                <div className="vl vl4"></div>        
                <div className="rowvalue5">B.Sundar Balarka ,8333045402</div>
            </div>
            <div className="type1 schedrow">
            <div className="rowvalue1">Vijayawada</div>
                <div className="vl vl1"></div>
                <div className="rowvalue2"></div>
                <div className="vl vl2"></div>
                <div className="rowvalue3"></div>
                <div className="vl vl3"></div>
                <div className="rowvalue4">11-09-2022</div>
                <div className="vl vl4"></div>        
                <div className="rowvalue5">B.Sundar Balarka ,8333045402</div>                
            </div>
            <div className="type2 schedrow">
            <div className="rowvalue1">Nagpur</div>
                <div className="vl vl1"></div>
                <div className="rowvalue2"></div>
                <div className="vl vl2"></div>
                <div className="rowvalue3"></div>
                <div className="vl vl3"></div>
                <div className="rowvalue4">18-09-2022</div>
                <div className="vl vl4"></div>        
                <div className="rowvalue5">B.Sundar Balarka ,8333045402</div>
            </div>
           
        </div>
        <div className="schedule-mobile row px-2 px-sm-4">
            <p className="odd col-12 py-2 px-4 px-sm-5 py-sm-3 my-2">
                <h3 className="list-h">Trivandrum</h3><h3>05-09-2021</h3>
                Kendriya Vidyalaya<br />
                A.A.I, Rangpuri, Delhi, New Delhi, Delhi 110037<br />
            </p>
            <p className="odd col-12 py-2 px-4 px-sm-5 py-sm-3 my-2">
                <h3 className="list-h">Patna</h3><h3>04-09-2021</h3>
                Patna Global School<br />
                NRL Petrol Pump<br />
            </p>
            <p className="odd col-12 py-2 px-4 px-sm-5 py-sm-3 my-2">
                <h3 className="list-h">Vijayawada</h3><h3>11-09-2021</h3>
            </p>
            <p className="odd col-12 py-2 px-4 px-sm-5 py-sm-3 my-2">
                <h3 className="list-h">Nagpur</h3><h3>18-09-2021</h3>
            </p>
        </div>
    </div>
  );
};

export default Schedule;

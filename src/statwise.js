// import React,{useEffect, useState} from "react";
// import "./statewise.css";

// const Statwise = () =>{

//     const[data,setdata]=useState([]);

//     const getCovidData = async () => {
//         const res = await fetch('https://api.covid19india.org/data.json');
//         const actualData = await res.json();
//         console.log(actualData.statwise);
//         setdata(actualData.statwise);
//     }
    
//     useEffect(() => {
//         getCovidData();
//      }, []);
//      return (
//          <>
//         <div className="container-fluid mt-5">
//             <div className="main-heading">
//             <h1 className="mb-5"> <span className="font-weight-bold"> INDIA </span>COVID-19 Dashboard </h1>
//            </div>
//            <div className="table-responsive">
//                <table className="table table-hover">
//                     <thead className="thead-dark">
//                        <tr>
//                             <th> State </th>
//                             <th> Confirmed </th>
//                             <th> Recovered </th>
//                             <th> Death </th>
//                             <th> Active </th>
//                             <th> Updated </th>
//                        </tr>
//                    </thead>
//                    <tbody>

//                         {
//                             data.map((currElm,ind)=>{
//                                 return(
//                                     <>
//                         <tr>
//                             <td> {currElm.state} </td>
//                             <td> Confirmed </td>
//                             <td> Recovered </td>
//                             <td> Death </td>
//                             <td> Active </td>
//                             <td> Updated </td>
//                        </tr>
//                                     </>
//                                 )
//                             })
//                         }

                   
                       
//                    </tbody>
//                </table>
//            </div>
//         </div>
//         </>
//      )
//      }

// export default Statwise;
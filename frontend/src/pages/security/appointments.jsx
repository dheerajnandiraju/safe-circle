import { useState } from "react";

import SideBar from "@/components/security-components/sidebar";
  

const data = [
    {
      guestName: 'John Doe',
      timeOfAppointment: '10:00 AM',
      roomNumber: 101,
      appointmentId: '1',
      dateOfAppointment: '2024-02-23',
      numberOfMembers: 1,
      roomOwnerName: 'Alice Johnson',
      roomOwnerMobile: '123-456-7890',
      status:'',
    },
    {
      guestName: 'Jane Smith',
      timeOfAppointment: '02:30 PM',
      roomNumber: 205,
      appointmentId: '2',
      dateOfAppointment: '2024-02-25',
      numberOfMembers: 2,
      roomOwnerName: 'Michael Brown',
      roomOwnerMobile: '456-789-0123',
      status:'',
    },
    {
      guestName: 'Alice Johnson',
      timeOfAppointment: '11:00 AM',
      roomNumber: 302,
      appointmentId: '3',
      dateOfAppointment: '2024-02-27',
      numberOfMembers: 1,
      roomOwnerName: 'Robert Jones',
      roomOwnerMobile: '789-012-3456',
      status:'',
    },
    {
      guestName: 'Michael Brown',
      timeOfAppointment: '09:15 AM',
      roomNumber: 104,
      appointmentId: '4',
      dateOfAppointment: '2024-03-01',
      numberOfMembers: 3,
      roomOwnerName: 'Sarah Davis',
      roomOwnerMobile: '012-345-6789',
      status:'',
    },
    {
      guestName: 'Emily Williams',
      timeOfAppointment: '03:45 PM',
      roomNumber: 306,
      appointmentId: '5',
      dateOfAppointment: '2024-03-03',
      numberOfMembers: 1,
      roomOwnerName: 'William Wilson',
      roomOwnerMobile: '345-678-9012',
      status:'',
    },

  ];
  
  





const Appointments = () =>{
    const [appointmentsData1,setData1] = useState(data)
    const [appointmentsData,setData] = useState(data)
    const [status,setStatus] = useState(true)
    const checkin = (temp) =>{
        console.log(temp)
        const updatedAppiontmnets = appointmentsData.map(each => {
          if (each.appointmentId === temp.appointmentId) {
            return { ...each, status: "checkin" };
          }
          return each;
        });
        setData(updatedAppiontmnets);
    }

    const searchEach =(e) =>{
        let data = appointmentsData1.filter(each => each.appointmentId.includes(e.target.value)) 
        setData(data)
   }
    const checkout = (temp) =>{
        
        const updatedAppiontmnets = appointmentsData.map(each => {
          if (each.appointmentId === temp.appointmentId) {
            return { ...each, status: "checkout" };
          }
          return each;
        });
        setData(updatedAppiontmnets);
    }
    return(
        <div className="flex mt-2 pb-5 pr-5">
        <div>
          
          <SideBar/>
        </div>
        <div className="w-full bg-white p-4 flex flex-col justify-between shadow-md">
        <div className="flex flex-col">
        <div className="flex justify-between mb-5">
          <h1 className="text-xl font-bold font-sans">Community Attendance System</h1>
          <div>
              <input type="text" placeholder="Enter Appointment ID..." className="form-control w-72" onChange={(e) => searchEach(e)}/>
          </div>
        </div>
        <table className="table table-hover table-bordered shadow-2xl">
        
        <thead >
          <tr>
            <th style={{color:'#df4542'}} className="w-40 flex-col">AppointmentId</th>
            <th style={{color:'#df4542'}} className="w-40">Room Number </th>
            <th style={{color:'#df4542'}} className="w-40">Owner Name</th>
            <th style={{color:'#df4542'}} className="w-40">No of Entries</th>
            <th style={{color:'#df4542'}} className="w-40">Appointment Time</th>
            <th style={{color:'#df4542'}} className="w-40">Mobile Number</th>
            <th style={{color:'#df4542'}} className="text-center w-[200px]">Status</th>
          </tr>
        </thead>
        <tbody>
        {appointmentsData.map(each =>(
            <tr>
            <td className="font-medium">{each.appointmentId}</td>
            <td style={{color:'#272e42'}} >{each.roomNumber}</td>
            <td style={{color:'#272e42'}} >{each.roomOwnerName}</td>
            <td style={{color:'#272e42'}} >{each.numberOfMembers}</td>
            <td style={{color:'#272e42'}} >{each.timeOfAppointment}</td>
            <td style={{color:'#272e42'}} >{each.roomOwnerMobile}</td>
            <td className="text-right">
            {each.status == ''?
              <div className="flex justify-center items-center"><button className="btn btn-success mr-2" onClick={()=>checkin(each)}>Check In</button></div>: each.status == "checkout" ? <div className="flex justify-center items-center"><button className="btn btn-primary mr-2" onClick={()=>checkout(each)}>Completed</button></div>:<div className="flex justify-center items-center"><button className="btn btn-danger mr-2" onClick={()=>checkout(each)}>Check Out</button></div>}
              
            </td>
          </tr>
        
        ))}
        </tbody>
          
      </table>
      </div>
      </div>
      </div>
    )
}

export default Appointments
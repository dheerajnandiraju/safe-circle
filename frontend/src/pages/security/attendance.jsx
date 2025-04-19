import { useState } from "react";

import SideBar from "@/components/security-components/sidebar";
  

  const data = [
    {
      name: 'Frank Harris',
      jobType: 'Vegetable Seller',
      employeeId: 'VS006',
      sex: 'Male',
      startYear: 2019,
      status: ''
    },
    {
      name: 'Gina Lopez',
      jobType: 'Cleaner',
      employeeId: 'CL007',
      sex: 'Female',
      startYear: 2020,
      status: ''
    },
    {
      name: 'Henry Nguyen',
      jobType: 'Washer Man',
      employeeId: 'WM008',
      sex: 'Male',
      startYear: 2018,
      status: ''
    },
    {
      name: 'Ivy Patel',
      jobType: 'Watchman',
      employeeId: 'WM009',
      sex: 'Female',
      startYear: 2017,
      status: ''
    },
    {
      name: 'Jack Thompson',
      jobType: 'Community Kitchen Worker',
      employeeId: 'CKW010',
      sex: 'Male',
      startYear: 2019,
      status: ''
    },
    {
      name: 'Katherine White',
      jobType: 'Street Sweeper',
      employeeId: 'SS011',
      sex: 'Female',
      startYear: 2016,
      status: ''
    },
    {
      name: 'Leo Kim',
      jobType: 'Recycling Specialist',
      employeeId: 'RS012',
      sex: 'Male',
      startYear: 2020,
      status: ''
    },
    {
      name: 'Michelle Garcia',
      jobType: 'Health Educator',
      employeeId: 'HE013',
      sex: 'Female',
      startYear: 2019,
      status: ''
    },
    {
      name: 'Nathan Davis',
      jobType: 'Community Center Coordinator',
      employeeId: 'CCC014',
      sex: 'Male',
      startYear: 2018,
      status: ''
    },
    {
      name: 'Olivia Clark',
      jobType: 'Youth Counselor',
      employeeId: 'YC015',
      sex: 'Female',
      startYear: 2017,
      status: ''
    },
    {
      name: 'Peter Yang',
      jobType: 'Public Park Attendant',
      employeeId: 'PPA016',
      sex: 'Male',
      startYear: 2020,
      status: ''
    },
    {
      name: 'Quincy Adams',
      jobType: 'Community Health Worker',
      employeeId: 'CHW017',
      sex: 'Male',
      startYear: 2018,
      status: ''
    },
    {
      name: 'Rachel Roberts',
      jobType: 'Childcare Provider',
      employeeId: 'CP018',
      sex: 'Female',
      startYear: 2016,
      status: ''
    },
    {
      name: 'Samantha Hall',
      jobType: 'Social Worker',
      employeeId: 'SW019',
      sex: 'Female',
      startYear: 2019,
      status: ''
    },
    {
      name: 'Tom Wilson',
      jobType: 'Community Organizer',
      employeeId: 'CO020',
      sex: 'Male',
      startYear: 2017,
      status: ''
    }
];




  
const AttendanceTracker = () => {

    const [communityWorks1,setData1] = useState(data)
   const [communityWorks,setData] = useState(data)
   const [status,setStatus] = useState(true)

   const attend = (temp) =>{
    const updatedCommunityWorks = communityWorks.map(each => {
      if (each.employeeId === temp.employeeId) {
        return { ...each, status: "attended" };
      }
      return each;
    });
    setData(updatedCommunityWorks);
   }
   const absent = (temp) =>{
    const updatedCommunityWorks = communityWorks.map(each => {
      if (each.employeeId === temp.employeeId) {
        return { ...each, status: "absent" };
      }
      return each;
    });
    setData(updatedCommunityWorks);
   }

   const searchEach =(e) =>{
        let data = communityWorks1.filter(each => each.employeeId.includes(e.target.value))
        setData(data)
   }

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; 
    var day = today.getDate();
    let date =  year + "-" + month + "-" + day  


    return (
     <div className="flex mt-2 pb-5 pr-5">
        <div>
          
          <SideBar/>
        </div>
        <div className="w-full bg-white p-4 flex flex-col justify-between shadow-md">
        <div className="flex flex-col">
        <div className="flex justify-between mb-5">
          <h1 className="text-xl font-bold font-sans">Community Attendance System</h1>
          <div>
              <input type="text" placeholder="Enter employee ID..." className="form-control w-72" onChange={(e) => searchEach(e)}/>
          </div>
        </div>
        <table className="table table-hover table-bordered shadow-2xl">
        
        <thead >
          <tr>
            <th style={{color:'#df4542'}} className="w-1/6 flex-col">EMPLOYEE ID</th>
            <th style={{color:'#df4542'}} className="w-1/6">NAME</th>
            <th style={{color:'#df4542'}} className="w-1/6">M/F</th>
            <th style={{color:'#df4542'}} className="w-1/6">JOB TYPE</th>
            <th style={{color:'#df4542'}} className="w-1/6">DATE</th>
            <th style={{color:'#df4542'}} className="text-center w-[200px]">ATTENDANCE</th>
          </tr>
        </thead>
        <tbody>
        {communityWorks.map(each =>(
            <tr>
            <td className="font-medium">{each.employeeId}</td>
            <td style={{color:'#272e42'}} >{each.name}</td>
            <td style={{color:'#272e42'}} >{each.sex}</td>
            <td style={{color:'#272e42'}} >{each.jobType}</td>
            <td style={{color:'#272e42'}} >{date}</td>
            <td className="text-right">
             {each.status == ''? <div className="flex justify-center items-center"> <button className="btn btn-success mr-2" onClick={()=>attend(each)}>Yes</button>
              <button onClick={()=>absent(each)}  className="btn btn-danger">No</button></div>:each.status == 'attended'?<div className="flex justify-center"><h1 className="btn btn-success">Present</h1></div>:<div className="flex justify-center"><h1 className="btn btn-danger text-white">Absent</h1></div>}
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
export default AttendanceTracker
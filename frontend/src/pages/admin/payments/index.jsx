const Payments = () =>{
    const paymentDetails = [
        {
          name: "John Doe",
          roomNumber: 101,
          totalPayment: 1500,
          totalPaid: 1200,
          remainingDue: 300,
          paymentHistory: [
            { date: "2024-01-15", amount: 500 },
            { date: "2024-02-15", amount: 700 }
          ]
        },
        {
          name: "Jane Smith",
          roomNumber: 102,
          totalPayment: 1800,
          totalPaid: 1800,
          remainingDue: 0,
          paymentHistory: [
            { date: "2024-01-10", amount: 600 },
            { date: "2024-02-10", amount: 600 },
            { date: "2024-03-10", amount: 600 }
          ]
        },
        {
          name: "Alice Johnson",
          roomNumber: 103,
          totalPayment: 2000,
          totalPaid: 1500,
          remainingDue: 500,
          paymentHistory: [
            { date: "2024-01-20", amount: 500 },
            { date: "2024-02-20", amount: 1000 }
          ]
        },
        {
          name: "Bob Williams",
          roomNumber: 104,
          totalPayment: 1600,
          totalPaid: 1400,
          remainingDue: 200,
          paymentHistory: [
            { date: "2024-01-25", amount: 800 },
            { date: "2024-02-25", amount: 600 }
          ]
        },
        {
          name: "Ella Davis",
          roomNumber: 105,
          totalPayment: 1700,
          totalPaid: 1600,
          remainingDue: 100,
          paymentHistory: [
            { date: "2024-01-05", amount: 700 },
            { date: "2024-02-05", amount: 900 }
          ]
        },
        {
          name: "Michael Brown",
          roomNumber: 106,
          totalPayment: 1900,
          totalPaid: 1800,
          remainingDue: 100,
          paymentHistory: [
            { date: "2024-01-08", amount: 900 },
            { date: "2024-02-08", amount: 900 }
          ]
        },
        {
          name: "Olivia Wilson",
          roomNumber: 107,
          totalPayment: 2200,
          totalPaid: 2000,
          remainingDue: 200,
          paymentHistory: [
            { date: "2024-01-12", amount: 1000 },
            { date: "2024-02-12", amount: 1000 }
          ]
        },
        {
          name: "William Taylor",
          roomNumber: 108,
          totalPayment: 2500,
          totalPaid: 2400,
          remainingDue: 100,
          paymentHistory: [
            { date: "2024-01-18", amount: 1200 },
            { date: "2024-02-18", amount: 1200 }
          ]
        },
        {
          name: "Sophia Martinez",
          roomNumber: 109,
          totalPayment: 2100,
          totalPaid: 2000,
          remainingDue: 100,
          paymentHistory: [
            { date: "2024-01-22", amount: 1000 },
            { date: "2024-02-22", amount: 1000 }
          ]
        },
        {
          name: "James Anderson",
          roomNumber: 110,
          totalPayment: 2300,
          totalPaid: 2200,
          remainingDue: 100,
          paymentHistory: [
            { date: "2024-01-28", amount: 1100 },
            { date: "2024-02-28", amount: 1100 }
          ]
        }
      ];
      
      console.log(paymentDetails);
      
      
    return(
        <div className="p-5">
        <table className="table table-hover table-bordered shadow-2xl">
        
        <thead >
          <tr>
            <th style={{color:'#df4542'}} className="w-40 flex-col">Name</th>
            <th style={{color:'#df4542'}} className="w-40">Room Number </th>
            <th style={{color:'#df4542'}} className="w-40">Total Payment</th>
            <th style={{color:'#df4542'}} className="w-40">Total Paied</th>
            <th style={{color:'#df4542'}} className="w-40">Remaining Due</th>
            <th style={{color:'#df4542'}} className="w-40">Payment History</th>
            <th style={{color:'#df4542'}} className="text-center w-[200px]">Generate Invoice</th>
          </tr>
        </thead>
        <tbody>
        {paymentDetails.map(each =>(
            <tr>
            <td className="font-medium">{each.name}</td>
            <td style={{color:'#272e42'}} >{each.roomNumber}</td>
            <td style={{color:'#272e42'}} >{each.totalPayment}</td>
            <td style={{color:'#272e42'}} >{each.totalPaid}</td>
            <td style={{color:'#272e42'}} >{each.remainingDue}</td>
            <td style={{color:'#272e42'}} >{each.paymentHistory[0].date}</td>
            <td className="text-center">
                <button className="btn btn-success"> <a href="/invoice">Generate</a></button>
            </td>
          </tr>
        
        ))}
        </tbody>
          
      </table>
        </div>
    )
}

export default Payments
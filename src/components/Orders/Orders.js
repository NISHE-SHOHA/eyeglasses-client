import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@restart/ui/esm/Button';

const Orders = () => {
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch('https://morning-ravine-75355.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleButtonDelete = id =>{
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
           
        
            if(data.deletedCount){
                alert('Deleted SUccessFully')
                window.reload();
            }
        })
    }


    return (
        <div>
            <h2 className="text-primary fw-bold">All Orders</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.name}
              </TableCell>
              <TableCell align="right">{order.price}</TableCell>
              <TableCell align="right"><Button className="btn btn-danger" onClick={() =>handleButtonDelete(order._id)}>Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Orders;
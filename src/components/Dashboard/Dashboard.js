import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import {
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManegeProducts/ManageProducts';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageOrders from '../ManageOrders/ManageOrders';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);    
  
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to="/orders"><Button color="inherit">All Orders</Button></Link>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to="/payment"><Button color="inherit">Payment Options</Button></Link>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to={`${url}/review`}><Button color="inherit">Add A Review</Button></Link>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to={`${url}`}><Button color="inherit">DashBoard</Button></Link>
       {admin && <Box>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to={`${url}/manageorders`}><Button color="inherit">Manage All Orders</Button></Link>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to={`${url}/addproduct`}><Button color="inherit">Add Products</Button></Link>
      <Link className="btn btn-primary fw-bold mb-2" style={{ display: 'block'}} to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
      </Box>}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'static' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'static' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageorders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
      </Switch>   
      </Box>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

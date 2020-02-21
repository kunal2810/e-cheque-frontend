import React, {useState, useEffect, useContext} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Image from 'react-bootstrap/Image'
import Avatar from '@material-ui/core/Avatar';
// import HeaderStyle from '../../stylesheets/header'
import cheque from '../../assets/cheque.jpg';
import {Link} from "react-router-dom";
import {AuthContext} from '../../service/contextApi';
import Headercss from '../../stylesheets/headercss'



function Header(props) {
  const classes = Headercss.useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const { state, dispatch } = useContext(AuthContext);

  console.log("dispatch", state)

  useEffect(()=>{
    console.log(props.headerName)
  })


  const isMenuOpen = Boolean(anchorEl);
  

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
      dispatch({
        type: "LOGOUT"
      }) 
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem><Link to="/issueCheque">Issue Cheque</Link></MenuItem>
      <MenuItem><Link to="/depositCheque">Deposit Cheque</Link></MenuItem>
      <MenuItem><Link to="/" onClick={handleLogout}>Logout</Link></MenuItem>
    </Menu>
  );


    return (
      <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <Image src={cheque} style={{width: 50}} roundedCircle/>
          <Typography variant="h6" className={classes.title} noWrap>
          &nbsp;&nbsp;Electronic Cheque
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={10} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt={state.user} src="/static/images/avatar/3.jpg"/>
            </IconButton>
          </div>
          
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
    );
}

export default Header;
import React, { useEffect, useState, useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import ApiCalling from '../../service/apicalling';
import {AuthContext} from '../../service/contextApi';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function UserDashboard(props) {
  const classes = useStyles();

  const { state } = useContext(AuthContext);

  // const [data, setData] = useState(JSON.parse(sessionStorage.getItem("userData")))
  const [dashdata, setDashdata] = useState({});

  async function fetchData() {
    let user_id = state.id;

    let userObj = {
      user_id
    }

    var response  = await ApiCalling.userDashboard(userObj);
    setDashdata(response)

  }

  useEffect(() => {
    fetchData()
  }, [])
  
  useEffect(() => {
  }, [dashdata])

  return (
    
    <React.Fragment>
    <Header loginFlag={props.loginFlag} headerName={props.name}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Cheque No.</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Bank Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {(dashdata.issuedCheque || []).map(row => (
          <StyledTableRow key={row.chequeNo}>
            <StyledTableCell component="th" scope="row">
              {row.payeeName}
            </StyledTableCell>
            <StyledTableCell align="right">{row.chequeNo}</StyledTableCell>
            <StyledTableCell align="right">{row.amtWords}</StyledTableCell>
            <StyledTableCell align="right">{row.bankName}</StyledTableCell>
            <StyledTableCell align="right">{row.status}</StyledTableCell>
          </StyledTableRow>
        ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    <Footer/>
    </React.Fragment>
  );
}
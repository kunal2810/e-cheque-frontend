import React, { useState, useContext } from 'react'
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import OTPVerifyModal from './OTPVerify';
import {Form,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Grid} from '@material-ui/core'
import '../../stylesheets/issueCheque.css';
import ApiCalling from '../../service/apicalling';
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {AuthContext} from '../../service/contextApi';

export default function IssueCheque() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectBank, setSelectBank] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [mobileNo, setMobileNo] = useState('');

  const { state } = useContext(AuthContext);


  const handleSelectBank = event => {
    console.log("bank", event.target.value);
    
    setSelectBank(event.target.value);
    console.log("selectedBank",selectBank)
  }

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  let handleClickEvent = () => {
    let obj = {
      mobile : mobileNo
    }
    ApiCalling.sentOTP(obj);
    setModalShow(true)
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let formobj = {
      "payer_id" : state.id,
      "payeeName" : formData.get("payeeName"),
      "amtWords" : formData.get("amtWords"),
      "amtRs" : formData.get("amtRs"),
      "bankName" : formData.get("bankName"),
      "mobile" : formData.get("mobile"),
      "dateOfIssue" : formData.get("dateOfIssue"),
    }
    ApiCalling.chequeInfo(formobj)
  };

    return (
        <React.Fragment>
            <Header/>
      <h3>
        Please Fill Details To Whom You Are Issue Cheque
      </h3>
<Form onSubmit={handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridPayeeName">
      <Form.Label>Payee's Full Name</Form.Label>
      <Form.Control name="payeeName" placeholder="Payee's Full Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridAmtWords">
      <Form.Label>Amount in Words</Form.Label>
      <Form.Control name="amtWords" placeholder="Amount in Words" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridAmt">
      <Form.Label>Amount in Rupees</Form.Label>
      <Form.Control name="amtRs" placeholder="Amount in Rupees"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridBank">
      <Form.Label>Select Bank</Form.Label>
      <Form.Control as="select" name="bankName" onChange={handleSelectBank}>
        <option value="0">Select Bank</option>
        <option value="ICICI">ICICI Bank</option>
        <option value="HDFC">HDFC Bank</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMobile">
      <Form.Label>Mobile</Form.Label>
      <Form.Control as="input" value={mobileNo} onChange={(event) => setMobileNo(event.target.value)} name="mobile" placeholder="Enter Mobile Number"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMobile">
    <Button variant="primary" onClick={handleClickEvent}>Send OTP</Button>
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Date of Issue</Form.Label>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid justify="space-around">
      <KeyboardDatePicker
          name="dateOfIssue"
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      </MuiPickersUtilsProvider>
    </Form.Group>

  <Button className="button" variant="primary" type="submit">
    Submit
  </Button>
  </Form>
    <Footer/>
    <OTPVerifyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        mobile = {mobileNo}
      />
    </React.Fragment>
    )
}
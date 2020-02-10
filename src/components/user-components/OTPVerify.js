import React, { useState,useEffect } from 'react'
import {Modal,Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import ApiCalling from '../../service/apicalling';


export default function OTPVerifyModal(props) {
    const [OTPValue, setOTPValue] = useState('');

    const handleOTPVerify = () => {
      let obj = {
        mobile : props.mobile,
        OTP : OTPValue
      }
      ApiCalling.verifyOTP(obj);
      props.onHide()
    }

    return (
        <React.Fragment>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            OTP Verification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Please Enter OTP</h5>
          <TextField id="standard-basic" label="Enter OTP" value={OTPValue} onChange={event => setOTPValue(event.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOTPVerify}>Verify OTP</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
    )
  }
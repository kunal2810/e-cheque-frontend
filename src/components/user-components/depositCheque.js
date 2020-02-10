import React, { useState } from 'react'
import Header from '../common-components/header';
import Footer from '../common-components/footer';
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import '../../stylesheets/depositCheque.css';
import ApiCalling from '../../service/apicalling';


export default function DepositCheque() {
    const [chequeNo, setChequeNo] = useState('');
    const [formShow, setFormShow] = useState(false);
    const [data, setData] = useState({
        'payeeName' : '',
        'amtWords' : '',
        'amtRs' : '',
        'bankName' : '',
        'mobile' : '',
        'dateOfIssue' : '',
    });

    let handleClick = async () => {
        let obj = {
            chequeNo
        }
        let response = await ApiCalling.chequeSearch(obj);
        if(response !== undefined){
            setData({
                'payeeName' : response.payeeName,
                'amtWords' : response.amtWords,
                'amtRs' : response.amtRs,
                'bankName' : response.bankName,
                'mobile' : response.mobile,
                'dateOfIssue' : response.dateOfIssue
            });
            setFormShow(true);
        }else{
            setFormShow(false);
        }
    }

    let handleDepositCheque = (event) => {
        event.preventDefault();
        let obj = {
            chequeNo
        }
        ApiCalling.depositCheque(obj)
    }

    return (
        <React.Fragment>
            <Header />
            <h5>
                Please Enter the Cheque Number
            </h5>
            <div className="TextField">
                <TextField 
                id="outlined-basic" 
                value={chequeNo} 
                onChange={(event) => setChequeNo(event.target.value)} 
                label="Cheque Number" 
                variant="outlined" />
                <Button 
                className="Button" 
                variant="primary"
                onClick={handleClick}
                >Submit</Button>
            </div>
            {
                formShow ? 
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPayeeName">
                            <Form.Label>Payee's Full Name</Form.Label>
                            <Form.Control disabled="true" 
                            value={data.payeeName}
                            name="payeeName" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAmtWords">
                            <Form.Label>Amount in Words</Form.Label>
                            <Form.Control disabled="true" 
                            value={data.amtWords}
                            name="amtWords" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAmt">
                            <Form.Label>Amount in Rupees</Form.Label>
                            <Form.Control name="amtRs" value={data.amtRs} disabled="true" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBank">
                            <Form.Label>Bank Name</Form.Label>
                            <Form.Control name="bankName" value={data.bankName} disabled="true" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDate">
                            <Form.Label>Date of Issue</Form.Label>
                            <Form.Control name="dateOfIssue" value={data.dateOfIssue} disabled="true" />
                        </Form.Group>
                    </Form.Row>
                    <Button className="button" onClick={handleDepositCheque} variant="primary" type="submit">
                        Deposit Cheque
                        </Button>
                </Form>
            </div> 
            : null
}

{
    <Footer />
}
            
        </React.Fragment>
    );
}
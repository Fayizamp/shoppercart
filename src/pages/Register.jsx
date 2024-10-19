import * as formik from 'formik';

import { Col, Form, Row } from 'react-bootstrap';
import * as yup from 'yup';
const Register = ()=>{
    const { Formik } = formik;
    const schema = yup.object().shape({
        fulName: yup.string().required("Please enter fullname"),
        email: yup.string().email("Please enter a valid email address").required("please enter email address"),
        password: yup.string().min([6,"password should have minimum 6 character"]).required("please enter password")
    })
    return (
        <Formik
            ValidationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                fullName: '',
                email:'',
                password:'',
            }}
        >
            {({ handlesubmit , handlechange, values, touched, errors })=>
                <Form noValidate onSubmit={handlesubmit}>
                    <Row className ='nb-3'>
                        <Form.Group as ={Col} md="4" controlID="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="firstName"
                                value={values.email}
                                onChange={handlechange}
                                isValid={touched.firstName && !errors.firstName}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </Form>
            }


            

            </Formik>
    )
}
export default Register;
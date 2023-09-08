import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import "../styles/styles.css";

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ ( values ) => {
                    console.log( values );
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                                .min( 2, 'Debe de tener minimo 2 caracteres')
                                .max( 15, 'Debe de tener maximo 15 caracteres')
                                .required('Requerido'),
                    email: Yup.string()
                                .min( 6, 'Debe de tener minimo 6 caracteres')
                                .email('El correo no tiene un formato valido')
                                .required('Requerido'),
                    password1: Yup.string()
                                    .min( 6, 'La contraseña debe de tener minimo 6 caracteres')
                                    .required('Requerido'),
                    password2: Yup.string()
                                    .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                    .required('Requerido')
                }) }
            >
                { ({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label='Name'
                            name='name'
                            placeholder='Omar'
                        />
                        <MyTextInput
                            label='Email'
                            name='email'
                            placeholder='Omar@gmail.com'
                        />
                        <MyTextInput
                            label='Password'
                            name='password1'
                            type='password'
                        />
                        <MyTextInput
                            label='Repeat Password'
                            name='password2'
                            type='password'
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>

                )}
            </Formik>
        </div>
    )
}; 
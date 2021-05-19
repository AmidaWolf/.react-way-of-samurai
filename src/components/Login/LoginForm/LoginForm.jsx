import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import style from "../Login.module.css";


export const LoginForm = ({setUserLogin, errorLogin}) => {
    const validation = Yup.object({
        email: Yup
            .string()
            .email('Invalid email address')
            .required('Please Enter your email'),
        password: Yup
            .string()
            .required('Please Enter your password')
    })

    const submit = (values, {setSubmitting}) => {
        setUserLogin(values)
        setSubmitting(false);
    }

    return (
        <div className={style.login_container}>
            <h1>Login</h1>

            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={validation}
                onSubmit={submit}
            >
                {({ isSubmitting}) => (
                    <Form className={style.form}>
                        <label htmlFor={'email'}>email:</label>
                        <Field
                            type={'email'}
                            name={'email'}
                            placeholder={'Your email'}
                        />
                        <ErrorMessage name="email" component="div" />
                        <label htmlFor={'password'}>password:</label>
                        <Field
                            type={'password'}
                            name={'password'}
                            placeholder={'Your password'}
                        />
                        <ErrorMessage name="password" component="div"/>
                        <label>
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                            />Remember me
                        </label>
                        <label>
                            <Field
                                type={'checkbox'}
                                name={'captcha'}
                                checked={true}
                            />Captcha
                        </label>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                        {
                            errorLogin ?
                                <p className={style.error_login}>Error: {errorLogin}</p> :
                                null
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

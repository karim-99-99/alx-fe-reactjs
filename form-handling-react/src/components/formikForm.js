import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        
          email: Yup.string()
         .email('Invalid email address').required('Required'),

         password: Yup.string().password('Invalid password address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="name">name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="email">email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />

        <label htmlFor="password">password Address</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
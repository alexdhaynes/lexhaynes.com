import { useState } from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

import Button from '@components/Button'
import socialData from '@data/social.json'


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


const SubmitEmail = ({formValues}) => {
    const [sent, setSent] = useState()
    const { firstName, lastName, email, subject, message } = formValues;

    postData('/api/sendEmail', { 
        firstName,
        lastName,
        email,
        subject,
        message,
    })
    .then((res) => {
        setSent("success");
    },
    (error) => {
        setSent("error");
    })

    if (sent === "success") {
        return (
            <p className="text-center flex justify-center">Your email has been sent!</p>
        )
    } else if (sent === "error") {
        return (
            <p className="text-center flex justify-center">There was a problem sending your message.</p>
        )
    }
  
    return <p className="text-center flex justify-center">
        Your email is being sent...
    </p>
}

//formik form

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="my-4">
            <p className="mb-1">
                <label htmlFor={props.id || props.name}>{label}</label>
            </p>
            
            <div>
                {
                    field.name === "message" 
                        ? <textarea className="form-textarea rounded-lg w-full resize-none h-44" {...field} {...props} ></textarea>
                        : <input className="form-input rounded-lg w-full" {...field} {...props} />
                }
                
                { meta.touched && meta.error 
                    ? <p className="error text-sm text-red-600 sans-serif mt-2">{meta.error}</p>
                    : null
                }
            </div>
        </div>

    );
  };

const ContactForm = () => {
    //these might be redundant...
    const [formHasSubmitted, setFormHasSubmitted] = useState(false);
    const [formValues, setFormValues] = useState(false);

return (
    <Formik 
    initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),

        subject: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),

        message: Yup.string()
            .min(20, 'Your message must be at the length of a sentence')
            .max(1000, 'Must not exceed 1000 characters')
            .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
           //alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
           setFormHasSubmitted(true);
           setFormValues(values);
      }}
    >

    {
        formHasSubmitted && setFormValues
        ? <SubmitEmail formValues={formValues} />
        : (
        <Form>
        
            <div className="mx-auto">

               <div className="md:grid md:grid-cols-2 gap-4">
                
                    <TextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                    />
                            
                    <TextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                    />
          

               </div>
               
                <div className="md:-mt-4">
                    <TextInput
                        label="Email Address"
                        name="email"
                        type="email"
                    />
                </div>
                

                    <TextInput
                    label="Subject"
                    name="subject"
                    type="text"
                />

                    <TextInput
                    label="Message"
                    name="message"
                    type="textarea"
                />

                <p className="mt-10 flex justify-center">
                    <Button type="submit">Submit</Button>
                </p>
         
            </div>
        
       </Form>
    )}
        
    </Formik>
       
    )
  }
  



export default ContactForm
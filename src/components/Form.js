import Button from '@components/Button'
import {useState} from 'react'
import socialData from '@data/social.json'

const Row = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const Input = ({type, placeholder}) => {
    return (
        <input type={type} maxLength="100" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder={placeholder} />
    )
}

const Form = () => {
    const [showWarning, setShowWarning] = useState(false)
    const [formVisible, setFormVisible ] = useState(true);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subj, setSubj] = useState();
    const [msg, setMsg] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const handleFormInput = (e, type) => {
        //
    }

    const sendEmail = () => {

            window.setTimeout(() => {
                setFormVisible(!formVisible);
            }, 150)
    
    }
    
    if (!formVisible) {
        return <div className="container">
                <h3 className="text-center">Thanks! Your email has been sent.</h3>
                <p className="flex justify-center">
                    {
                            socialData.map((item, i) => (
                                <a key={`social-${i}`} className="underline text-semibold mr-4 mt-4" href={item.href} title={item.name} target="_blank" rel="noreferrer">{item.name}</a>
                            ))
                        }
                </p>
            </div>
    } 
    
    return (

            <div className="grid grid-cols-1 gap-6">

              <Row className="block">
                <span className="text-gray-700">Your name</span>
                <Input type="text" onChange={(e) => handleFormInput(e, "name")} />
              </Row>

              <Row className="block">
                <span className="text-gray-700">Your Email address</span>
                <Input type="email" onChange={(e) => handleFormInput(e, "email")} />
              </Row>

              <Row className="block">
                <span className="text-gray-700">Email Subject</span>
                <Input type="text" onChange={(e) => handleFormInput(e, "subj")} />
              </Row>
            
    
              <Row className="block">
                <span className="text-gray-700">Your Message </span>
                <textarea onChange={(e) => handleFormInput(e, "msg")} maxLength="500" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" placeholder="500 characters max"></textarea>
              </Row>

                <Row>
            
                   
                    <div className="flex justify-center">
                        <Button onClick={() => sendEmail()}>Submit</Button>
                    </div>
                    
                </Row>
            
            </div>
    )
}

export default Form
import { Input, Text,Button } from '@nextui-org/react'
import React, { useState } from 'react'


interface IfcObjectValues {
    email:  string;
}


interface MyInterface {
    [x: string]: IfcObjectValues, 
  }

const Email = ({option}) => {
    const [emailSend, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const wait = () => {
        setTimeout(() => {
            setEmail('')
        }, 1000);
    }


    const  handleSubmit = async (e:any) =>{
        e.preventDefault();
        const { email } = e.target;
        const formData = {}

        Array.from(e.currentTarget.elements).forEach( field => {
            formData[email.name] =  email.value;
            formData['option'] = option
            
        });
        fetch('/api/email',{
            method:'post',
            body:JSON.stringify(formData)
        })
        console.log(formData)
    }



    return (
        <>
            <form method='post' onSubmit={handleSubmit}
            style={{
                marginLeft:'50px',
                display:'flex',
                gap:'10px',
                alignItems:'center',
            }}>
                <Input onChange={handleChange}  type='text' value={emailSend}  bordered labelPlaceholder="Enter your email " color="error" />
                <Button type='submit' name='email' value={emailSend} shadow onClick={wait} size='sm' color="gradient" > S E N D</Button>

            </form>

        </>
    )
}

export default Email
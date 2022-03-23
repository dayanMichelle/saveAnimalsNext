import { Input, Text } from '@nextui-org/react'
import React from 'react'


interface IfcObjectValues {
    email:  string;
}


interface MyInterface {
    [x: string]: IfcObjectValues, 
  }


const Email = ({option}) => {

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
                marginLeft:'50px'
            }}>
                <Input name='email' bordered labelPlaceholder="Enter your email " color="error" />
                

            </form>

        </>
    )
}

export default Email
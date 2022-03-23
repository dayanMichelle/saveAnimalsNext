import { Radio, Grid, Card, Text, Col, Row } from '@nextui-org/react';
import { useState } from 'react';
import { listAcctions } from '../../api'
import Email from '../../components/Email';

const IndexPage = () => {
    const [options,setOption] = useState('');

    const handleOption = (name) => 
    {
        setOption(name)
    }
    return (
        <>

            <Grid.Container gap={2} justify='center'>

                <Grid xs={12} md={6}>

                    <Card clickable>
                        <Card.Header>
                            <Text
                                h1
                                color='error'
                            ><Col>
                                    <Text
                                        size={20}
                                        weight="bold"
                                        transform="uppercase"
                                        color="#ffffffAA"
                                    >
                                        The planet will
                                    </Text>
                                    <Text
                                        h3
                                        color="error"
                                        size={40}
                                        transform='uppercase'
                                    >
                                        thank you 
                                    </Text>

                                  
                                </Col></Text> <Email option = {options}></Email>
                        </Card.Header>
                        <Card.Image
                            css={{
                                borderRadius: '100%'
                            }}
                            src='https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628_1280.png'
                            height='auto'
                            width="70%"
                            alt="Card image background"
                        />
                        <Card.Footer>
                            <Row justify="center" align="center">
                                <Text h6 size={14} color="white" weight='bold' css={{ m: 0 }}>
                                Select one and commit to doing it for a week. We will send you an email for your commitment! 
                                Enter your email and we will send you your challenge
                                </Text>
                            </Row>
                        </Card.Footer>
                    </Card>

                </Grid>
                <Grid xs={12} md={6}>
                    <Card color='gradient'
                        css={{
                            height: '600px'
                        }}>

                        <Radio.Group>
                            {
                                listAcctions.map(e => (
                                    <Radio key={e.id}
                                        value={e.id}
                                        color="error"
                                        onChange={()=>{handleOption(e.name)}}
                                        
                                    >
                                        {e.name} <Radio.Description css={{ color: 'black' }}>{e.description}</Radio.Description>
                                    </Radio>

                                ))
                            }

                        </Radio.Group>
                    </Card>

                </Grid>
             
            </Grid.Container>

        </>
    )
}

export default IndexPage
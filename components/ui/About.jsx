import { Card, Container, Row, Text } from '@nextui-org/react'
import React from 'react'

const About = () => {
    return (
        <>
            <Container sm>
                <Card color="primary">
                    <Row justify="center" align="center">
                        <Text h6 size={20} color="white" css={{ m: 0 }}>
                            These are only the first 100 animals in danger of extinction.
                            Saving animals is in our hearts. Follow our new goals and
                            help us save animals. ☠️
                        </Text>
                        
                    </Row>
                    
                </Card>
            </Container>
        </>
    )
}

export default About
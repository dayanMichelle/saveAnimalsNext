import { Card, Container, Row, Text } from '@nextui-org/react'


const About = () => {
    return (
        <>
            <Container sm 
            css={{
                marginTop:'50px'
            }}
            >
                <Card color="primary">
                    <Row justify="center" align="center">
                        <Text h6 size={20} color="white" css={{ m: 0 }}>
                        These are just the top 100 endangered species. Saving 
                        the planet is in our hearts. Follow our new goals and help us. ☠️
                        </Text>
                        
                    </Row>
                    
                </Card>
            </Container>
        </>
    )
}

export default About
import { Radio, Grid, Card, Text, Col, Row } from '@nextui-org/react';
import { listAcctions } from '../../api'

const index = () => {
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
                                        New
                                    </Text>
                                    <Text
                                        h3
                                        color="error"
                                        size={40}
                                    >
                                        Acme camera
                                    </Text>
                                </Col></Text>
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
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    NextUI gives you the best developer experience with all the features you need for building beautiful and modern websites and applications.
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
                                    <Radio
                                        value={e.id}
                                        color="error"
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

export default index
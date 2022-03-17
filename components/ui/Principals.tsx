import { Card, Col, Grid, Text } from '@nextui-org/react'
import React from 'react'
import About from './About'
const Principals = () => {
  return (
    <div
      style={{
        width: '90%',
        margin: '20px auto'
      }}>
      <Text h1
      size={40}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
          textAlign: 'center'
        }}
      > Mayores razones de la exticion </Text>
      <About />
      <Grid.Container gap={2} justify="center">

        <Grid xs={12} sm={4}>
          <Card cover animated={true} clickable hoverable>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col
                css={{
                  backgroundColor: 'rgba(0, 0, 0,0.5)',
                  height: '70px',
                  borderRadius: '10px'
                }}
              >
                <Text
                  size={20}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Destrucción de hábitats silvestres
                </Text>
                <Text color="white" size={15} weight='bold' >
                  Stream the Acme event
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              css={{
                filter: 'blur(2px)'
              }}
              src='https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              height={340}
              width="100%"
              alt="Card image background"
            />
          </Card>
        </Grid>

        <Grid xs={12} sm={4}>
          <Card cover animated={true} clickable hoverable>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col
                css={{
                  backgroundColor: 'rgba(0, 0, 0,0.5)',
                  height: '70px',
                  borderRadius: '10px'
                }}
              >
                <Text
                  size={20}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Destrucción de hábitats silvestres
                </Text>
                <Text color="white" size={15} weight='bold' >
                  Stream the Acme event
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              css={{
                filter: 'blur(2px)'
              }}
              src='https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              height={340}
              width="100%"
              alt="Card image background"
            />
          </Card>
        </Grid>


        <Grid xs={12} sm={4}>
          <Card cover animated={true} clickable hoverable>
            <Card.Header css={{ position: 'absolute', zIndex: 1, }}>
              <Col css={{
                backgroundColor: 'rgba(0, 0, 0,0.5)',
                height: '70px',
                borderRadius: '10px'
              }}>
                <Text
                  size={20}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Destrucción de hábitats silvestres
                </Text>
                <Text color="white" size={15} weight='bold' >
                  Stream the Acme event
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              css={{
                filter: 'blur(2px)'
              }}
              src='https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              height={340}
              width="100%"
              alt="Card image background"
            />
          </Card>
        </Grid>


      </Grid.Container>



    </div>

  )
}
export default Principals
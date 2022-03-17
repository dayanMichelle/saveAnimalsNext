import React, { FC } from 'react'
import { Card, Col, Grid, Text } from '@nextui-org/react'

interface Props {
  title: string,
  subtitle: string,
  img: string,
  moreInfo: string
}

const CardInfo: FC<Props> = ({ title, subtitle, img, moreInfo }) => {
  return (
    <>
        <Grid xs={12} sm={4} md={4} xl={4} 
         css={{
           margin:'0 auto'
         }}
         >

          <Card
            cover
            animated={true}
            clickable
            hoverable
            css={{
              width: '80%',
              margin: '0 auto'
            }}
          >
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
                  transform="capitalize"
                  color="warning"
                  css={{
                    textAlign: 'center'
                  }}

                >
                  {title}
                </Text>
                <Text color="white" size={15} weight='bold'
                  css={{
                    textAlign: 'center'
                  }}
                >
                  {subtitle}
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              css={{
                filter: 'blur(2px)'
              }}
              src={img}
              height={440}
              width="100%"
              alt="Card image background"
            />
            <Card.Footer
              blur
              css={{
                position: 'absolute',
                bgBlur: '#0f1114',
                borderTop: '$borderWeights$light solid $gray700',
                bottom: 0,
                zIndex: 1
              }}
            >
              {moreInfo}
            </Card.Footer>
          </Card>
        </Grid>

    </>
  )
}

export default CardInfo
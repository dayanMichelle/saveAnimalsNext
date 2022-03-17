import { Card, Col, Grid, Text } from '@nextui-org/react'
import React from 'react'
import About from './About'
import CardInfo from './CardInfo'
const Principals = () => {
  return (
    <div
      style={{
        width: '90%',
        margin: '20px auto'
      }}>
      <Text h1
        transform='capitalize'
        size={35}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
          textAlign: 'center',
          marginTop: '-50px'
        }}
      > main reasons for extinction </Text>

      <Grid.Container gap={2} justify="flex-start">

        <CardInfo
          title='habitat loss'
          subtitle='Stream the Acme event'
          img='https://images.pexels.com/photos/6249809/pexels-photo-6249809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          moreInfo='The loss and deterioration of habitats is the main cause of biodiversity loss.
        By transforming jungles, forests, thickets, grasslands, mangroves, lagoons,
        and reefs into agricultural fields, ranchers, shrimp farms, dams, highways,
        and urban areas, we destroy the habitat of thousands of species.'
        />

        <CardInfo
          title='overexploitation'
          subtitle='Stream the Acme event'
          img='https://images.pexels.com/photos/10622724/pexels-photo-10622724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          moreInfo='Overexploitation is the removal of individuals from a population at a rate greater 
          than their reproduction. When this happens the population decreases. This has been the history 
          of many of the species that have been exploited for different reasons: whales, fish, deer, cacti,
           orchids.'
        />


        <CardInfo
          title='Pollution'
          subtitle='Stream the Acme event'
          img='https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          moreInfo='Industrial, agricultural, livestock and urban activities contribute substantially to the
          air, water and soil pollution.
          Some pollutants have weakened the ozone layer that protects living beings from radiation
          ultraviolet radiation from the Sun, while others have caused global warming. Water Pollution,
           of soil and air directly affects many organisms even in remote places.
          '
        />

      </Grid.Container>
      <About />
    </div>

  )
}
export default Principals
import React, { FC } from 'react'
import { Result } from '../../interfaces'
import { Card, Grid, Text } from '@nextui-org/react';


interface Props {
  animals: Result,
}
const AnimalCard: FC<Props> = ({ animals }) => {

  return (
    <>
      <Grid>
        <Card
          key={animals.scientific_name}

          clickable
          shadow={true}
          hoverable
          css={{ padding: '20px',  }}
        >
          <Card.Body>

            <Text weight="bold" css={{
              textGradient: '45deg, $blue500 -20%, $pink500 50%'
            }} size={30}> {animals.scientific_name} 💔 </Text>


          </Card.Body>
          <Card.Footer>
            <Text weight="hairline" size={23}>State: Critical Extinction</Text>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  )
}

export default AnimalCard
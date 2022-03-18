import React, { FC } from 'react'
import { Result } from '../../interfaces'
import { Card, Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';


interface Props {
  animals: Result,
}

const AnimalCard: FC<Props> = ({ animals }) => {

  
  const handelclick = (animal:string)=>{
     window.open(`https://www.google.com/search?q=${animal}`)
  
  }
  return (
    <>
      <Grid  xs={12} sm={4} md={3} xl={1}   key={animals.scientific_name}>
        <Card
        onClick={()=>{handelclick(animals.scientific_name)}}
          clickable
          shadow={true}
          hoverable
          css={{ padding: '20px' }}
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
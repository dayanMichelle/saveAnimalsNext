
import { Grid } from '@nextui-org/react';
import { NextPage,GetStaticProps } from 'next'
import AnimalsApi from '../api';
import {MainPage} from '../components/layauts'
import { Result,AnimalsResponse } from '../interfaces';
import AnimalCard from '../components/animalsCards';
import Principals from '../components/ui/Principals';


interface Props {
  animals:Result[];
}
 const  HomePage: NextPage<Props> = ({ animals })  => {

  return (
    <>
      <MainPage>
        
        <Principals />
        <Grid.Container gap={4}  color="white" css={{ m: 0 }} justify="center">
          {
          animals.map((e)=>(
            <AnimalCard key={e.scientific_name} animals={e}>

            </AnimalCard>
          ))

          }
          
        </Grid.Container>
      </MainPage>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

const {data} = await AnimalsApi.get<AnimalsResponse>('')
const results = data.result;
const primeros100 = results.splice(100,200);

return {
  props:{
    animals :primeros100,
  }
}

}


export default HomePage
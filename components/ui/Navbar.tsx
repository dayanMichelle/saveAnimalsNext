import React from "react"
import { Button, Grid, Image, Input, NextUIProvider, Spacer, Text, useTheme } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <Grid.Container justify="flex-start" css={{
        height: '100px',
        width: '100%',
        margin: '0 auto'
      }}>

        <Grid 
        xs={6} >

          <Text
            h1
            size={25}
            transform="uppercase"
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%',
              margin:'10px'
            }}
            h3
          >
            🐼 ᦓꪖꪜ꠸ꪀᧁ
          </Text>

        </Grid>

      
        <Grid 
        xs={6} 
         css={{
           justifyContent:'end'
         }}
        >
          <Button 
         auto 
         color="error"
         css={
           {
             padding:'20px 40px',
             margin:'10px'
           }
         }
          ><Text 
            weight='medium'
            onClick={(e)=>{
              e.preventDefault();
              router.push(__dirname + '/help')
            }}
            >
              
              Help
          </Text>
          </Button>
        </Grid>
      </Grid.Container>


    </>
  )
}

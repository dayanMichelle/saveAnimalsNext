import React from "react"
import { Button, Grid, Image, Input, NextUIProvider, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme, isDark } = useTheme()
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
                    >Help
                    </Text>
          </Button>
        </Grid>
      </Grid.Container>


    </>
  )
}

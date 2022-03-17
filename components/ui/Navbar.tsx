import React from "react"
import { Button, Grid, Image, Input, NextUIProvider, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme, isDark } = useTheme()
  return (
    <>
      <Grid.Container justify="space-between" css={{
        height:'100px',
        marginTop:'10px'
      }}>

        <Grid xs={6}>
          
          <Text
            h1
            size={30}
            transform="uppercase"
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%',
              marginRight:'50px',
              marginLeft:'50px'
            }}
            h3
          >
          🐼 Save animals
          </Text>
          <Grid xs={6}>
            <Button color='gradient' shadow ><Text weight='medium'>Help</Text></Button>
          </Grid>
        </Grid>

      </Grid.Container>


    </>
  )
}

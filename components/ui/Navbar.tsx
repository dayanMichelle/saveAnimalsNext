import React from "react"
import { Button, Grid, Input, NextUIProvider, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme, isDark } = useTheme()
  return (
    <>
      <Grid.Container gap={4} justify="center">
        <div style={{
          display: "flex",
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 20px',
          justifyContent: 'start',
        }}>
          <Grid  xs={12} sm={4}>
            <Text 
            h1 
            size={20} 
            transform="uppercase" 
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%',
              marginRight:'50px'
            }} 
            h3
            >
              Save animals 
            </Text>
            
          </Grid>

            <Spacer x={35}></Spacer>

          <Grid  xs={12} sm={4}>
            <Button color='gradient' shadow ><Text weight='medium'>Help</Text></Button>
          </Grid>

        </div>
      </Grid.Container>


    </>
  )
}

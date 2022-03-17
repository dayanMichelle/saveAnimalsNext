import React from "react"
import { Button, Grid, Input, NextUIProvider, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme, isDark } = useTheme()
  return (
    <>
      <Grid.Container gap={3}>
        <div style={{
          display: "flex",
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 20px',
          justifyContent: 'start',
        }}>
          <Grid>
            <Text h1 transform="uppercase" css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%'
            }} h3>Save animals </Text>
          </Grid>

          <Grid>
            <Button color='gradient' shadow ><Text>Ayudar</Text></Button>
          </Grid>


        </div>
      </Grid.Container>


    </>
  )
}

import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import PrimaryCareComp from '../components/PrimaryCareComp';
const PageHeader="Primary Care";
function PrimaryCare() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      
      <Title order={1}> {PageHeader}</Title>
      
       <PrimaryCareComp />
       </Box>
    </div>
  );
}

export default PrimaryCare;


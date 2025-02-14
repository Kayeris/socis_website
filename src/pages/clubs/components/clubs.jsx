import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import gccLogo from '../assets/gcc.png';
import gwicsLogo from '../assets/gwics.png';
import dscLogo from '../assets/dsc.png';
import GCC from './gcc';
import GWICS from './gwics';
import DSC from './dsc';

function Clubs() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <LogoGrid item md={4} sm={12}>
        <Image src={gccLogo} alt="Guelph Coding Community Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <GCC />
      </Grid>

      <LogoGrid item md={4} sm={12}>
        <Image src={gwicsLogo} alt="Guelph Women in Computer Science Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <GWICS />
      </Grid>

      <LogoGrid item md={4} sm={12}>
        <Image src={dscLogo} alt="Developer Student Club Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <DSC />
      </Grid>
    </Grid>
  );
}

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  max-height: 40vh;
  max-width: 250px;
  min-width: 150px;
`;

const LogoGrid = styled(Grid)`
  text-align: center;
`;

export default Clubs;

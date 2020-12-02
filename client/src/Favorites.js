import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { ResponsiveContainer } from 'recharts';
import Title from './Title';


export default function Favorites() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Favorites</Title>
      <ResponsiveContainer>
        <Title>Cooming Soon</Title>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

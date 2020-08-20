import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';


export default function Chart() {
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

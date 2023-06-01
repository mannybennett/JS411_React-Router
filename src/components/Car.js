import React from 'react';
import cars from '../cars.json';
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";

// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@mui/material';

const Car = () => {
    const { id } = useParams()
    const car = cars[id-1]
    const keys = Object.keys(car)

    return (
        <Container maxWidth='xs' sx={{ marginTop: 20 }}>
            <Paper sx={{ padding: 8, width: '100%', height: '100%' }}>
                {console.log(keys)}
                <h2>{car[keys[1]]}</h2>
                {keys.map((info, idx) => {
                    return (
                    <Chip sx={{ backgroundColor: '#E1E0E1' }} key={idx} label={`${info}:${car[info]}`} />
                    )
                })}
            </Paper>
        </Container>
    )
};

export default Car;
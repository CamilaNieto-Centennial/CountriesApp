import React from 'react';
import "./CountryPaper.css";
import { Paper, Title, Text } from '@mantine/core';

export const CountryPaper = ({countryName, region, area}) => {
    return (
        <Paper shadow="sm" radius="sm" p="xs" mb="xs" withBorder>
            <Title order={3}>{countryName}</Title>
            <Text>{region}</Text>
            <Text>{area}</Text>
        </Paper>
    )
}
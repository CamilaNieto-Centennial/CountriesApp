import React from 'react';
import "./CountryPaper.css";
import { Paper, Title, Text, Image } from '@mantine/core';

export const CountryPaper = ({flag, alt, countryName, region, area}) => {
    return (
        <Paper shadow="sm" radius="sm" p="xs" mb="xs" withBorder>
            <Image src={flag} alt={alt} width={35} height={20} display="inline-block"/>
            <Title order={3} display="inline"> {countryName}</Title>
            <Text>
                <Text span fw={700} inherit>Region: </Text>{region}
            </Text>
            <Text>
                <Text span fw={700} inherit>Area: </Text>{area} km²
            </Text>
        </Paper>
    )
}
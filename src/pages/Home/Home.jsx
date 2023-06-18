import React from 'react';
import './Home.css';
import { MantineProvider, Container, Title } from '@mantine/core';

import { CountryList } from '../../common/CountryList/CountryList';

export const Home = () => {
    return (
        <MantineProvider
            theme={{
                fontFamily: 'Open Sans, sans-serif',
                headings: { fontFamily: 'Greycliff CF, sans-serif' },
                components: {
                    Button: {
                        styles: {
                            root: { fontSize: 18 },
                        },
                    },
                },
                colors: {
                    brand: ['#F0FFF4', '#C6F6D5', '#9AE6B4', '#68D391', '#48BB78', '#38A169', '#2F855A', '#276749', '#22543D', '#1C4532'],
                },
                primaryColor: 'brand',
            }}
        >
            <Container fluid py="sm">
                <Title order={1} mb={5}>Countries App</Title>
                <CountryList />
            </Container>
        </MantineProvider>
    )
}
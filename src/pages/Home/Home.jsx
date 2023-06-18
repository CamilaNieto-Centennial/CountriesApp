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
            }}
        >
            <Container fluid py="sm">
                <Title order={1} mb="xs">Countries App</Title>
                <CountryList />
            </Container>
        </MantineProvider>
    )
}
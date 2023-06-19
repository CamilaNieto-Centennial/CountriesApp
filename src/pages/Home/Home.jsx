import React, { useState } from 'react';
import './Home.css';
import { MantineProvider, ColorSchemeProvider, Container, Title, Flex, } from '@mantine/core';

import { ThemeSwitcher } from '../../common/ThemeSwitcher/ThemeSwitcher';
import { CountryList } from '../../common/CountryList/CountryList';

export const Home = () => {
    const [colorScheme, setColorScheme] = useState('light');
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const containerStyles = {
        backgroundColor: colorScheme === 'dark' ? '#1F2937' : undefined,
        color: colorScheme === 'dark' ? '#F9FAFB' : undefined,
    };

    // Define the custom theme
    const theme = {
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
        colorScheme,
    }

    return (
        <MantineProvider theme={theme} >
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <Container fluid py="sm" style={containerStyles}>
                    <Flex
                        gap="md"
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >
                        <Title order={1} mb={5}>Countries App</Title>
                        <ThemeSwitcher />
                    </Flex>
                    <CountryList />
                </Container>
            </ColorSchemeProvider>
        </MantineProvider>
    )
}
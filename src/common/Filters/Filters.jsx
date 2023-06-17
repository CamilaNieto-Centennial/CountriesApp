import React from 'react';
import "./Filters.css";
import { Flex, Button } from '@mantine/core';

export const Filters = () => {
    return (
        <>
            <Flex
                mih={50}
                gap="md"
                px="0em"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
                mb="xs"
            >
                <Flex gap="md" wrap="wrap">
                    <Button color='blue.9'>Smaller than Lithuania</Button>
                    <Button color='blue.9'>In Oceania</Button>
                </Flex>
                <Button color='teal.9' uppercase >Clear</Button>
            </Flex>
        </>
    )
}
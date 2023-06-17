import React from 'react';
import "./Filters.css";
import { Flex, Button, Menu, Checkbox, Text } from '@mantine/core';
import { IconChevronDown, IconSortAscendingLetters, IconSortDescendingLetters } from '@tabler/icons-react';

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
                    <Text fz="lg" span fw={700} inherit>Filter By: </Text>
                    <Checkbox label="Smaller than Lithuania" size="md" />
                    <Checkbox label="In Oceania" size="md" />
                    <Text fz="lg" span fw={700} inherit c="blue">Reset All</Text>
                </Flex>
                <Menu trigger="hover" openDelay={100} closeDelay={400} shadow="md" width={200}>
                    <Menu.Target>
                        <Button color='teal.9' uppercase rightIcon={<IconChevronDown size="1.2rem" stroke={2} />} pr={12}>Sort By</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label size="1.5rem">Name</Menu.Label>
                        <Menu.Item icon={<IconSortAscendingLetters size="1.5rem" stroke={2} />} >
                            Ascending
                        </Menu.Item>
                        <Menu.Item icon={<IconSortDescendingLetters size="1.5rem" stroke={2} />} >
                            Descending
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Flex>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import { CountryPaper } from "../CountryPaper/CountryPaper";
import { bringCountries } from "../../services/apiCalls";
import { Flex, Button, Menu, Checkbox, Text } from '@mantine/core';
import { IconChevronDown, IconSortAscendingLetters, IconSortDescendingLetters } from '@tabler/icons-react';

import "./CountryList.css";

export const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        if (countries.length === 0) {
            bringCountries()
                .then((response) => {
                    setCountries(response.data);
                })
                .catch((error) => console.log(error));
        }
    }, [countries]);

    const sortCountries = (order) => {
        console.log(order);
        const sorted = [...countries];
        sorted.sort((a, b) => {
            if (order === "ascending") {
                return a.name.common.localeCompare(b.name.common);
            } else if (order === "descending") {
                return b.name.common.localeCompare(a.name.common);
            }
            return 0;
        });
        setCountries(sorted);
        setSortOrder(order);
    };

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
                        <Button color='teal.9' uppercase rightIcon={<IconChevronDown size="1.2rem" stroke={2} />} pr={12}>Sort By {(sortOrder === "ascending") ? " Ascending" : (sortOrder === "descending") ? " Descending" : ""}</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label size="1.5rem">Name</Menu.Label>
                        <Menu.Item icon={<IconSortAscendingLetters size="1.5rem" stroke={2} />} onClick={() => sortCountries("ascending")} >
                            Ascending
                        </Menu.Item>
                        <Menu.Item icon={<IconSortDescendingLetters size="1.5rem" stroke={2} />} onClick={() => sortCountries("descending")} >
                            Descending
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Flex>
            <div>
                {countries.length > 0 &&
                    countries.map((country) => {
                        return (
                            <div key={country.name.official}>
                                <CountryPaper
                                    flag={country.flags.png}
                                    alt={country.flags.alt}
                                    countryName={country.name.common}
                                    region={country.region}
                                    area={country.area}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
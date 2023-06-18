import React, { useState, useEffect } from 'react';
import { CountryPaper } from "../CountryPaper/CountryPaper";
import { bringCountries } from "../../services/apiCalls";
import { Flex, Button, Menu, Checkbox, Text, Anchor, Center, Pagination } from '@mantine/core';
import { IconChevronDown, IconSortAscendingLetters, IconSortDescendingLetters } from '@tabler/icons-react';

import "./CountryList.css";

export const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [smallerThanLithuania, setSmallerThanLithuania] = useState(false);
    const [inOceania, setInOceania] = useState(false);
    const [activePage, setPage] = useState(1);
    const itemsPerPage = 10;

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

    const resetFilters = () => {
        setSmallerThanLithuania(false);
        setInOceania(false);
    }

    const filteredCountries = countries
        .filter((country) =>
            smallerThanLithuania
                ? country.area < countries.find((c) => c.name.common === "Lithuania").area
                : true
        )
        .filter((country) =>
            inOceania
                ? country.region === countries.find((c) => c.region === "Oceania").region
                : true
        );

    const totalItems = filteredCountries.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesToRender = filteredCountries.slice(startIndex, endIndex);

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
                    <Checkbox
                        label="Smaller than Lithuania"
                        size="md"
                        checked={smallerThanLithuania}
                        onChange={(event) => setSmallerThanLithuania(event.currentTarget.checked)} />
                    <Checkbox
                        label="In Oceania"
                        size="md"
                        checked={inOceania}
                        onChange={(event) => setInOceania(event.currentTarget.checked)} />
                    {(smallerThanLithuania || inOceania) && (
                        <Anchor fz="lg" span fw={700} inherit c="blue" onClick={resetFilters}>
                            Reset All
                        </Anchor>
                    )}
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
                {countriesToRender.map((country) => (
                    <div key={country.name.official}>
                        <CountryPaper
                            flag={country.flags.png}
                            alt={country.flags.alt}
                            countryName={country.name.common}
                            region={country.region}
                            area={country.area}
                        />
                    </div>
                ))}
            </div>
            <Center maw={385} h={60} mx="auto">
                <Pagination value={activePage} onChange={setPage} total={totalPages} />
            </Center>
        </>
    )
}
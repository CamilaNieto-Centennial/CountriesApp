import React from 'react';
import { createStyles, UnstyledButton, Text, Center, useMantineColorScheme, Group, rem, } from '@mantine/core';
import { upperFirst, useMediaQuery  } from '@mantine/hooks';
import { IconMoon, IconSun } from '@tabler/icons-react';

import "./ThemeSwitcher.css";

const useStyles = createStyles((theme) => ({
    control: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 1000,
        paddingLeft: theme.spacing.sm,
        paddingRight: rem(4),
        width: rem(136),
        height: rem(36),
    },

    iconWrapper: {
        height: rem(28),
        width: rem(28),
        borderRadius: rem(28),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
        color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
    },

    value: {
        lineHeight: 1,
    },
}));

export const ThemeSwitcher = () => {
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const Icon = colorScheme === 'dark' ? IconSun : IconMoon;
    const largeScreen = useMediaQuery('(min-width: 26em)');

    return (
        <Group position="center" mt={largeScreen ? 'xl' : '0'} mb={largeScreen ? 'xl' : 'xl'}>
            <UnstyledButton
                aria-label="Toggle theme"
                className={classes.control}
                onClick={() => toggleColorScheme()}
            >
                <Text size="sm" className={classes.value}>
                    {upperFirst(colorScheme === 'light' ? 'dark' : 'light')} theme
                </Text>

                <Center className={classes.iconWrapper}>
                    <Icon size="1.05rem" stroke={1.5} />
                </Center>
            </UnstyledButton>
        </Group>
    );
}
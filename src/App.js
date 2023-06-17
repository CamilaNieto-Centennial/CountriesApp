import './App.css';
import { MantineProvider, Container , Flex, Title, Text, Button, Paper } from '@mantine/core';

function App() {
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
      <Flex
        mih={50}
        gap="md"
        px = "0em"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        mb="xs"
      >
        <Flex
          gap="md"
          wrap="wrap"
        >
          {/*<Button>All Data</Button>*/}
          <Button color='blue.9'>Smaller than Lithuania</Button>
          <Button color='blue.9'>In Oceania</Button>
        </Flex>
        <Button color='teal.9' uppercase >Submit</Button>
      </Flex>
      <Paper shadow="sm" radius="sm" p="xs" mb="xs" withBorder>
          <Title order={3}>Country Name</Title>
          <Text>Region</Text>
          <Text>Area</Text>
      </Paper>
      <Paper shadow="sm" radius="sm" p="xs" withBorder>
          <Title order={3}>Country Name</Title>
          <Text>Region</Text>
          <Text>Area</Text>
      </Paper>
    </Container>
    </MantineProvider>
  );
}

export default App;

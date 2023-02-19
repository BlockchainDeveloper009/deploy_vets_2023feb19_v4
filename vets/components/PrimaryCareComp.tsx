
import { Box, Button, Loader, MantineProvider, Paper, ScrollArea, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Dentistry','Parasite Control (Fleas, Ticks & Heartworms)','Microchipping', 'Wellness & Preventive Care']
const GridDesc= [
    'Annual dental exams and cleanings are recommended to protect your pet from many health problems and help them maintain a healthy and clean mouth.',
    'Parasites such as fleas and ticks can be very damaging to your pet’s health. Preventive measures should be taken year-round to inhibit potential outbreaks.',
'Microchip identification is the most reliable way to reunite lost pets with their owners.',
'Annual wellness exams evaluate your pets overall health, detect problems before they become serious, and keep them on track to live a long, healthy life.',
''
]
const GridPreventiveCareImages= [ 
    "/images/Dentistry1.PNG", 
    "/images/Fleas1.PNG", 
    "/images/1.PNG"]
function PrimaryCareComp() {
    const router = useRouter();
    const viewport = useRef<HTMLDivElement>(null);
    const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="App">
        
        <Grid justify="Center">
        <ScrollArea style={{ width: 1000, height: 5000 }} viewportRef={viewport}>
        {/* ... content */}
      
            <Grid.Col span={4} styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src={GridPreventiveCareImages[0]}
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{GridHeaders[0]}</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {GridDesc[0]}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push('/Dentistry')}>
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>


           

            <Grid.Col span={4} styles={{maxWdith: 150}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src={GridPreventiveCareImages[1]}
                                height={300}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{GridHeaders[1]}</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                {GridDesc[1]}
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/Dentistry')}>
                            
                                    Learn More --
                            </Button>
                           
                        </Card>
            </Grid.Col>
           
            <Grid.Col span={4} styles={{maxWdith: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="/images/vaccine1.PNG"
                                height={200}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{GridHeaders[2]}</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                {GridDesc[2]}
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/Dentistry')}>
                            
                                    Learn More --
                            </Button>
                           
                        </Card>
            </Grid.Col>
            </ScrollArea>
        </Grid>
        
    </div>      
  );
} 

export default PrimaryCareComp;

import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Button,
  SimpleGrid,
  Title,
  Anchor,
  ActionIcon,
  Flex,
  Box,
} from '@mantine/core';
//import TableExample from './ManageWillsTable';
//import ChipsExample from './ChipsExample';

// import { 
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Routes 
// } from "react-router-dom";
import Link from "next/link";
import ChipsExample from './ChipsExample';
import ApplicationContainer from '../pages/ApplicationContainer';
import { useRouter } from 'next/navigation';
import GeneralFooter from './GeneralFooter';
import { DoubleHeaderColored } from './HeaderRibbon';
import Cards from './Cards';
import AdSellerCarousel from './AdSellerCarousel';

// import Cards from './Cards';

// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import WagmiWillsFormEdit from './WillsFormEdit';
// import WillsFormEdit from './WillsFormEdit';

const Applicationfooter = "2022 all copyright resverved to Inherit Blocks"
function AppShellLinkExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  return (
    
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg:175  }}>
          <Title order={3}>Our Services</Title>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
            <div style={{display: "flex", flexDirection: "column", padding:15 }}>
           
                   <Link href="/PrimaryCare"  style={{padding:5 }} >
                      Primary Care
                    </Link>
                   
                    <Link href="/Diagnostics"  style={{padding:5 }} >
                    Diagnostics
                    </Link>
                    <Link href="/SurgeryServices"  style={{padding:5 }} >
                    Surgery Services
                    </Link>
                    <Link href="/TravelCertificates"  style={{padding:5 }} >
                    Travel Certificates
                    </Link>
                    <Link href="/HospitalityServices"  style={{padding:5 }} >
                    Hospitality Services
                    </Link>
                </div>    
                    
                <div style={{display: "flex", flexDirection: "column", padding:15 }}>
               
                    <Link href="/CardsPage">
                    Cards
                    </Link>
                    <Link href="/AdvancedCare">
                      Advanced Care
                    </Link>
                    <Link href="/ApplicationContainer">
                      Canine and Feline Diabetes
                    </Link>
                    <Link href="/ApplicationContainer">
                      Pet Boarding
                    </Link>
                    <Link href="/PetCounseling">
                      Pet Counseling
                    </Link>
                    <Link href="/PreventiveCare">
                      Preventive Care
                    </Link>
                     <Link href="/PreventiveCareClinic">
                      Preventive Care Clinic
                    </Link>
                    <Anchor component="button" type="button">
                      Anchor as button
                    </Anchor>
                    <Anchor href="https://mantine.dev/" target="_blank">
                      Mantine docs
                    </Anchor>
              </div>

          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 150 }}>
            <Text>Application sidebar</Text>
            
           
           <Link href="/Helpfullinks">
             Helpful Links
           </Link>
           <Link href="/Faq">
             FAQ
           </Link>
           <Link href="/ClinicPolicy">
           Clinic Policy
           </Link>
           <Text>  </Text>
           <Text></Text>
           <Text></Text>
           <label>Timings:</label>
          <Text>
            
            Mon-Fri : 8am - 6pm
            Sat     : 8am - 5pm
            Sun: Holiday
          </Text>
           
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Text>Contact</Text>
          <Text>Location</Text>
          <Text>Hours & Info</Text>
          <GeneralFooter/>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', justifyContent:"space-around", alignItems: 'stretch', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

           
          
            <SimpleGrid cols={7} sx={{ color: 'red', fontSize: 18, lineHeight: 1.4, padding:5 }}>
            
          <div><Text><Link href="/" >Amigos Vets</Link></Text></div>
          <div><Text><Link href="/AboutUs">AboutUs</Link></Text></div>
          <div><Text><Link href="/Team">Our Team</Link></Text></div>
          <div><Text><Link href="/ContactUs">ContactUs</Link></Text></div>
          {/* <ActionIcon component="a" href="https://goo.gl/maps/z4JxxUxyLbo43riG8" aria-label="Settings" >
          Anchor element
        </ActionIcon> */}
          <div><Text><Link href="https://goo.gl/maps/z4JxxUxyLbo43riG8" target={'_blank'} >Get Directions</Link></Text></div>
          <div><Button styles = {(theme) => ({
            root: { 
                border: 0,
                height: 50,
                paddingRight: 30,
                alignItems:'center',
                
                '&:hover': {
                    paddingLeft:40 
                },
                
            }
          })} variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={()=> router.push('/BookAppointment')}>Book Appointment</Button></div>

          <div><Button styles = {(theme) => ({
            root: {
                border: 0,
                height: 50,
                paddingRight: 60,
                '&:hover': {
                    paddingLeft:40 
                }
            }
          })} variant="gradient" gradient={{ from: 'orange', to: 'blue' }} onClick={()=> router.push('/OrderMedicine')}>Order Medicine</Button></div>
        </SimpleGrid>
        </div>
        </Header>

        
      }
      // header = {DoubleHeaderColored()}
    
    >
      {/* <Box>
      <Flex> <Cards></Cards></Flex>
      </Box> */}
    
    <AdSellerCarousel/>
    </AppShell>
   
    
  );
  
}

export default AppShellLinkExample;

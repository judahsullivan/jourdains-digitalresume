import { Container, Box, chakra, Text, Icon, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdOutlinePersonPin, MdPermDeviceInformation, MdOutlineFlashlightOn } from 'react-icons/md';
import { SiMinds } from 'react-icons/si';
import { IconType } from 'react-icons';
import Header from '@/components/header';
import Paragraph from '@/components/paragraph';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Problem Solver',
    content:
      'I always try to take a new approach every problem. I am quick with using locating resources and gathering information. While also able to think quickly and creativily under pressure ',
    icon: MdOutlineFlashlightOn
  },
  {
    heading: 'Innovative',
    content: `As the market continually change, I always seek to push myself bhy continually learning and keeping up with what is booming.`,
    icon: SiMinds
  },
  {
    heading: 'Self-Starter',
    content:
      'Highly ambitious, and a quick thinker, that has the ability to quickly learn , and retain information.',
    icon: MdPermDeviceInformation
  },
  {
    heading: 'Customer Oriented',
    content: `Detail-oriented professional with over four years of experience in a busy customer-service environment`,
    icon: MdOutlinePersonPin
  }
];

const Abouts = () => {
  return (
    <Container id='about' bg={'#c9e4ca'} mt={2} borderRadius={'lg'} maxW="6xl" p={{ base: 5, md: 10 }}>
       <Header underlineColor={''} textAlign={'center'} mt={0} cursor="pointer" maxW="100%">
                Here is a Little Bit About Me!
        </Header> 
        <Box maxW={'100%'} letterSpacing={'tight'}>
        <Paragraph>I started my journey Customer/Consumer services journey at 16. From there I went on to work in multiple call centers and CSR positions . In my spare time I enjoy creating from art to a project series of childrens books, spending time with my family when able, binging the latest Netflix series, and going on nature walks when the weather permits. </Paragraph>
        </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <Icon as={feature.icon} w={10} h={10} color="blue.400" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl">
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md">{feature.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Abouts;
import * as React from 'react';
import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import Header from '@/components/header'; 
import { MotionBox, MotionFlex } from '@/shared/motion';
import Abouts from './about';
import SectionLayout from '@/shared/sectionLayout';
const ANIMATION_DURATION = 0.5;

const IntroSection = () => {
  const color = 'blue.400';

  return (
    <Container id='' maxW="5xl" mt={5}  p={{ base: 5, md: 12 }} >
      <Flex direction={['column', 'column', 'row']} bg={'#C9E4CA'} borderRadius={'xl'} maxW={'100%'} p={5}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor={color}
              src={'/assets/images/main.jpeg'}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header underlineColor={color} mt={0} cursor="pointer" width="max-content">
                Jourdain Thomas
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
             Jourdain 
            </Box>{' '}
            and I&apos;m a{' '}
            <Box as="span" whiteSpace="nowrap">
                Customer Specialist
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
            </Box>
            from{' '}
            <Box as="span" whiteSpace="nowrap">
                Grand Rapids
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            Welcome to my Portfolio, which is a Digital Journey of my Professional Career.
          </Box>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default IntroSection;
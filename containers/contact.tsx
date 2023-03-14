import React, { useState } from 'react';
import {
  Container,
  Wrap,
  Box,
  FormControl,
  FormLabel,
  Flex,
  Button,
  Input,
  Textarea,
  useToast,
  InputLeftElement,
  VStack,
  WrapItem,
  InputGroup,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import { init } from '@emailjs/browser'
import emailjs from '@emailjs/browser'
import Header from '@/components/header';
import ErrorMessage from '@/components/errormessage';


const Contact = () => {


  init("DOGi8s-e1JwuRXID-");

  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs.send("service_b19pekv", "template_handfvh", {
      from_name: name,
      from_email: email,
      message: message,
    }).then(() => {
      clearInput();

      toast({
        title: 'Email sent.',
        description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });

    }, (error) => {
      clearInput();

      toast({
        title: 'Email not sent.',
        description: error.text,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    });
  }
  const maintitle = 'Like to get in Touch? '
  const subtitle = 'Just fill out the form I will get back to you as soon as possible!'
  return (
    <Container id='contact' maxW="full" mt={0} centerContent overflow="hidden">
      <VStack >
        <Header underlineColor=''>
          {maintitle}
        </Header>
        <Text
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          {subtitle}
        </Text>
      </VStack>
      <Flex>
        <Box
         borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box bg="#c9e4ca" borderRadius="lg">
                  <Box m={8}  color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}
                        <FormControl isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input
                              type="text"
                              bg={'#87BBA2'}
                              size="md"
                              value={name}
                              placeholder='Name'
                              onChange={event => setName(event.currentTarget.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input
                              type="email"
                              id='email'
                              size="md"
                              value={email}
                              bg={'#87BBA2'}
                              placeholder='Email'
                              onChange={event => setEmail(event.currentTarget.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                              bg={'#87BBA2'}
                            placeholder="Message"
                          />
                        </FormControl>
                        <Button
                          aria-label='send email'
                          mt={2}
                          variant="solid"
                         bg={'#364A58'}
                          type='submit'
                          _hover={{}}
                          isLoading={isLoading}
                          loadingText={'Submitting'}
                        >
                          Send Message
                        </Button>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container >
  )
}

export default Contact;
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  MenuItem,
  Stack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import ResumeButton from './reumebutton';

const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Contact', path: '#contact' }
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={' whiteAlpha.700'}  position={'fixed'} p={2} zIndex={99} w={'full'} borderBottomRadius={'md'} css={{backdropFilter: 'blur(15px'}}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Heading fontSize={'lg'}  fontWeight={'hairline'} letterSpacing={'tighter'}>
          <Link href='#'>
         Jourdain Thomas 
          </Link>
          </Heading>
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }} alignItems="center">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

         </HStack>
        </HStack>
<Flex mr={2}>
  <IconButton
         mr={2} 
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: 'inherit', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <ResumeButton />
    </Flex>  
     </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={{ base: 'inherit', md: 'none' }} >
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('blue.500', 'blue.200')
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};
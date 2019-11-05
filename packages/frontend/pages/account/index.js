import React from 'react';
import { Flex, Box, Link } from '@chakra-ui/core';
import SignupForm from '../../components/forms/signup-form';
import WaitingForYou from '../../components/illustrations/waiting-for-you';
import Header from '../../components/header';

// todo: if user logged in, we should redirect him/her to ucurtma.com/account/profile link.
function Account() {
  return (
    <>
      <Header />
      <Box
        width={{
          base: 'containers.base',
          sm: 'containers.sm',
          md: 'containers.md',
          lg: 'containers.lg',
          xl: 'containers.lg',
        }}
        mx="auto"
        mt={12}
        p={4}
      >
        <Flex
          justify="center"
          align="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box w="100%" bg="white" borderRadius="md" boxShadow="cardLight">
            <Box py={8} px={10}>
              <SignupForm withTitle />
            </Box>
            <Box>
              <Flex align="center" pl={10} height="5rem" background="#FBFBFB">
                <Box>
                  Have an account?
                  <Link pl={2} color="linkBlue" href="#">
                    Log in.
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box w="100%" pl={{ lg: 12, sm: 0 }} mt={{ lg: 0, sm: 4 }}>
            <WaitingForYou />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Account;

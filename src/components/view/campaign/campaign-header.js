import React from 'react';
import {
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Image,
  Divider,
  PseudoBox,
  Button,
  Icon,
} from '@chakra-ui/core';
import Skeleton from 'react-loading-skeleton';
import { Award } from 'react-feather';

function CampaignHeader({ data, loading, onClickDonate }) {
  return (
    <>
      <Flex
        mt={{ base: 2, md: 8 }}
        mb={{ base: 4, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        width="full"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex mx={{ base: 4, lg: 0 }} alignItems="flex-end" flexShrink="0">
          {loading ? (
            <Skeleton width={72} height={72} circle />
          ) : (
            <Avatar
              size="lg"
              src={data.campaign?.student?.profilePhoto}
              name={data.campaign?.student?.name}
            />
          )}
          <Box ml={4}>
            <Heading size="sm" color="gray.600">
              {loading ? (
                <Skeleton width={200} />
              ) : (
                data.campaign?.student?.name
              )}
            </Heading>
            <Text color="gray.500">
              {loading ? (
                <Skeleton width={260} />
              ) : (
                <>
                  {data.campaign?.student?.school}
                  {data.campaign?.student?.department !== '-' &&
                    ` / ${data.campaign?.student?.department}`}
                </>
              )}
            </Text>
          </Box>
        </Flex>
        <Flex
          width={{ base: 'full', md: 'unset' }}
          justify={{ base: 'space-around', md: 'inherit' }}
          mt={{ base: 8, md: 0 }}
          borderY={{ base: '1px solid', md: 0 }}
          borderColor="gray.300"
          borderTopColor="gray.300"
          p={{ base: 4, lg: 0 }}
          bg={{ base: 'gray.100', md: 'inherit' }}
        >
          <Box pr={6} borderRight={{ md: '1px solid #CBD5E0' }}>
            <Heading size="sm" color="gray.400">
              {loading ? <Skeleton width={140} /> : 'Destekçi Sayısı'}
            </Heading>
            <Text
              fontSize="1.5rem"
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight={500}
            >
              {loading ? (
                <Skeleton width={70} />
              ) : (
                data.campaign?.supporterCount
              )}
            </Text>
          </Box>
          <Box pl={6}>
            <Heading size="sm" color="gray.400">
              {loading ? <Skeleton width={140} /> : 'Toplam Destek'}
            </Heading>
            <Box
              fontSize="1.5rem"
              fontWeight={500}
              textAlign={{ base: 'center', md: 'left' }}
              color="#1E284C"
            >
              {loading ? (
                <Skeleton width={70} />
              ) : (
                <Flex align="center">
                  <Image
                    maxW="14px"
                    width="full"
                    height="full"
                    src={`${process.env.PUBLIC_URL}/images/bilira-icon.svg`}
                    mr={1}
                  />
                  {Math.floor(data.campaign?.totalFunds)}
                </Flex>
              )}
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Divider my={4} display={{ base: 'none', md: 'block' }} />
      <Flex justify="space-between" align="center" mx={{ base: 4, lg: 0 }}>
        {loading ? (
          <Box flex={1}>
            <Skeleton height={72} />
          </Box>
        ) : (
          <>
            <Heading
              width="full"
              color="gray.700"
              fontSize={{ base: '2xl', lg: '3xl' }}
            >
              {data.campaign?.campaignTitle}
            </Heading>
            <PseudoBox
              as={Button}
              variant="solid"
              bg="linkGreen"
              h={16}
              w="full"
              maxW="416px"
              justifyContent="space-between"
              boxShadow="0 0 2px rgba(124,124,124,0.16)"
              onClick={() => onClickDonate()}
              _hover={{ bg: 'green.100' }}
              ml={4}
            >
              Destek Ol
              <Icon as={Award} size="28px" />
            </PseudoBox>
          </>
        )}
      </Flex>
    </>
  );
}

export default CampaignHeader;

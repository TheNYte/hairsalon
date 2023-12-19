import React, {useEffect} from 'react';

import {Box, Flex} from '@chakra-ui/react';
import NavigationMenu from '#root/components/NavigationMenu';
import ContentSectionRight from '#root/components/ContentSectionRight';
import HomeScreen from '#root/components/HomeScreen';
import ContentSectionLeft from '#root/components/ContentSectionLeft';

export default function Page() {
  return (
    <Flex w="calc(100vw - 8px)" h="100vh" display="flex">
      <Box id={'home'} h={'100%'} w={'100%'}>
        <NavigationMenu />
        <Box position={'relative'} top={'50px'}>
          <Box h={'100%'} w={'100%'}>
            <HomeScreen />
          </Box>
          <Box h={'100%'} w={'100%'}>
            <ContentSectionRight id={'salon'} />
          </Box>
          <Box h={'100%'} w={'100%'}>
            <ContentSectionLeft id={'pedicure'} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

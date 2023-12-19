import React, {useEffect, useState} from 'react';
import {Box, Button} from '@chakra-ui/react';

const NavigationMenu = () => {
  const [activeNavItem, setActiveNavItem] = useState('#home');

  useEffect(() => {
    const handleHashChange = (event) => {
      // Prevent the default behavior of anchor links
      event.preventDefault();

      const {hash} = event.target;
      let targetElement = null;

      if (hash) {
        targetElement = document?.querySelector(hash);
      }

      if (targetElement) {
        targetElement.scrollIntoView({behavior: 'smooth'});
      }
    };

    // Add event listener to each anchor link
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleHashChange);
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleHashChange);
      });
    };
  }, []);

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      bg="white"
      boxShadow="md"
      zIndex="1000"
      h={'50px'}
      w={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'15px'}
      bgColor={'lightgrey'}
    >
      {/* Your navigation links go here */}
      <Button
        as="a"
        href="#home"
        variant="ghost"
        onClick={() => setActiveNavItem('#home')}
        isActive={activeNavItem === '#home'}
      >
        Domov
      </Button>
      <Button
        as="a"
        href="#salon"
        variant="ghost"
        onClick={() => setActiveNavItem('#salon')}
        isActive={activeNavItem === '#salon'}
      >
        Salón
      </Button>
      <Button
        as="a"
        href="#pedicure"
        variant="ghost"
        onClick={() => setActiveNavItem('#pedicure')}
        isActive={activeNavItem === '#pedicure'}
      >
        Pedikúra
      </Button>
    </Box>
  );
};

export default NavigationMenu;

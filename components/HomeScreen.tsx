import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  List,
  ListItem,
  Heading,
} from '@chakra-ui/react';
const ContentSection = () => {
  return (
    <Flex
      justify="flex-end"
      h={'calc(100vh - 50px)'}
      w={'100%'}
      align="center"
      overflow={'hidden'}
      p={8}
      bgImage={'/salon_tools.png'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
    >
      <HStack gap={'50px'} h={'75%'} overflow={'hidden'}>
        <Flex flexDirection={'row'} justifyContent={'center'}>
          <Image w={'150px'} src={'/java_coffe.svg'} />
          <Text
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            fontSize={50}
          >
            Charisma Salón & Coffe
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default ContentSection;

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
const ContentSectionRight = (props) => {
  const {id} = props;
  return (
    <Flex
      id={id}
      justify="center"
      h={'calc(100vh - 50px)'}
      w={'100%'}
      align="center"
      overflow={'hidden'}
      p={8}
    >
      <HStack gap={'50px'} h={'75%'} overflow={'hidden'}>
        <Image
          w={'80%'}
          h={'100%'}
          aspectRatio={'2:1'}
          src="/img.png"
          alt="Big Picture"
          mb="4"
        />
        <List w={'20%'}>
          <ListItem>
            <Heading>Luxury</Heading>
            <Heading>Luxury</Heading>
            <Heading>Luxury</Heading>
            <Heading>Luxury</Heading>
          </ListItem>
        </List>
      </HStack>
    </Flex>
  );
};

export default ContentSectionRight;

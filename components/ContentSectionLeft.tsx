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
const ContentSection = (props) => {
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
      <Flex
        flexDirection={{base: 'column', sm: 'row'}}
        gap={'50px'}
        h={'75%'}
        overflow={'hidden'}
      >
        <List w={{base: '20%', sm: '100%'}}>
          <ListItem display={'flex'} flexDirection={'column'}>
            <Heading>Luxury</Heading>
            <Heading>Luxury</Heading>
            <Heading>Luxury</Heading>
            <Heading>Luxury</Heading>
          </ListItem>
        </List>
        <Image w={'80%'} src="/img.png" alt="Big Picture" mb="4" />
      </Flex>
    </Flex>
  );
};

export default ContentSection;

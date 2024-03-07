import { Box, Button, Center, ChakraProvider, Divider, Flex, Grid, Heading, IconButton, Image, Link, Stack, Text, theme, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaHeart, FaShoppingCart, FaRegCompass, FaRegUser } from "react-icons/fa";
import React from "react";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const colorScheme = "silver";

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} minH="100vh">
        <Flex direction="column">
          {/* Header */}
          <Box as="header" boxShadow="sm">
            <Flex align="center" p={4} justify="space-between">
              <Heading size="lg" letterSpacing="tighter">
                LuxeDecor
              </Heading>
              <Stack direction="row" spacing={4}>
                <IconButton aria-label="Wishlist" icon={<FaHeart />} />
                <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} />
                <IconButton aria-label="User Account" icon={<FaRegUser />} />
              </Stack>
            </Flex>
          </Box>

          {/* Hero Section */}
          <Box as="section" py={10} textAlign="center">
            <Heading size="2xl" mb={4}>
              Elevate Your Space
            </Heading>
            <Text fontSize="lg" mb={6}>
              Discover the essence of luxury interior design.
            </Text>
            <Button colorScheme={colorScheme} leftIcon={<FaRegCompass />} size="lg">
              Explore Now
            </Button>
          </Box>

          {/* Categories Section */}
          <Box as="section" py={10}>
            <Heading size="xl" mb={6} textAlign="center">
              Shop by Category
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <CategoryCard title="Living Room" />
              <CategoryCard title="Bedroom" />
              <CategoryCard title="Kitchen & Dining" />
            </Grid>
          </Box>

          {/* Footer */}
          <Divider />
          <Box as="footer" py={6}>
            <Center>
              <Text fontSize="sm">&copy; {new Date().getFullYear()} LuxeDecor. All rights reserved.</Text>
            </Center>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const CategoryCard = ({ title }) => (
  <VStack bg={useColorModeValue("gray.100", "gray.700")} p={5} borderRadius="md" boxShadow="md" align="center" spacing={4}>
    <Image borderRadius="full" boxSize="100px" src={`https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0J0aXRsZS50b0xvd2VyQ2FzZSUyOCUyOSU3RCUyMGZ1cm5pdHVyZXxlbnwwfHx8fDE3MDk3NzE5Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`${title} Category`} />
    <Text fontSize="lg" fontWeight="semibold">
      {title}
    </Text>
    <Button variant="outline" colorScheme="silver">
      Shop Now
    </Button>
  </VStack>
);

export default Index;

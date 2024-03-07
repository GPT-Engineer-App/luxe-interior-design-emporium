import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" bg="blue.500" padding="4" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white">
          Home
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/categories" color="white">
          Categories
        </Link>
        <Link as={RouterLink} to="/terms" color="white" marginLeft="4">
          Terms & Conditions
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;

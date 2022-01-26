import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { MenuItem } from '../../molecules/MenuItem/MenuItem';

export const TopBar = () => {
	return (
		<Flex w='100%' p='8px 16px'>
			{/* Logo */}
			<Text
				fontSize='36px'
				fontWeight='bold'
				lineHeight='42px'
				color='#1F79BA'
				flexGrow={1}
			>
				SuperApp
			</Text>

			{/* Menu */}
			<HStack spacing='16px'>
				<MenuItem href='/blog'>Blog</MenuItem>
				<MenuItem href='/Product'>Product</MenuItem>
				<MenuItem href='/Pricing'>Pricing</MenuItem>
			</HStack>

			{/* Button */}
			<Flex marginLeft='82px'>
				<Button variant='solid' colorScheme='blue'>
					Get Started
				</Button>
			</Flex>
		</Flex>
	);
};

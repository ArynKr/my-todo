import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export const Hero = () => {
	return (
		<Flex
			w='100%'
			background='linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%, #4BC0C8 98.58%);'
		>
			<Container py="64px">
				<Heading>
					Increase Your Productivity
					<br />
					Make Yout App In Minutes
				</Heading>
				<Text mt='16px' fontSize='26px' color='gray.600'>
					Your FullStack React App
				</Text>
			</Container>
		</Flex>
	);
};

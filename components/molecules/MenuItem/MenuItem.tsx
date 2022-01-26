import { Text } from '@chakra-ui/react';
import Link from 'next/link';

type MenuItemProps = {
	children: string;
	href: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children, href }) => (
	<Text color='gray.600' fontSize='18px'>
		<Link href={href}>{children}</Link>
	</Text>
);

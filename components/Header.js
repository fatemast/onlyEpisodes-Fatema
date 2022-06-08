import { MoonIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';



import { LightBulbIcon } from '../styles/icons';

export default function Header() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.800');
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box position="fixed" w="100%" zIndex={1} backgroundColor={bgColor}>
            <Container
                maxW="xl"
                py={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
                    OnlyEpisodes
                </Button>
                <Box>
                  
                    <IconButton
                        ml={1}
                        onClick={toggleColorMode}
                        variant="ghost"
                        aria-label="Toggle theme"
                        icon={themeIcon}
                    />
                </Box>
            </Container>
        </Box>
    );
}



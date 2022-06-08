import { RepeatIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Container,
    Heading,
    Link,
    SimpleGrid,
    Skeleton,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';

import Card from '../components/Card';
import Header from '../components/Header';


import { transformedPosts } from '../lib/transformedPosts';


export default function Home() {
 




    const view = () => {

         window.open("https://youtu.be/ScMzIvxBSi4", '_blank', 'noopener,noreferrer');
        

    };

    return (
        <Box minHeight="100vh" display="flex" flexDir="column">
            <Header />
            <Container maxW="xl" mt="95px" flex={1}>
                <Box textAlign="center">
                    <Heading as="h1" size="4xl">
                        OnlyEpisodes
                    </Heading>
                    <Text fontSize="lg" fontWeight="semibold" mt={2}>
                        Easily view and watch episodes from{' '}
                        <Link href="https://youtube.com" isExternal>
                            Youtube
                        </Link>
                    </Text>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
                    {transformedPosts.map((post) => (
                        <Card key={post.id} post={post} onImageClick={view} />
                    ))}
                </SimpleGrid>
            </Container>

            <Container as="footer" maxW="xl" textAlign="center" py={10}>
                <Text>
                    Made with{' '}
                    <span role="img" aria-label="heart emoji">
                        ❤️{' '}
                    </span> <br/>{' '}
                    by{' '}
                    <Link href="https://www.linkedin.com/in/fatemaelwy/" isExternal>
                        Fatema Elwy
                    </Link>
                </Text>
            </Container>
        </Box>
    );
}

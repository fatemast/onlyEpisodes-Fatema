import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Img, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { PostPropTypes } from '../lib/PropTypeValues';

const MotionImg = motion.custom(Img);

export default function Card({ post, onImageClick }) {
    const cardColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box backgroundColor={cardColor} borderRadius={['sm', null, 'md']} overflow="hidden">
            <Box
                onClick={() => onImageClick()}
                cursor="pointer"
                h="400px"
                position="relative"
                overflow="hidden">

                <MotionImg
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    href="https://youtu.be/ScMzIvxBSi4"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD09PTb29v5+fmOjo7FxcXg4ODj4+NCQkLt7e2EhIS9vb2rq6vx8fEhISF1dXWlpaVYWFhLS0tlZWVqamoNDQ20tLRgYGDU1NRSUlK4uLg2NjacnJwTExOHh4d6eno9PT0pKSnMzMwaGhpHR0eVlZWfn58eHh4xMTEmJiYLlZ5yAAAMNklEQVR4nN1d6ULyOhCVtuwWytKyiCwqLrz/A14LKltOMslM0n73/BVJhiSzLw8PvpEMFo/pxyYf77+GxRHrw2o/zpujtBVHiff1faIXzzZZt6HFepI1H9uDqrfqgMUsm6z1xF1guNw+xVVv2QLtdF6Qibs4zjxtV711AqLW1oG4M5X9VlQ1CTr00imHvB9MZ72qCQF4nAuQd0Qxf6yamHssMinyfrCtFeeJ0p0wfSW6aV2ESHvz5oG+EkW/UzVx32hLMBeMadWXdTH2Sl+JyWuV9IlxTy3mi4ro6+RB6DvSWMVdjfrB6CuRBVd1RkHpKzEKSt/CYBN5waoVjL6EpVwzkAWyl1sV0VcihL4aSSugdph6tztaw0oJ/LYgPb/GsCJCjb5H+no7522tD6vuMu83+9ssn87Hy+6LO4lf3pwdj0776ebNVtzp3bLBpBcv0mY2dvHoNJ78ENi03si4OTM6CqN4tLV/200P9CWWVsT+2cImSFrvK7uvX4qLxp7Nu/mcPtmb553R0obEtbBx/GrxXHJnh2AvtTHHRO3GJ/KyqxnPCIhmdJeIoIKTUtfMJOy4V/JBfgisdsQHbb3hs5RvrNMnhjzeZdajSYm3VJK7ReknaVURqUFS1IpUYqkr0G7Ohr/QhrLOM3+deySkpdlaKuWK9n1ZNB2Kpca8qO/mFXY+/WAxQQtgcVTCW5B/gNcgSCrGFszGxNR/8KRjPkZnU+O18gM8wXyTHBW4jul796FitW2T4VE47SQx6RU+bDQEE8d7cVE3TNc/bCDaxBLG9l9pEISr0LHL2GBzWN8og70090GEHpEhkmB5p9r6b/Pp0MMwaDh23OZL+11hw0BnPGt3tbP5Kr094cmXR4Ce31jcLH3sJVyQy9vOelpJWGXigIHEIdVHpM0fqfIES2hVyYz2HdrLXjWBhlMkbS/RfUMdMuq0opqivemkjhdvhTV0WRJb87/rLgHxmnuHTpiZs4s0hko3wOZp0PiMjZvU3IC3GuUna87BoHBFmvOvOkvwEjrrXH8QGjZTBzZ6hkakaZW3GP+fUIhADBr7VWe64he8CrZ1KvZwrzn+pwX+XepX69HDm8USAx+hWKROENhXDJ02WKldhtw5GdhCQIc4gf9Rh5T5ewxsDxEz0jCubXvge6pmG/DQ63lHS+zQlqeqT2M1oU7KzDXwtVMdIlTY62JRqAA3rYh+D2BOUD3ZzAlQKCrMBPhqBXIBPAK6UO+5I/SZ17zaGl29O/8wfLN11GYuAe/erdRHBQafjgsv+svxRxBlFsWkbhkk+iUchf2PbROiXgke4vXHkEG5dvNczP6+oO89lSFBGcbXJjuyKtzCaMlF6KrwHqhC7PQqxtlDHMlNFl7bmS+eIx1QAb8MKM7AZxxDvbfpIVO/SgNyLl3yEKR0O/7695kT7z6lKpJ0F+o38iG+OS6pSCr89BlWRd7TM5tEnvyZ44pKP9jen+RAj+wciUIauquTG3j6tr4kB7qD279PgJivc0oJ8mV6kxyo5vr37yi1xNl5gb21X34kB3pmv2oj0nucE/N0+VReJEcE8t5/zwicsbt7Rp8x5kNyAHH3+87AM3R/NIacuDf5IA+IfBenvyKB6X6djOnvXWnJgTS3k5EI6GfEYggJ/tKSA8RpThIdGL+McBqlhEFYcgAD42QGg1RZRuYMrY5IVHKAmMuk/NsAcFoGxyNUaRwxF5Qc6hXWpcQD8n7IWI1KYaPRFJMcoIi3ZGmA0WwZq9EpbBykbA7wMmb4TxxGYEGhmM0B7IvSnw0sZM66VhQKSQ7w2Epmqo6LFpz0IEsKRSQHkPldWDjiUL/gTuG3esGXHCAskSDrkRVSs6dQQHIA+2GAtFJWyY8+px6BaXMAjrlAxiMrdO9GYePg6hc6AhDyiMxfVhM4Rwp5kgNcxhSlW7KElDOFHMkB8hA+0PVllRYyKHRXNUANxQawIKd6vj8QmzAAOEqO5KD8thxorLyEZx6F35LD6QapPd9jYBzzkoS4FH5LDgeVSi3y95DyailsDO1tDrUl//Wgvr28CkqRtpFzW1ag5ihD4EpU5oWFpdCan6ujLwXIR9EkEoej0NLNoJZ7iEJeLptUc1O7IiS7M9zWgsIvq1XVXlFEIa+UWYrCNytmo3ZWIAp5/RLInbMMeLFaVc1L/ZyhFIV2aZHq+NP6QZ1RxOOlUhTaSUR11tMBVN7ztDYhCi0tOLWGvQJ6KU/zFqFwZ5vZqNba9pDyqim0L8hVa95jwIEOLPuQT2Fmb+on6u6cOejHtmbZ+CiDh4qJi5cIJLU3kaXD8l7yKCzcgjXAEzVCN4rliWJR6KpsgNLCFGUHs3onMCjMnS8POKoWIp2ltjlTuGOEL4DTMEYxG5ZS40ohy9EOooQRaoPBEvn0pryX6PPiFmrBvk5gVIoTtXShcM4szojUJkSZjAFOl7OgPYUv7K4wQFiUzgrQB5UTB7JuTy9QegSs7pJjArbAYaaWFG4lGm6AzK5SewDHy/EJW1G4lJnmBCpnyseG+l6FobAQysQEIuHzyDBBkTpD+NIpFOufCSLAJ0seMFNGxyQqhZlcA1SQHLE9/hGwmr37crRpQl3JcWqgqORkpqB+H+4yn0QhKy3hFqjU/sdEAoVr7jyAQKFw/TSQhr9lTaD40F35NlIoXpIAuOUvCcCyInchvIOBQvmyElSW/2usoJoZZ11RT6GH0iDk+vq7KuDvztdU172x76MnGnhn5+pCVKruuhlM4dhLiR6qXTtHX6TrDxGFhafOmeiSnpdDv4Gr5xtQ6K2vJOooe3EHUR2w451SUiioot0AXcHLdAvkOnIM5yu0JCc3NhFomtjlI4NtXtw0t/uv89mSEAm763ECqKeC29O5pdDvjAFUxXyd9YTsnaGbh+/qB3N3Y5MQIT5zc2/ApxydtBc/mEAWvh7E3iaw84Jj04G/qKT/Vm+oP8325nOwKaRrg5py4d3IfwsmmI98J+l24IOF48qDOA7RJAw2zb0PS8DrXI8O1whwrtf93YvgDBD/A4/cARsFFopdw1+jmnEdNKB2EcpN47Ek9e2biJvmKnkA7H1Zn07lt4AdV9U5zvgQ69q/FGd5gmuHJ/7Wk9ngfqQT8B/4VvMS230Bz9yCpho+xDreU1xdhWspNP28Qw2Ro0MzkkpjbUPxUkN+ikdS6d6UZuRAyEl5FGh6b2jlt2b6xz8zG2Gr/UfdfIs69RPWDHEw+bE1pRI1Go+AzQRCWEQzg49XsicJzSbN56CRGLWxMjDLJwXMUJiGdAOCQNeygeLD1s7sqm4w4BnaTA+SY4g/2MwrJLannYZZ7XBAA4HUmG6EuivX4BS1wwHfyFbe/36GpWkOaXX6mz411ypHZ6f9qqqmW+lrU+10Ls0wpRK88kRX6G+Wrd5sSC/sVjBHD3sgjrB+O6YepKGdqB3DBHmHl2P4yf792eqonu+MkFa/qZvmp1MYTz/4+BtfocbN9Qxj1RuFo3WuM6ROCBN5M5ekOqeymPO1l/5dGwPNWNUfMLQsQkGvb5PR9xYI3YJ8Zjs9xDvzBphPhdIS2FvCTM+gxRzBViEpizQ2XlQcUoNJgZR4GP2+gjxXpRX1izjHaL06P1PJc0xSkzA+QUjrIDYJXPel3uPgWetlOENsZBq5Z9BYwosTa/1ElxCMatKL0dbMyxrNDDbEBUR1/wWc/3iPeeoaTo1aOm/27W8pLIc7tJf/g8nI/kn2nqag/70SL+JR6QTnBSixem9Z3NfXZ5P5cIOxj6xH2sSDS3xmo9jkwhy006blj9fwZpu6tUpYZpv0Ne7d/uZJrxO3mvnO6Tu9+RfaODvAiJfucjyf5tm23+zny+7qYPWwr7DzmRhC0lI9w3MUs+X+08tg6D2o0MMz20MgC+Gote56IYhAUaGErDgKYxtu+nKLrjzKQbR+3wypFqV0BM+SiHQ5G/LwUj5sQhyOq3ouDsNYmJ21EhiHfYA3NMJs+f8HfSU839VpqOiPDp2+hQPACm+bOtBXYpBa2q8k7ET9k2zE0sIjq/r5KfAox1nn9Uq5PqM3k2A701n9Sh8uELX6mgxlM7Y2/qvK0ElzFyqLeVoX1klB/LRdEoMP31hPslkNOYsRg/ZjM5sY3B7dbDOLa/3wjEiiuJWOmvl4vzqsiyOGX/txvvlIHxcD/zbtf5oxp3BPtJ7UAAAAAElFTkSuQmCC"
                />
            </Box>
            <Flex px="4" py="2" align="center" justify="space-between" w="100%">
                <Text fontSize={['xs', null, 'sm']}>
                    <Link fontWeight="semibold" href={`https://youtu.be/ScMzIvxBSi4`} isExternal>
                        {post.number + ' : ' + post.title}
                    </Link>
                </Text>
            </Flex>
            <Flex px="4" py="2" align="center" justify="space-between" w="100%">
                <Text fontSize={['xxs', null, 'sm']}>
                    {'Original Air Date: ' + post.originalAirDate}
                </Text>
            </Flex>
            <Flex px="4" py="2" align="center" justify="space-between" w="100%">
                <Text fontSize={['xxs', null, 'sm']}>{'Description: ' + post.desc}</Text>
            </Flex>
        </Box>
    );
}

Card.propTypes = {
    post: PostPropTypes,
    onImageClick: PropTypes.func.isRequired
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const TitleHeader = () => {
    return <a href='/'>
        <HStack>
            <Box>
                <FontAwesomeIcon icon={faBoxOpen} size='2x' />
            </Box>
            <Box>
                <Heading as="h1" size="lg">WikiStorage</Heading>
            </Box>
        </HStack>

    </a>
}

export default TitleHeader;
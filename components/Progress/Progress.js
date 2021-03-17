import { Box, Fade, Spinner, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

const Progress = ({
    items = [],
    mode = 'loop',
    time = 2000,
    spinner = {
        thickness: '6px', speed: '0.65s', emptyColor: 'gray.200', color: "blue.500", size: "xl"
    }
}) => {
    const [text, setText] = useState({ id: null, index: 0, value: '' });
    const [isOpen, setIsOpen] = useState(false);

    const shuffle = useCallback(() => {
        setText(currentState => {
            let index = ++currentState.index;
            index = (mode === 'loop' && index > items.length - 1) ? 0 : index;
            (mode === 'stop' && index >= items.length - 1) ? clearInterval(currentState.id) : null;

            return {
                ...currentState,
                index: index,
                value: items[index]
            }
        });
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), time / 2);
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            const intervalID = setInterval(shuffle, time);
            setText(state => { return { ...state, id: intervalID } });
        }
        return () => {
            if (items.length > 0) {
                clearInterval(intervalID);
            }
        }
    }, [shuffle]);

    return (
        <VStack>
            <Box>
                <Spinner {...spinner} />
            </Box>
            <Fade in={isOpen}>
                <Box>{text.index}{text.value}</Box>
            </Fade>
        </VStack>
    )
}

export default Progress;
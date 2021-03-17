import { SimpleGrid, Box, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Progress from "../Progress/Progress";

const Wiki = dynamic(() => import('../Wiki/Wiki'), {ssr: false});

export default function WikiLibrary({wikiList, isLoading}) {

    return (
        (isLoading)
            ? <Flex w="100%" align="center" justify="center" mt={'5rem'}>
                <Progress items={['Wait', 'We are getting the data']}/>
            </Flex>
            : <SimpleGrid columns={4} spacing={5}>
                {
                    (wikiList.length > 0)
                        ? wikiList.map((item, index) => {
                            return <Wiki key={index} url={item.url[0]}/>
                        })
                        : <div>Empty</div>
                }
            </SimpleGrid>
    )
}
import { SimpleGrid, Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Progress from "../Progress";

const Wiki = dynamic(() => import('../Wiki'), {ssr: false});

export default function WikiLibrary({wikiList, isLoading}) {

    return (
        (isLoading)
            ? <div className="container is-widescreen py-5 my-5">
                <Progress variant='is-primary'/>
            </div>
            : <SimpleGrid columns={4} spacing={5}>
                {
                    (wikiList.length > 0)
                        ? wikiList.map((item, index) => {
                            return (
                                <Box>
                                    <Wiki url={item.url[0]}/>
                                </Box>
                            )
                        })
                        : <div>Empty</div>
                }
            </SimpleGrid>
    )
}
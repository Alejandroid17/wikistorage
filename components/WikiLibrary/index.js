import dynamic from "next/dynamic";
import Progress from "../Progress";

const Wiki = dynamic(() => import('../Wiki'), {ssr: false});

export default function WikiLibrary({wikiList, isLoading}) {

    return (
        (isLoading)
            ? <div className="container is-widescreen py-5 my-5">
                <Progress variant='is-primary'/>
            </div>
            : <div className="columns is-multiline is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd is-centered is-3 px-6 py-5">
                {
                    (wikiList.length > 0)
                        ? wikiList.map((item, index) => {
                            return (
                                <div key={index} className="column is-one-quarter">
                                    <Wiki url={item.url[0]}/>
                                </div>
                            )
                        })
                        : <div>Vacio</div>
                }
            </div>
    )
}
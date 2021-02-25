import {ReactTinyLink} from 'react-tiny-link';
import {useEffect, useState} from "react"
import {Transition} from "react-transition-group";
import {defaultTransitionStyle, globalStyles, transitionStyles, transitionDuration} from './styles';


export default function Wiki({url}) {

    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);

        return () => {
            setInProp(false);
        }
    })

    return (
        <Transition in={inProp} timeout={transitionDuration}>
            {state =>
                <div style={{...defaultTransitionStyle, ...transitionStyles[state]}}>
                    <ReactTinyLink
                        cardSize="large"
                        showGraphic={true}
                        maxLine={3}
                        minLine={1}
                        url={url}
                        proxyUrl={'https://thingproxy.freeboard.io/fetch'}
                    />
                    <style jsx global>{globalStyles}</style>
                </div>
            }
        </Transition>
    )
}
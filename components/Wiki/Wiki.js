import { useContext, useEffect, useState } from "react";
import { ReactTinyLink } from 'react-tiny-link';
import { Transition } from "react-transition-group";
import { GlobalContext } from '../../contexts/GlobalContext';
import { defaultTransitionStyle, globalStyles, transitionDuration, transitionStyles } from './styles';


export default function Wiki({ url }) {

    const [contextState] = useContext(GlobalContext);
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
                <div style={{ ...defaultTransitionStyle, ...transitionStyles[state] }}>
                    <ReactTinyLink
                        cardSize={contextState.compact ? 'small' : 'large'}
                        showGraphic={true}
                        maxLine={contextState.compact ? 2 : 3}
                        minLine={1}
                        url={url}
                        proxyUrl={"https://infinite-proxy-cors.herokuapp.com"}
                    />
                    <style jsx global>{globalStyles}</style>
                </div>
            }
        </Transition>
    )
}
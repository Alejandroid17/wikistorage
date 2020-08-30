import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBoxOpen, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import SearchInput from "../SearchInput";

library.add(faBoxOpen, faSearch, faGithub)

export default function MainNavigation({onSearch}) {
    return (
        <div className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="container is-fluid px-1 py-1">
                <div className="columns is-desktop is-vcentered mx-0" style={{'width': '100%'}}>
                    <div className="column is-3">
                        <FontAwesomeIcon icon={faBoxOpen} size="2x"/>
                        <span className="title ml-2">WikiStorage</span>
                    </div>
                    <div className="column is-6">
                        <SearchInput onChange={onSearch}/>
                    </div>
                    <div className="column is-3">
                        <FontAwesomeIcon icon={faGithub} size="2x" className='is-pulled-right is-hidden-mobile is-hidden-tablet-only'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
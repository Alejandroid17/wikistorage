import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBoxOpen, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import SearchInput from "../SearchInput";

library.add(faBoxOpen, faSearch, faGithub)

export default function MainNavigation({onSearch}) {
    return (
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-item">
                    <FontAwesomeIcon icon={faBoxOpen} size="2x"/> <span
                    className="title is-4 ml-2 is-hidden-mobile">WikiStorage</span>
                </div>
                <div className="container">
                    <div className="navbar-item">
                        <SearchInput onChange={onSearch}/>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <a className="navbar-item" href="https://github.com/Alejandroid17/wikistorage">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
            </div>
        </nav>
    )
}
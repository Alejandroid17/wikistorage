import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompactSwitch from "../CompactSwitch";
import SearchInput from "../SearchInput";
import ThemeSwitch from "../ThemeSwitch";

library.add(faBoxOpen, faSearch, faGithub)

export default function MainNavigation({ onSearch }) {

    return (
        <div className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="container is-fluid px-1 py-1">
                <div className="columns is-desktop is-vcentered mx-0" style={{ 'width': '100%' }}>
                    <div className="column is-3">
                        <FontAwesomeIcon icon={faBoxOpen} size="2x" />
                        <span className="title ml-2">WikiStorage</span>
                        <CompactSwitch size={'lg'} className={'is-pulled-right mr-5 mt-1'} />
                        <ThemeSwitch size={'lg'} className={'is-pulled-right mr-5 mt-1'} />
                    </div>
                    <div className="column is-6">
                        <SearchInput onChange={onSearch} />
                    </div>
                    <div className="column is-3">
                        <a href="https://github.com/Alejandroid17/wikistorage">
                            <FontAwesomeIcon icon={faGithub} size="2x" className='is-pulled-right is-hidden-mobile is-hidden-tablet-only' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchInput({onChange}) {
    return (
        <div className="field w-100">
            <p className="control has-icons-left">
                <input className="input is-rounded" type="text" placeholder="Search" onChange={onChange}/>
                <span className="icon is-small is-left"><FontAwesomeIcon icon={faSearch}/></span>
            </p>
        </div>
    )
}
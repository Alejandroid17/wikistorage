import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VisuallyHidden,
} from "@chakra-ui/react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

const SearchInput = ({ onChange }) => {
  const [state] = useContext(GlobalContext)

  return (
    <InputGroup boxShadow="lg">
      <InputLeftElement pointerEvents="none" color="gray.500" p={2}>
        <FontAwesomeIcon icon={faSearch} />
      </InputLeftElement>
      <VisuallyHidden>
        <FormLabel htmlFor="search-input">Search</FormLabel>
      </VisuallyHidden>
      <Input
        id="search-input"
        type="text"
        placeholder={`Search in the ${state.totalNumberElements} elements`}
        onChange={onChange}
      />
    </InputGroup>
  )
}

export default SearchInput

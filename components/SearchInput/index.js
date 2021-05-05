import {
  Input,
  InputGroup,
  InputLeftElement,
  VisuallyHidden,
  FormLabel,
} from "@chakra-ui/react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchInput = ({ onChange }) => {
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
        placeholder="Search"
        onChange={onChange}
      />
    </InputGroup>
  )
}

export default SearchInput

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchInput = ({ onChange }) => {
  return (
    <InputGroup boxShadow="lg">
      <InputLeftElement pointerEvents="none" color="gray.500">
        <FontAwesomeIcon icon={faSearch} />
      </InputLeftElement>
      <Input type="text" placeholder="Search" onChange={onChange} />
    </InputGroup>
  )
}

export default SearchInput

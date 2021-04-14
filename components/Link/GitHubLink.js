import { Link } from "@chakra-ui/react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GitHubLink = ({ showIcon = true, linkText }) => {
  return (
    <Link href="https://github.com/Alejandroid17/wikistorage">
      {showIcon && <FontAwesomeIcon icon={faGithub} size="2x" className="" />}
      {linkText}
    </Link>
  )
}

export default GitHubLink

import { Link } from "@chakra-ui/react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GitHubLink = ({ linkText, showIcon = true }) => {
  return (
    <Link
      href="https://github.com/Alejandroid17/wikistorage"
      target={"blank"}
      aria-label="GitHub"
      w={34}
    >
      {showIcon && <FontAwesomeIcon icon={faGithub} size="2x" />}
      {linkText}
    </Link>
  )
}

export default GitHubLink

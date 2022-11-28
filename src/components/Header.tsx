import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string,
  description: string
}

const Header = ({ siteTitle, description }: HeaderProps) => (
    <header
    style={{
      textAlign: `center`,
    }}
  >
    <div>
      <p>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </p>
      <p>
        {description}
      </p>
    </div>
  </header>
)

export default Header
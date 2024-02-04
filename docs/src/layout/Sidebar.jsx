import * as pages from "../pages";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {Object.keys(pages).map((page, index) => (
          <li key={index}>
            <a href={`${page.toLocaleLowerCase().replace('page', '')}`}>
              {page.replace('Page', '')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
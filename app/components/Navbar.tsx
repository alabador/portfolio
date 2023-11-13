import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full pt-8 px-20 md:px-[20%] absolute">
        <nav>
            <ul className="flex justify-between">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/work">Work</Link>
                </li>
                <li>
                  <Link href="resume.pdf" target="_blank">Resume</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
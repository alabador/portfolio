import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className="flex gap-4 py-4">
        <a
            href="https://github.com/alabador"
            target="_blank"
            className="hover:scale-110 hover:text-orange-300"
        >
            
            <FaGithub size={24}/>
        </a>
        <a
            href="https://www.linkedin.com/in/austinlabador/"
            target="_blank"
            className="hover:scale-110 hover:text-orange-300"
        >
            <FaLinkedin size={24}/>
        </a>
        <a
            href="https://twitter.com/alabador_v2"
            target="_blank "
            className="hover:scale-110 hover:text-orange-300"
        >
            <FaTwitter size={24}/>
        </a>
    </div>
  )
}

export default SocialLinks
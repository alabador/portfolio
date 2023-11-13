type CardProps = {
    projectName: string,
    projectUrl: string,
    tech: string[],
    desc: string
}

const Card = ({projectName, projectUrl, tech, desc}: CardProps) => {
  return (
    <a className="w-full p-4 my-2 border-solid border-[1px] border-gray-500 rounded-md hover:border-orange-300" href={projectUrl}>
        <article className="w-full">
            <h2 className="text-xl font-semibold">{projectName}</h2>
            <div className="text-sm py-1">
                {tech.map(item => 
                    <p key={`${projectName}${item}`} className="inline pr-2">
                        {`[${item}]`}
                    </p>
                )}
            </div>
            <p className="text-sm md:text-base">// {desc}</p>
        </article>
    </a>
  )
}

export default Card
const projectsContainer = document.querySelector('.additional-projects');

export function showProjects(projects) {
    for (let i = 0; i < projects.length; i++){
        projectsContainer.append(buildProject(projects[i]));
    }
}

export const projects = [
    {title:'Daily CodeWars', info:'Coding challenges to help practice and improve programming skills.'},
    {title:'Frontend UI', info:'A collection of UI and frontend components.'},
    {title:'Sign Up Form', info:'A responsive sign up form for an arctic expedition.'},
    {title:'Admin Dashboard', info:'An administrative Dashboard built using HTML and SCSS.'},
]

//project is an object taken from projects array
function buildProject(project) {
    let article = document.createElement('article');
    article.classList.add('mini-project');
    const projectDetails = buildProjectDetails(project);
    article.append(projectDetails);
    return article;
}

function buildProjectDetails(project) {
    let projectInfo = document.createElement('div');
    projectInfo.classList.add('mini-project-text');
    projectInfo.append(buildElement('h2', `${project.title}`), buildElement('p', `${project.info}`));
    
    projectInfo.append(buildProjectLinks());
    // console.log(projectInfo);
    return projectInfo;
}

function buildProjectLinks(){
    let projectLinks = document.createElement('div');
    projectLinks.classList.add('project-links');
    const cta = buildElement('a', 'View Code')
    cta.classList.add('project-cta');
    projectLinks.append(cta);
    return projectLinks;
}

//content comes from project, due to closure
function buildElement(tag, content = '') {
    const element = document.createElement(tag);
    element.textContent = content;
    // console.log(element);
    return element;
}
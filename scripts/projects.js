const projectsContainer = document.querySelector('.additional-projects');

export function showProjects(projects) {
    for (let i = 0; i < projects.length; i++){
        projectsContainer.append(buildProject(projects[i]));
    }
}

export const projects = [
    {title:'Daily CodeWars', info:'Coding challenges to help practice and improve programming skills.', code:'https://github.com/alabador/codewars'},
    {title:'Frontend UI', info:'A collection of UI and frontend components.', code:'https://github.com/alabador/frontend-ui', live:'https://alabador.github.io/frontend-ui/four-card-feature-section/'},
    {title:'Sign Up Form', info:'A responsive sign up form for an arctic expedition.', code:'https://github.com/alabador/sign-up-form', live:'https://alabador.github.io/sign-up-form/'},
    {title:'Admin Dashboard', info:'An administrative Dashboard built using HTML and SCSS.', code:'https://github.com/alabador/admin-dashboard', live:'https://alabador.github.io/admin-dashboard/'},
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
    
    projectInfo.append(buildProjectLinks(project));
    // console.log(projectInfo);
    return projectInfo;
}

function buildProjectLinks(project){
    let projectLinks = document.createElement('div');
    projectLinks.classList.add('project-links');

    if(project.hasOwnProperty('live')){
        const ctaLive = buildElement('a', 'View Project')
        ctaLive.classList.add('project-cta');
        projectLinks.append(ctaLive);
    }

    const ctaCode = buildElement('a', 'View Code')
    ctaCode.classList.add('project-cta');
    projectLinks.append(ctaCode);
    return projectLinks;
}

//content comes from project, due to closure
function buildElement(tag, content = '') {
    const element = document.createElement(tag);
    element.textContent = content;
    // console.log(element);
    return element;
}
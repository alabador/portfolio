const projectsContainer = document.querySelector('.additional-projects');

const projects = [
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


    // <div class="mini-project-text">
    //     <h2>Daily CodeWars</h2>
    //     <p>A fan website dedicated to the game Genshin Impact. Developed using data fetched from various open-source Genshin API's.</p>
    //     <div class="project-links">
    //         <a class="cta-button" href="#">View Code</a>
    //     </div>
    // </div>
    
    //create element - article (with class of mini project)
    //create and append div
}

function buildProjectDetails(project) {
    let projectInfo = document.createElement('div');
    projectInfo.classList.add('mini-project-text');
    projectInfo.append(buildElement('h2', `${project.title}`), buildElement('p', `${project.info}`));
    return projectInfo;
}

//content comes from project, due to closure
function buildElement(tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;
    return element;
}
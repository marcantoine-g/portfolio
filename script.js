
// Get the width of the screen to know if is a mobile device
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// Intersections Observers 
    // NavLink changed to bold
    var rootMargin;
    if(width<540){
        rootMargin = "-100px"; 
    }else{
        rootMargin = "-250px";
    }
    var optionsNavLink ={
        root: null,
        rootMargin: rootMargin,
        threshold: 0.1
    }
    var observerNavLink = new IntersectionObserver(changeActiveNavElement, optionsNavLink);

    const homePage = document.getElementById('home');
    const homeLink = document.getElementById('homeLink');
    const projectsPage = document.getElementById('projects');
    const projectsLink = document.getElementById('projectsLink');
    const aboutPage = document.getElementById('about');
    const aboutLink = document.getElementById('aboutLink');


    observerNavLink.observe(homePage);
    observerNavLink.observe(projectsPage);
    observerNavLink.observe(aboutPage);

    function changeActiveNavElement(entries){
        entries.forEach(entry => {
            if(entry.intersectionRatio> 0.1){
                switch (entry.target.id){
                    case 'home':
                        homeLink.classList.add('isActive');
                        projectsLink.classList.remove('isActive');
                        aboutLink.classList.remove('isActive');
                        break;
                    case 'projects':
                        homeLink.classList.remove('isActive');
                        projectsLink.classList.add('isActive');
                        aboutLink.classList.remove('isActive');
                        break;
                    case 'about':
                        homeLink.classList.remove('isActive');
                        projectsLink.classList.remove('isActive');
                        aboutLink.classList.add('isActive');
                        break;
                    default:
                        console.log('An error as occured');
                }
            }
        });
    }

    // Projects fade-in
    var optionsProjects ={
        root: null,
        rootMargin: '-100px',
        threshold: 0.7
    }
    var observerProjects = new IntersectionObserver(fadeInProjects, optionsProjects);

    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
        observerProjects.observe(projects[i]);
    }


    function fadeInProjects(entries){
        entries.forEach(entry=>{
            if(entry.intersectionRatio> 0.5){
                entry.target.classList.add('fadeIn');
            }
        });
    }

    // Projects details visible if mobile device
    if(width<540){
        var optionsDetails = {
            root: null,
            rootMargin: '-100px',
            threshold: 0.5
        }
        var observerDetails = new IntersectionObserver(setVisible, optionsDetails);

        const projects_overlay = document.getElementsByClassName('project_overlay');
        for (let index = 0; index < projects_overlay.length; index++) {
            observerDetails.observe(projects_overlay[index]);
        }

        function setVisible(entries){
            entries.forEach(entry => {
                if(entry.intersectionRatio> 0.5){
                    entry.target.style.opacity=1;
                } else {
                    entry.target.style.opacity=0;
                }
            });
        }
    }


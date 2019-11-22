// Intersections Observers 

    // NavLink changed to bold
    var optionsNavLink ={
        root: null,
        rootMargin: '100px',
        threshold: 0.5
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
            if(entry.intersectionRatio> 0.5){
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
        rootMargin: '100px',
        threshold: 0.5
    }
    var observerProjects = new IntersectionObserver(fadeInProjects, optionsNavLink);

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
    if(window.innerWidth<540){
        var optionsDetails = {
            root: null,
            rootMargin: '-100px',
            threshold: 0.5
        }
        var observerDetails = new IntersectionObserver(setVisible, optionsDetails);

        const projects_overlay = document.getElementsByClassName('project_overlay');
        console.log(projects_overlay);
        for (let index = 0; index < projects_overlay.length; index++) {
            observerDetails.observe(projects_overlay[index]);
        }

        function setVisible(entries){
            entries.forEach(entry => {
                if(entry.intersectionRatio> 0.5){
                    entry.target.style.opacity=1;
                } else {
                    entry.target.style.opacity=0;
                    console.log(entry.target.style.opacity);
                }
            });
        }
    }


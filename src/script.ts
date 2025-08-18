const hamburger: HTMLElement | null = document.querySelector('.hamburger');
const menu: HTMLElement | null = document.querySelector('.nav-links');

hamburger?.addEventListener('click', function(event: Event): void {
    menu?.classList.toggle('active');
    hamburger.classList.toggle('active'); 
});

const form: HTMLFormElement | null = document.querySelector('#contact form');
const thankYouMessage: HTMLElement | null = document.querySelector('.thank-you-message');

form?.addEventListener('submit', function(event: Event): void {
    event.preventDefault(); 
    const nameInput: HTMLInputElement | null = document.querySelector('#contact input[type="text"]');
    const name: string = nameInput?.value || '';
    if (thankYouMessage) {
        thankYouMessage.textContent = `Thank you, ${name}! Your message was sent.`;
        thankYouMessage.classList.add('show');
    }
    form?.reset();

    setTimeout(function(): void {
        thankYouMessage?.classList.remove('show');
    }, 3000);
});

interface AboutData {
    description: string;
    image: string;
}

fetch('data/about.json')
    .then((response: Response): Promise<AboutData> => response.json())
    .then((data: AboutData): void => {
        const aboutGrid: HTMLElement | null = document.querySelector('#about .about-grid');
        if (aboutGrid) {
            const img: HTMLImageElement = document.createElement('img');
            img.src = data.image;
            img.alt = 'My Profile Photo';
            aboutGrid.appendChild(img);
            const p: HTMLParagraphElement = document.createElement('p');
            p.textContent = data.description;
            aboutGrid.appendChild(p);
        }
    })
    .catch((error: Error): void => console.error('Error loading about:', error));

fetch('data/skills.json')
    .then((response: Response): Promise<string[]> => response.json())
    .then((data: string[]): void => {
        const skillsList: HTMLElement | null = document.querySelector('#skills .skills-list');
        if (skillsList) {
            data.forEach((skill: string): void => {
                const li: HTMLLIElement = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        }
    })
    .catch((error: Error): void => console.error('Error loading skills:', error));

interface Project {
    image: string;
    title: string;
    description: string;
    timeline: string;
}

fetch('data/projects.json')
    .then((response: Response): Promise<Project[]> => response.json())
    .then((data: Project[]): void => {
        const projectsGrid: HTMLElement | null = document.querySelector('#projects .projects-grid');
        if (projectsGrid) {
            data.forEach((project: Project): void => {
                const projectDiv: HTMLDivElement = document.createElement('div');
                projectDiv.classList.add('project');
                const img: HTMLImageElement = document.createElement('img');
                img.src = project.image;
                img.alt = project.title;
                projectDiv.appendChild(img);
                const h3: HTMLHeadingElement = document.createElement('h3');
                h3.textContent = project.title;
                projectDiv.appendChild(h3);
                const descP: HTMLParagraphElement = document.createElement('p');
                descP.textContent = project.description;
                projectDiv.appendChild(descP);
                const timeP: HTMLParagraphElement = document.createElement('p');
                timeP.innerHTML = `<strong>Timeline:</strong> ${project.timeline}`;
                projectDiv.appendChild(timeP);
                projectsGrid.appendChild(projectDiv);
            });
        }
    })
    .catch((error: Error): void => console.error('Error loading projects:', error));

interface Experience {
    title: string;
    details: string;
    description: string[];
    skills: string;
}

fetch('data/experience.json')
    .then((response: Response): Promise<Experience[]> => response.json())
    .then((data: Experience[]): void => {
        const experienceList: HTMLElement | null = document.querySelector('#experience .experience-list');
        if (experienceList) {
            data.forEach((exp: Experience): void => {
                const expDiv: HTMLDivElement = document.createElement('div');
                expDiv.classList.add('experience-item');
                const h3: HTMLHeadingElement = document.createElement('h3');
                h3.textContent = exp.title;
                expDiv.appendChild(h3);
                const detailsP: HTMLParagraphElement = document.createElement('p');
                detailsP.classList.add('job-details');
                detailsP.textContent = exp.details;
                expDiv.appendChild(detailsP);
                const ul: HTMLUListElement = document.createElement('ul');
                ul.classList.add('job-description');
                exp.description.forEach((item: string): void => {
                    const li: HTMLLIElement = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
                expDiv.appendChild(ul);
                const skillsP: HTMLParagraphElement = document.createElement('p');
                skillsP.classList.add('job-skills');
                skillsP.textContent = `Skills: ${exp.skills}`;
                expDiv.appendChild(skillsP);
                experienceList.appendChild(expDiv);
            });
        }
    })
    .catch((error: Error): void => console.error('Error loading experience:', error));
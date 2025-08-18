"use strict";
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-links');
hamburger?.addEventListener('click', function (event) {
    menu?.classList.toggle('active');
    hamburger.classList.toggle('active');
});
const form = document.querySelector('#contact form');
const thankYouMessage = document.querySelector('.thank-you-message');
form?.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.querySelector('#contact input[type="text"]');
    const name = nameInput?.value || '';
    if (thankYouMessage) {
        thankYouMessage.textContent = `Thank you, ${name}! Your message was sent.`;
        thankYouMessage.classList.add('show');
    }
    form?.reset();
    setTimeout(function () {
        thankYouMessage?.classList.remove('show');
    }, 3000);
});
fetch('data/about.json')
    .then((response) => response.json())
    .then((data) => {
    const aboutGrid = document.querySelector('#about .about-grid');
    if (aboutGrid) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = 'My Profile Photo';
        aboutGrid.appendChild(img);
        const p = document.createElement('p');
        p.textContent = data.description;
        aboutGrid.appendChild(p);
    }
})
    .catch((error) => console.error('Error loading about:', error));
fetch('data/skills.json')
    .then((response) => response.json())
    .then((data) => {
    const skillsList = document.querySelector('#skills .skills-list');
    if (skillsList) {
        data.forEach((skill) => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }
})
    .catch((error) => console.error('Error loading skills:', error));
fetch('data/projects.json')
    .then((response) => response.json())
    .then((data) => {
    const projectsGrid = document.querySelector('#projects .projects-grid');
    if (projectsGrid) {
        data.forEach((project) => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = project.title;
            projectDiv.appendChild(img);
            const h3 = document.createElement('h3');
            h3.textContent = project.title;
            projectDiv.appendChild(h3);
            const descP = document.createElement('p');
            descP.textContent = project.description;
            projectDiv.appendChild(descP);
            const timeP = document.createElement('p');
            timeP.innerHTML = `<strong>Timeline:</strong> ${project.timeline}`;
            projectDiv.appendChild(timeP);
            projectsGrid.appendChild(projectDiv);
        });
    }
})
    .catch((error) => console.error('Error loading projects:', error));
fetch('data/experience.json')
    .then((response) => response.json())
    .then((data) => {
    const experienceList = document.querySelector('#experience .experience-list');
    if (experienceList) {
        data.forEach((exp) => {
            const expDiv = document.createElement('div');
            expDiv.classList.add('experience-item');
            const h3 = document.createElement('h3');
            h3.textContent = exp.title;
            expDiv.appendChild(h3);
            const detailsP = document.createElement('p');
            detailsP.classList.add('job-details');
            detailsP.textContent = exp.details;
            expDiv.appendChild(detailsP);
            const ul = document.createElement('ul');
            ul.classList.add('job-description');
            exp.description.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            expDiv.appendChild(ul);
            const skillsP = document.createElement('p');
            skillsP.classList.add('job-skills');
            skillsP.textContent = `Skills: ${exp.skills}`;
            expDiv.appendChild(skillsP);
            experienceList.appendChild(expDiv);
        });
    }
})
    .catch((error) => console.error('Error loading experience:', error));

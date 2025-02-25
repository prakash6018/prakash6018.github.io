// Project data
const projects = [
    {
        title: "Jatango",
        description: "Live e-commerce platform enabling shop owners to create Facebook live shows and add products to cart. Built with Next.js and TypeScript, focusing on high performance and responsiveness.",
        image: "https://via.placeholder.com/300x200",
        tags: ["Next.js", "TypeScript", "E-commerce"]
    },
    {
        title: "E-Typist",
        description: "Audio-to-document transcription service for legal proceedings and medical cases. Developed using React.js and JavaScript with comprehensive version control using Git.",
        image: "https://via.placeholder.com/300x200",
        tags: ["React.js", "JavaScript", "Git"]
    }
];

// Load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    this.reset();
});

// Mobile navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

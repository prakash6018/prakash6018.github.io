// Project data


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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    // Simple theme switcher
    const checkbox = document.getElementById('checkbox');
    
    // Check if theme is stored in localStorage
    const theme = localStorage.getItem('theme');
    console.log('Current theme:', theme); // Debug log
    
    // Apply theme on page load
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
    }
    
    // Handle theme toggle
    checkbox.addEventListener('change', (e) => {
        console.log('Checkbox changed:', e.target.checked); // Debug log
        
        if (e.target.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log('Set dark theme'); // Debug log
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            console.log('Set light theme'); // Debug log
        }
    });

    // Debug: Log initial state
    console.log('Initial checkbox state:', checkbox.checked);
    console.log('Initial body data-theme:', document.body.getAttribute('data-theme'));
});

function openProject(projectId) {
    const projectData = [
        {
            title: "Project 1",
            image: "project1-detail.jpg",
            description: "This is a detailed description of Project 1 with custom content and multiple images.",
        },
        {
            title: "Project 2",
            image: "project2-detail.jpg",
            description: "Explore the features and design choices of Project 2 in depth.",
        }
        // Add more project data as needed
    ];

    const project = projectData[projectId - 1];

    // Remove existing modal if present
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    // Create a new modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal-window">
            <span class="close-button">&times;</span>
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="${project.title} Image">
            <p>${project.description}</p>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    const closeButton = modalOverlay.querySelector('.close-button');
    closeButton.addEventListener('click', () => modalOverlay.remove());
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.remove();
    });
}

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        openProject(index + 1);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission for demonstration purposes.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission.
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form.
    event.target.reset();
});

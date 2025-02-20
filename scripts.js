document.addEventListener("DOMContentLoaded", () => {
    const projectTiles = document.querySelectorAll(".project-tile");
    const modal = document.getElementById("project-modal");
    const projectDetails = document.getElementById("project-details");
    const closeButton = document.querySelector(".close-button");

    // Open project modal
    window.openProject = (projectId) => {
        const projectDescription = document.getElementById(projectId);
        if (projectDescription) {
            // Hide all project descriptions
            document.querySelectorAll(".project-description").forEach((desc) => {
                desc.classList.add("hidden");
            });

            // Show the selected project description
            projectDescription.classList.remove("hidden");
            modal.classList.remove("hidden");
            document.body.style.overflow = "hidden"; // Prevent background scrolling
            modal.querySelector(".modal-content").style.overflowY = "scroll"; // Allow modal content to scroll
            modal.querySelector(".modal-content").style.maxHeight = "90vh"; // Limit modal content height for better scrolling
        }
    };

    // Close project modal
    window.closeProject = () => {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    };

    // Fade-in animation for project tiles
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    projectTiles.forEach((tile) => {
        observer.observe(tile);
    });

    // Close modal on overlay click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeProject();
        }
    });

    // Close modal on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeProject();
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        console.log("Button clicked"); // Testausgabe
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    
    
});

console.log("JS loaded");

document.addEventListener("DOMContentLoaded", () => {
    const fadeIn = document.querySelectorAll(".fade-in");
    const modal = document.getElementById("project-modal");
    const projectDetails = document.getElementById("project-details");
    const closeButton = document.querySelector(".close-button");
    const body = document.body;
    scrollToTopBtn = document.getElementById("scrollToTopBtnconst");


    

    // Nur fortfahren, wenn das Modal existiert
   
    if (modal) {

        // Open project modal
        window.openProject = (projectId) => {
            const projectDescription = document.getElementById(projectId);
            if (projectDescription) {
                // Versteckt alle Kinder von #project-details
                projectDetails.querySelectorAll(".project-description").forEach((desc) => {
                    desc.classList.add("hidden");
                });

                // Zeige gewünschtes Projekt
                projectDescription.classList.remove("hidden");
                modal.classList.remove("hidden");
                document.body.style.overflow = "hidden";
                modal.querySelector(".modal-content").style.overflowY = "scroll";
                modal.querySelector(".modal-content").style.maxHeight = "95vh";
            }
            modal.querySelector(".modal-content").scrollTop = 0;
        };

        // Close project modal
        window.closeProject = () => {
            modal.classList.add("hidden");
            document.body.style.overflow = "auto"; // Re-enable background scrolling
        };

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
    }

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

        fadeIn.forEach((tile) => {
            observer.observe(tile);
        });

        // Scroll-to-top button
        scrollToTopBtn?.addEventListener("click", () => {
            console.log("Button clicked"); // Testausgabe
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    


        // Sidebar öffnen/schließen
        const navLogo = document.querySelector('.nav-logo');
        if (navLogo) {
            navLogo.addEventListener('click', showSidebar);
        }

        function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'flex';
        }

        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.addEventListener('click', hideSidebar);
        }

        function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none';
        }

        window.showSidebar = showSidebar;
        window.hideSidebar = hideSidebar;
            
       
});


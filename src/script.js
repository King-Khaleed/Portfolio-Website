
    // Toggle Mobile Menu
    document.querySelector('.menu-button').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Project Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        projects.forEach(project => {
          if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });

    // Contact Form Validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const errorMsg = document.getElementById('error-msg');

      if (name === '' || email === '' || message === '') {
        event.preventDefault();
        errorMsg.style.display = 'block';
      } else {
        errorMsg.style.display = 'none';
      }
    });
  
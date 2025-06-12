// blog.js - Enhanced to match your portfolio design

// DOM Elements
const blogCards = document.querySelectorAll('.blog-card');
const blogDetailsSection = document.querySelector('.blog-details');
const blogDetailsContent = document.querySelector('.blog-details-content');
const backToBlogLink = document.querySelector('.back-to-blog');
const blogSection = document.querySelector('.blog-section');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const scrollTopBtn = document.querySelector('.scroll-top');

// Sample Blog Data - Updated to match your portfolio's style
const blogData = {
  1: {
    image: 'assets/img/blog.jpg',
    title: 'My Journey: From Aspiring Doctor to Tech Enthusiast',
    category: 'Personal',
    date: '10/3/2025',
    readTime: '5 min read',
    content: `
      <p><strong>Published on:</strong> 10/3/2025</p>
      <p>
        Life is a journey filled with twists, turns, and unexpected opportunities. My story is no different. From dreaming of becoming a doctor to finding my passion in technology, my journey has been one of resilience, adaptability, and continuous learning.
      </p>
      <h3>Early Life – Growing Up in Chitral</h3>
      <p>
        I was born and raised in <strong>Chitral</strong>, a picturesque region in northern Pakistan surrounded by majestic mountains and serene valleys. Growing up in a small village, life was simple yet fulfilling.
      </p>
      <h3>The Dream of Becoming a Doctor</h3>
      <p>
        Like many students in Pakistan, I aspired to become a <strong>doctor</strong>. I enrolled in <strong>Pre-Medical (FSc)</strong> and worked hard to achieve my dream. However, despite my efforts, I couldn't secure admission to a medical college.
      </p>
      <h3>A New Direction – Discovering Computer Science</h3>
      <p>
        After the disappointment, I realized that my passion for problem-solving and creativity could be channeled into <strong>Computer Science</strong>.
      </p>
    `
  },
  2: {
    image: 'assets/img/ai.jpg',
    title: 'The Future of AI in Business',
    category: 'Technology',
    date: '13/3/2025',
    readTime: '4 min read',
    content: `
      <p><strong>Published on:</strong> 13/3/2025</p>
      <p>
        Artificial Intelligence (AI) is no longer a futuristic concept—it's here, and it's transforming industries. From automating repetitive tasks to providing data-driven insights, AI is reshaping the way businesses operate.
      </p>
      <h3>Current Trends in AI</h3>
      <p>
        Some of the most exciting trends in AI include automation, predictive analytics, and AI-powered customer service. These technologies are helping businesses save time, reduce costs, and improve customer experiences.
      </p>
      <h3>How to Get Started with AI</h3>
      <p>
        Businesses can start by exploring AI tools and platforms, such as TensorFlow, IBM Watson, and Google Cloud AI. Upskilling employees in AI and data science is also crucial for long-term success.
      </p>
    `
  },
  3: {
    image: 'assets/img/svgpa.webp',
    title: 'Skill vs. CGPA: What Matters More?',
    category: 'Education',
    date: '14/3/2025',
    readTime: '6 min read',
    content: `
      <p><strong>Published on:</strong> 14/3/2025</p>
      <p>
        In the debate between skills and CGPA, which one holds more weight in today's job market? While a high CGPA may open doors, practical skills are often the key to long-term success.
      </p>
      <h3>The Role of CGPA</h3>
      <p>
        A good CGPA can help you get shortlisted for jobs or higher education. It demonstrates your ability to learn and perform well in academic settings.
      </p>
      <h3>The Importance of Skills</h3>
      <p>
        Practical skills are essential for success in today's job market. Employers look for candidates who can apply their knowledge to real-world problems.
      </p>
    `
  },
  4: {
    image: 'assets/img/job.png',
    title: 'Tips for Effective Job Hunting',
    category: 'Career',
    date: '15/3/2025',
    readTime: '7 min read',
    content: `
      <p><strong>Published on:</strong> 15/3/2025</p>
      <p>
        Navigating the job market can be challenging. Discover essential tips to make your job search more effective, from crafting a compelling resume to acing your interviews.
      </p>
      <h3>Crafting Your Resume</h3>
      <p>
        Your resume is your first impression. Make it count by highlighting relevant skills and experiences that match the job description.
      </p>
      <h3>Networking</h3>
      <p>
        Many jobs are found through connections rather than job postings. Attend industry events and engage with professionals in your field.
      </p>
    `
  }
};

// Show Blog Details with Animation
blogCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const blogId = card.getAttribute('data-id');
    const blog = blogData[blogId];

    // Set blog details content
    blogDetailsContent.querySelector('.details-image').src = blog.image;
    blogDetailsContent.querySelector('.details-title').textContent = blog.title;
    blogDetailsContent.querySelector('.details-body').innerHTML = blog.content;
    blogDetailsContent.querySelector('.details-category').textContent = blog.category;
    blogDetailsContent.querySelector('.details-date').innerHTML = `<i class='far fa-calendar'></i> ${blog.date}`;
    blogDetailsContent.querySelector('.details-read-time').innerHTML = `<i class='far fa-clock'></i> ${blog.readTime}`;

    // Add animation classes
    blogDetailsSection.classList.add('active');
    blogSection.classList.remove('active');
    
    // Scroll to top of details section
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Back to Blog with Animation
backToBlogLink.addEventListener('click', (e) => {
  e.preventDefault();
  blogDetailsSection.classList.remove('active');
  blogSection.classList.add('active');
  
  // Scroll to top of blog section
  window.scrollTo({
    top: document.querySelector('.blog-section').offsetTop - 70,
    behavior: 'smooth'
  });
});

// Filter Blogs by Category
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const category = button.getAttribute('data-category');
    const blogArticles = document.querySelectorAll('.blog-card');
    
    blogArticles.forEach(article => {
      if (category === 'all' || article.getAttribute('data-category') === category) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  });
});

// Search Functionality
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  performSearch();
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    performSearch();
  }
});

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const blogArticles = document.querySelectorAll('.blog-card');
  
  blogArticles.forEach(article => {
    const title = article.querySelector('.blog-title').textContent.toLowerCase();
    const excerpt = article.querySelector('.blog-excerpt').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}

// Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize ScrollReveal animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});

// Apply animations to blog elements
if (blogSection) {
  sr.reveal('.section-title', {});
  sr.reveal('.section-subtitle', { delay: 400 });
  sr.reveal('.blog-card', { interval: 200 });
}

// WhatsApp Sharing Functionality
document.querySelectorAll('.whatsapp-share').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const blogId = button.getAttribute('data-blog-id');
    const blog = blogData[blogId];
    const message = `Check out this blog post: ${blog.title} - ${window.location.href}?blog=${blogId}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
});
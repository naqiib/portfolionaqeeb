// DOM Elements
const blogGrid = document.getElementById('blogGrid');
const blogDetails = document.getElementById('blogDetails');
const showAddBlogFormBtn = document.getElementById('showAddBlogForm');
const addBlogForm = document.getElementById('addBlogForm');
const blogForm = document.getElementById('blogForm');
const cancelAddBlogBtn = document.getElementById('cancelAddBlog');
const backToBlogBtn = document.getElementById('backToBlog');
const editBlogBtn = document.getElementById('editBlogBtn');
const deleteBlogBtn = document.getElementById('deleteBlogBtn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.blog-nav-links');

// Blog Data (Can be replaced with localStorage or API calls)
let blogs = [
  {
    id: 1,
    title: "My Journey: From Aspiring Doctor to Tech Enthusiast",
    category: "Personal",
    image: "assets/img/blog.jpg",
    date: new Date().toLocaleDateString(),
    readTime: "5 min read",
    excerpt: "How I transitioned from medicine to technology and found my passion in coding.",
    content: `
      <p>Life is a journey filled with twists, turns, and unexpected opportunities. My story is no different. From dreaming of becoming a doctor to finding my passion in technology, my journey has been one of resilience, adaptability, and continuous learning.</p>
      <h3>Early Life in Chitral</h3>
      <p>Growing up in northern Pakistan surrounded by majestic mountains and serene valleys, I developed a curiosity for how things work from an early age.</p>
      <h3>The Medical Dream</h3>
      <p>Like many students in Pakistan, I initially pursued a medical career path, completing my Pre-Medical (FSc) with high hopes of becoming a doctor.</p>
      <h3>The Pivot to Tech</h3>
      <p>When medical school didn't work out, I discovered my passion for problem-solving could be channeled into computer science, leading me to enroll at Air University, Islamabad.</p>
    `
  },
  {
    id: 2,
    title: "The Future of AI in Business",
    category: "Technology",
    image: "assets/img/ai.jpg",
    date: new Date().toLocaleDateString(),
    readTime: "4 min read",
    excerpt: "Exploring how AI is transforming industries and what it means for businesses.",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's here and transforming industries across the globe.</p>
      <h3>Current AI Applications</h3>
      <p>From chatbots to predictive analytics, businesses are leveraging AI to improve efficiency and customer experiences.</p>
      <h3>Future Possibilities</h3>
      <p>The next decade will see AI become even more integrated into business processes, with advancements in natural language processing and computer vision.</p>
      <h3>Getting Started</h3>
      <p>Businesses can begin their AI journey by identifying repetitive tasks that can be automated and investing in employee training.</p>
    `
  }
];

// Current blog being viewed/edited
let currentBlogId = null;

// Initialize the blog
document.addEventListener('DOMContentLoaded', () => {
  displayBlogs();
  setupEventListeners();
});

// Display all blogs
function displayBlogs() {
  blogGrid.innerHTML = '';
  
  if (blogs.length === 0) {
    blogGrid.innerHTML = `
      <div class="no-blogs">
        <p>No blog posts yet. Click "Add New Blog" to create your first post!</p>
      </div>
    `;
    return;
  }
  
  blogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.setAttribute('data-id', blog.id);
    blogCard.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" class="blog-card-img">
      <div class="blog-card-content">
        <h3 class="blog-card-title">${blog.title}</h3>
        <p class="blog-card-excerpt">${blog.excerpt}</p>
        <div class="blog-card-meta">
          <span>${blog.category}</span>
          <span>${blog.date}</span>
        </div>
        <a href="#" class="read-more">Read more <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    blogGrid.appendChild(blogCard);
  });
  
  // Add click event to all blog cards
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('read-more') && 
          !e.target.classList.contains('fa-arrow-right') &&
          e.target.tagName !== 'A') {
        return;
      }
      
      e.preventDefault();
      const blogId = parseInt(card.getAttribute('data-id'));
      showBlogDetails(blogId);
    });
  });
}

// Show blog details
function showBlogDetails(blogId) {
  const blog = blogs.find(b => b.id === blogId);
  if (!blog) return;
  
  currentBlogId = blogId;
  
  document.getElementById('detailsImage').src = blog.image;
  document.getElementById('detailsTitle').textContent = blog.title;
  document.getElementById('detailsCategory').textContent = blog.category;
  document.getElementById('detailsDate').textContent = blog.date;
  document.getElementById('detailsReadTime').textContent = blog.readTime;
  document.getElementById('detailsBody').innerHTML = blog.content;
  
  // Show details and hide grid
  blogDetails.classList.remove('hidden');
  blogGrid.style.display = 'none';
  showAddBlogFormBtn.style.display = 'none';
  addBlogForm.classList.add('hidden');
  
  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show add blog form
function showAddForm() {
  addBlogForm.classList.remove('hidden');
  blogGrid.style.display = 'none';
  showAddBlogFormBtn.style.display = 'none';
  blogDetails.classList.add('hidden');
  blogForm.reset();
  currentBlogId = null;
}

// Hide add blog form
function hideAddForm() {
  addBlogForm.classList.add('hidden');
  blogGrid.style.display = 'grid';
  showAddBlogFormBtn.style.display = 'block';
}

// Back to blog list
function backToList() {
  blogDetails.classList.add('hidden');
  blogGrid.style.display = 'grid';
  showAddBlogFormBtn.style.display = 'block';
  currentBlogId = null;
}

// Add new blog
function addBlog(e) {
  e.preventDefault();
  
  const newBlog = {
    id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
    title: document.getElementById('blogTitle').value,
    category: document.getElementById('blogCategory').value,
    image: document.getElementById('blogImage').value,
    date: new Date().toLocaleDateString(),
    readTime: Math.floor(Math.random() * 5) + 3 + ' min read',
    excerpt: document.getElementById('blogContent').value.substring(0, 100) + '...',
    content: document.getElementById('blogContent').value
  };
  
  blogs.unshift(newBlog);
  displayBlogs();
  hideAddForm();
  showBlogDetails(newBlog.id);
}

// Edit current blog
function editBlog() {
  const blog = blogs.find(b => b.id === currentBlogId);
  if (!blog) return;
  
  document.getElementById('blogTitle').value = blog.title;
  document.getElementById('blogCategory').value = blog.category;
  document.getElementById('blogImage').value = blog.image;
  document.getElementById('blogContent').value = blog.content;
  
  showAddForm();
}

// Delete current blog
function deleteBlog() {
  if (!confirm('Are you sure you want to delete this blog post?')) return;
  
  blogs = blogs.filter(blog => blog.id !== currentBlogId);
  displayBlogs();
  backToList();
}

// Setup event listeners
function setupEventListeners() {
  // Show add form
  showAddBlogFormBtn.addEventListener('click', showAddForm);
  
  // Cancel add form
  cancelAddBlogBtn.addEventListener('click', hideAddForm);
  
  // Submit blog form
  blogForm.addEventListener('submit', addBlog);
  
  // Back to list
  backToBlogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    backToList();
  });
  
  // Edit blog
  editBlogBtn.addEventListener('click', editBlog);
  
  // Delete blog
  deleteBlogBtn.addEventListener('click', deleteBlog);
  
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.blog-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Optional: Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Optional: Load from localStorage
function loadFromLocalStorage() {
  const savedBlogs = localStorage.getItem('blogs');
  if (savedBlogs) {
    blogs = JSON.parse(savedBlogs);
  }
}
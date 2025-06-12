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

// Blog Data with localStorage fallback
// DOM Elements - (Keep all existing DOM element references)

// Updated Blog Data with 3 detailed posts
// DOM Elements - (Keep all existing DOM element references)

// Updated Blog Data with 3 detailed posts
let blogs = JSON.parse(localStorage.getItem('blogs')) || [
  {
    id: 1,
    title: "My Career Journey: From Aspiring Doctor to Tech Enthusiast",
    category: "Personal",
    image: "assets/img/blog.jpg",
    date: new Date().toLocaleDateString(),
    readTime: "8 min read",
    excerpt: "My complete journey from medical aspirations to becoming a full-stack developer and designer.",
    content: `
      <h2>My Complete Career Transformation</h2>
      <p>My professional journey has been anything but conventional. What began as a pursuit of medicine transformed into a passion for technology, design, and problem-solving through code.</p>
      
      <h3>Early Life and Education</h3>
      <p>Growing up in Chitral, Pakistan, I was surrounded by breathtaking mountains but limited educational resources. Despite this, I developed a strong curiosity about how things work. I completed my Pre-Medical (FSc) with the dream of becoming a doctor, influenced by my family's respect for the medical profession.</p>
      
      <h3>The Turning Point</h3>
      <p>After not securing admission to medical college, I faced a crossroads. During this period of reflection, I discovered my aptitude for problem-solving and creative thinking. I realized these skills could be channeled into computer science, leading me to enroll in an Associate Degree program at Air University, Islamabad.</p>
      
      <h3>Academic Pursuits</h3>
      <p>My computer science education opened new horizons. Key areas of study included:</p>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>Web Development fundamentals</li>
        <li>Database Management Systems</li>
        <li>Object-Oriented Programming</li>
      </ul>
      
      <h3>Professional Development</h3>
      <p>While studying, I began freelancing in graphic design and photo editing, which taught me:</p>
      <ul>
        <li>Client communication and requirements gathering</li>
        <li>Time management with multiple projects</li>
        <li>Quality control standards</li>
      </ul>
      
      <h3>Current Technical Skills</h3>
      <p>Today, my technical toolkit includes:</p>
      <ul>
        <li><strong>Frontend:</strong> Blazor .NET, React, HTML5, CSS3, JavaScript</li>
        <li><strong>Backend:</strong> C#, .NET Core, Entity Framework</li>
        <li><strong>Database:</strong> SQL Server, MySQL</li>
        <li><strong>Design:</strong> Adobe Photoshop, Illustrator, Premiere Pro</li>
      </ul>
      
      <h3>Future Goals</h3>
      <p>My roadmap includes:</p>
      <ol>
        <li>Completing my Computer Science degree</li>
        <li>Mastering cloud technologies (AWS, Azure)</li>
        <li>Developing expertise in AI/ML integration</li>
        <li>Building impactful software solutions</li>
      </ol>
      
      <p>This journey has taught me that career paths aren't always linear. What matters most is continuous learning, adaptability, and passion for your work.</p>
    `
  },
  {
    id: 2,
    title: "AI in Modern Technology: Tools and Applications",
    category: "Technology",
    image: "assets/img/ai.jpg",
    date: new Date().toLocaleDateString(),
    readTime: "10 min read",
    excerpt: "Comprehensive guide to understanding AI tools and their real-world applications across industries.",
    content: `
      <h2>The AI Revolution: Transforming Industries</h2>
      <p>Artificial Intelligence has evolved from theoretical concept to practical toolset that's reshaping every industry. Here's an in-depth look at current AI applications and tools.</p>
      
      <h3>Core AI Technologies</h3>
      <p>Modern AI encompasses several key technologies:</p>
      <ul>
        <li><strong>Machine Learning:</strong> Algorithms that improve through experience</li>
        <li><strong>Natural Language Processing (NLP):</strong> Human-computer language interaction</li>
        <li><strong>Computer Vision:</strong> Image and video understanding</li>
        <li><strong>Neural Networks:</strong> Brain-inspired problem solving</li>
      </ul>
      
      <h3>Essential AI Tools and Their Purposes</h3>
      <table>
        <tr>
          <th>Tool</th>
          <th>Category</th>
          <th>Primary Use</th>
        </tr>
        <tr>
          <td>TensorFlow</td>
          <td>ML Framework</td>
          <td>Building and training ML models</td>
        </tr>
        <tr>
          <td>OpenAI GPT</td>
          <td>NLP</td>
          <td>Text generation and understanding</td>
        </tr>
        <tr>
          <td>PyTorch</td>
          <td>ML Framework</td>
          <td>Research and production deployment</td>
        </tr>
        <tr>
          <td>IBM Watson</td>
          <td>AI Suite</td>
          <td>Enterprise AI solutions</td>
        </tr>
      </table>
      
      <h3>Industry Applications</h3>
      <p><strong>Healthcare:</strong> AI is revolutionizing diagnostics with tools like:</p>
      <ul>
        <li>Image recognition for X-rays and MRIs</li>
        <li>Predictive analytics for patient outcomes</li>
        <li>Drug discovery acceleration</li>
      </ul>
      
      <p><strong>Finance:</strong> Applications include:</p>
      <ul>
        <li>Fraud detection systems</li>
        <li>Algorithmic trading</li>
        <li>Risk assessment models</li>
      </ul>
      
      <h3>Getting Started with AI</h3>
      <p>For beginners looking to enter AI:</p>
      <ol>
        <li>Learn Python programming</li>
        <li>Study linear algebra and statistics</li>
        <li>Experiment with pre-trained models</li>
        <li>Contribute to open-source AI projects</li>
      </ol>
      
      <p>AI is not just the future—it's transforming the present across every sector of the global economy.</p>
    `
  },
  {
    id: 3,
    title: "Skills vs Grades: What Truly Matters in Tech Careers",
    category: "Education",
    image: "assets/img/svgpa.webp",
    date: new Date().toLocaleDateString(),
    readTime: "7 min read",
    excerpt: "An in-depth analysis of the skills-grade debate in technology education and hiring.",
    content: `
      <h2>The Great Debate: Academic Performance vs Practical Skills</h2>
      <p>In the technology sector, there's an ongoing discussion about the relative importance of academic grades versus practical skills. Having experienced both worlds, here's my perspective.</p>
      
      <h3>The Case for Grades</h3>
      <p>Academic performance does have value:</p>
      <ul>
        <li><strong>Foundation Building:</strong> Grades often reflect understanding of core concepts</li>
        <li><strong>Initial Screening:</strong> Many companies use GPA as a first filter</li>
        <li><strong>Demonstrated Commitment:</strong> Consistent performance shows work ethic</li>
      </ul>
      
      <h3>The Power of Practical Skills</h3>
      <p>In tech careers, hands-on abilities often matter more:</p>
      <ul>
        <li><strong>Immediate Contribution:</strong> Skilled hires can deliver value faster</li>
        <li><strong>Problem-Solving:</strong> Real-world challenges differ from academic ones</li>
        <li><strong>Evolving Technologies:</strong> Classroom content often lags industry trends</li>
      </ul>
      
      <h3>Industry Perspectives</h3>
      <p>According to recent surveys:</p>
      <ul>
        <li>72% of tech hiring managers prioritize portfolios over GPAs</li>
        <li>85% value completed projects during interviews</li>
        <li>Only 38% consider GPA very important for technical roles</li>
      </ul>
      
      <h3>Building the Ideal Profile</h3>
      <p>The most successful candidates combine both:</p>
      <table>
        <tr>
          <th>Academic Focus</th>
          <th>Skill Development</th>
        </tr>
        <tr>
          <td>Core CS fundamentals</td>
          <td>Programming languages</td>
        </tr>
        <tr>
          <td>Theoretical knowledge</td>
          <td>Framework experience</td>
        </tr>
        <tr>
          <td>Algorithm understanding</td>
          <td>Project implementation</td>
        </tr>
      </table>
      
      <h3>Recommendations for Students</h3>
      <ol>
        <li>Maintain a minimum GPA threshold (3.0+ in most cases)</li>
        <li>Build a portfolio with 3-5 substantial projects</li>
        <li>Contribute to open source or freelance work</li>
        <li>Develop communication and teamwork skills</li>
      </ol>
      
      <p>The ideal approach is balanced - strong enough grades to open doors, with exceptional skills to walk through them.</p>
    `
  }
];

// Keep all remaining JavaScript code exactly the same
// (All the functions from displayBlogs() through setupEventListeners() 
// should remain unchanged from your original file)

// Keep all remaining JavaScript code exactly the same
// (All the functions from displayBlogs() through setupEventListeners() 
// should remain unchanged from your original file)
let currentBlogId = null;

// Initialize the blog
document.addEventListener('DOMContentLoaded', () => {
  displayBlogs();
  setupEventListeners();
});

// Save blogs to localStorage
function saveBlogs() {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}

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
  
  blogDetails.classList.remove('hidden');
  blogGrid.style.display = 'none';
  showAddBlogFormBtn.style.display = 'none';
  addBlogForm.classList.add('hidden');
  
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
  
  // Reset form completely
  blogForm.reset();
  blogForm.onsubmit = addBlog; // Reset to default handler
  
  // Force navbar color (just in case)
  document.querySelector('.blog-navbar').style.backgroundColor = '#3E6FF4';
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
  saveBlogs();
  displayBlogs();
  hideAddForm();
  showBlogDetails(newBlog.id);
}

// Edit current blog
function editBlog() {
  const blog = blogs.find(b => b.id === currentBlogId);
  if (!blog) return;

  // Store original form submit handler
  const originalSubmit = blogForm.onsubmit;

  // Populate form with existing values
  document.getElementById('blogTitle').value = blog.title;
  document.getElementById('blogCategory').value = blog.category;
  document.getElementById('blogImage').value = blog.image;
  document.getElementById('blogContent').value = blog.content;

  // Show the edit form
  addBlogForm.classList.remove('hidden');
  blogDetails.classList.add('hidden');
  blogGrid.style.display = 'none';
  showAddBlogFormBtn.style.display = 'none';

  // Temporarily change submit handler
  blogForm.onsubmit = function(e) {
    e.preventDefault();
    
    // Update blog properties
    const updatedBlog = {
      ...blog,
      title: document.getElementById('blogTitle').value,
      category: document.getElementById('blogCategory').value,
      image: document.getElementById('blogImage').value,
      content: document.getElementById('blogContent').value,
      excerpt: document.getElementById('blogContent').value.substring(0, 100) + '...'
    };

    // Update in array
    const index = blogs.findIndex(b => b.id === currentBlogId);
    if (index !== -1) {
      blogs[index] = updatedBlog;
      saveBlogs();
    }

    // Restore original handler
    blogForm.onsubmit = originalSubmit;
    
    // Return to blog view
    displayBlogs();
    showBlogDetails(currentBlogId);
    return false;
  };
}

// Delete current blog
function deleteBlog() {
  if (!confirm('Are you sure you want to delete this blog post?')) return;
  
  blogs = blogs.filter(blog => blog.id !== currentBlogId);
  saveBlogs();
  displayBlogs();
  backToList();
}

// Setup event listeners
function setupEventListeners() {
  showAddBlogFormBtn.addEventListener('click', showAddForm);
  cancelAddBlogBtn.addEventListener('click', hideAddForm);
  blogForm.addEventListener('submit', addBlog);
  
  backToBlogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    backToList();
  });
  
  editBlogBtn.addEventListener('click', editBlog);
  deleteBlogBtn.addEventListener('click', deleteBlog);
  
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  document.querySelectorAll('.blog-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}
// JavaScript for Blog Details
const blogCards = document.querySelectorAll('.blog-card');
const blogDetailsSection = document.querySelector('.blog-details');
const blogDetailsContent = document.querySelector('.blog-details-content');
const backToBlogLink = document.querySelector('.back-to-blog');
const blogSection = document.querySelector('.blog-section');

// Sample Blog Data
const blogData = {
  1: {
    image: 'assets/img/blog.jpg', // Replace with your image URL
    title: 'My Journey: From Aspiring Doctor to Tech Enthusiast',
    content: `
      <p><strong>Published on:</strong> 10/3/2025</p>
      <p>
        Life is a journey filled with twists, turns, and unexpected opportunities. My story is no different. From dreaming of becoming a doctor to finding my passion in technology, my journey has been one of resilience, adaptability, and continuous learning.
      </p>
      <h3>Early Life – Growing Up in Chitral</h3>
      <p>
        I was born and raised in <strong>Chitral</strong>, a picturesque region in northern Pakistan surrounded by majestic mountains and serene valleys. Growing up in a small village, life was simple yet fulfilling. From a young age, I was curious about the world around me, always eager to learn and explore new things.
      </p>
      <h3>The Dream of Becoming a Doctor</h3>
      <p>
        Like many students in Pakistan, I aspired to become a <strong>doctor</strong>. I enrolled in <strong>Pre-Medical (FSc)</strong> and worked hard to achieve my dream. However, despite my efforts, I couldn’t secure admission to a medical college. It was a challenging time, and I felt lost, unsure of what to do next.
      </p>
      <h3>A New Direction – Discovering Computer Science</h3>
      <p>
        After the disappointment of not getting into medical school, I took some time to reflect on my interests and strengths. I realized that my passion for problem-solving and creativity could be channeled into another field: <strong>Computer Science</strong>.
      </p>
      <p>
        In 2021, I made the bold decision to shift my career path and enrolled in an <strong>Associate Degree in Computer Science</strong> at <strong>Air University, Islamabad</strong>. This was a turning point in my life. Moving from the serene mountains of Chitral to the bustling city of Islamabad was a big change, but I was excited about the opportunities ahead.
      </p>
      <h3>Balancing Studies and Freelancing</h3>
      <p>
        During my third semester, I started <strong>freelancing</strong> to gain practical experience and support myself financially. I worked on projects involving <strong>photo editing</strong> and <strong>graphic design</strong>, which helped me build a portfolio and attract clients from around the world.
      </p>
      <h3>Professional Experience – Photo Editor and Quality Controller</h3>
      <p>
        In 2023, I landed my first job as a <strong>Photo Editor and Quality Controller</strong> in the wedding photography industry. My role involved enhancing engagement photos, editing wedding albums, and ensuring that the final deliverables met the highest standards of quality.
      </p>
      <h3>Expanding My Skill Set – Video Editing and Graphic Design</h3>
      <p>
        While working as a photo editor, I also ventured into <strong>video editing</strong> and <strong>graphic design</strong>. I taught myself how to use tools like Adobe Premiere Pro, After Effects, and Photoshop to create stunning visuals and animations.
      </p>
      <h3>Current Status – Completing My Degree and Looking Ahead</h3>
      <p>
        As of now, I have completed my <strong>4th semester</strong> of the Associate Degree in Computer Science. After completing my degree, I plan to pursue an <strong>internship</strong> to gain hands-on experience in the tech industry.
      </p>
      <h3>Future Goals – Continuous Learning and Growth</h3>
      <p>
        Looking ahead, I aim to enhance my skills in <strong>full-stack development</strong>, explore <strong>cloud computing</strong>, and refine my <strong>UI/UX design</strong> expertise. I also plan to expand my freelancing and entrepreneurship ventures.
      </p>
      <h3>Let’s Connect!</h3>
      <p>
        I’m passionate about sharing my journey and helping others who are navigating similar paths. You can find my projects on <a href="https://github.com/naqiib">GitHub</a> and follow my design work on <a href="#">Behance</a>. Let’s connect and build something amazing together!
      </p>
    `
  },

  2: {
    image: 'assets/img/ai.jpg', // Replace with AI-related image
    title: 'The Future of AI in Business',
    content: `
      <p><strong>Published on:</strong> 13/3/2025</p>
      <p>
        Artificial Intelligence (AI) is no longer a futuristic concept—it’s here, and it’s transforming industries. From automating repetitive tasks to providing data-driven insights, AI is reshaping the way businesses operate. In this blog, we explore how AI is being used today and what the future holds for businesses leveraging this powerful technology.
      </p>
      <h3>Introduction to AI in Business</h3>
      <p>
        AI is revolutionizing industries by automating processes, improving efficiency, and enabling data-driven decision-making. From healthcare to finance, businesses are leveraging AI to stay competitive.
      </p>
      <h3>Current Trends in AI</h3>
      <p>
        Some of the most exciting trends in AI include automation, predictive analytics, and AI-powered customer service. These technologies are helping businesses save time, reduce costs, and improve customer experiences.
      </p>
      <h3>The Future of AI</h3>
      <p>
        The future of AI is bright, with new opportunities emerging in fields like machine learning, natural language processing, and robotics. However, ethical considerations and challenges must be addressed to ensure responsible AI adoption.
      </p>
      <h3>How to Get Started with AI</h3>
      <p>
        Businesses can start by exploring AI tools and platforms, such as TensorFlow, IBM Watson, and Google Cloud AI. Upskilling employees in AI and data science is also crucial for long-term success.
      </p>
      <h3>Conclusion</h3>
      <p>
        AI is not just a trend—it’s a game-changer. Businesses that embrace AI today will lead the market tomorrow.
      </p>
    `
  },

  
  3: {
    image: 'assets/img/svgpa.webp', // Replace with skill vs. CGPA image
    title: 'Skill vs. CGPA: What Matters More?',
    content: `
      <p><strong>Published on:</strong> 14/3/2025</p>
      <p>
        In the debate between skills and CGPA, which one holds more weight in today’s job market? While a high CGPA may open doors, practical skills are often the key to long-term success. In this blog, we explore the importance of balancing academics with skill development and how to thrive in a competitive world.
      </p>
      <h3>The Role of CGPA</h3>
      <p>
        A good CGPA can help you get shortlisted for jobs or higher education. It demonstrates your ability to learn and perform well in academic settings. However, relying solely on CGPA can limit your opportunities, as employers increasingly value practical experience and skills.
      </p>
      <h3>The Importance of Skills</h3>
      <p>
        Practical skills are essential for success in today’s job market. Employers look for candidates who can apply their knowledge to real-world problems. Skills like programming, design, communication, and problem-solving are highly sought after.
      </p>
      <h3>Balancing CGPA and Skills</h3>
      <p>
        Balancing academics and skill development can be challenging, but it’s not impossible. Here are some tips:
        <ul>
          <li>Prioritize time management to excel in both academics and skill-building.</li>
          <li>Participate in internships, freelancing, and projects to gain practical experience.</li>
          <li>Join clubs, attend workshops, and network with professionals in your field.</li>
        </ul>
      </p>
      <h3>Real-Life Examples</h3>
      <p>
        Many successful individuals have achieved great careers despite average academic performance. For example, [Insert Example]. These stories highlight the importance of skills, networking, and continuous learning.
      </p>
      <h3>Conclusion</h3>
      <p>
        CGPA is important, but skills are the real game-changer. Focus on building a strong foundation of both to thrive in today’s competitive world. Remember, your journey is unique—balance academics with skill development to create your own path to success.
      </p>
    `
  }
};

// Show Blog Details
blogCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const blogId = card.getAttribute('data-id');
    const blog = blogData[blogId];

    blogDetailsContent.querySelector('img').src = blog.image;
    blogDetailsContent.querySelector('h2').textContent = blog.title;
    blogDetailsContent.querySelector('p').innerHTML = blog.content; // Use innerHTML to render HTML content

    blogDetailsSection.classList.add('active');
    blogSection.classList.remove('active');
  });
});

// Back to Blog
backToBlogLink.addEventListener('click', (e) => {
  e.preventDefault();
  blogDetailsSection.classList.remove('active');
  blogSection.classList.add('active');
});
document.addEventListener("DOMContentLoaded", function () {
  const resumeLink = document.getElementById("resume-link");
  const header = document.getElementById("header");
  const resumeSection = document.getElementById("resume");
  resumeLink.addEventListener("click", function (event) {
    header.style.display = "none";
    resumeSection.style.display = "inherit";
    resumeSection.style.visibility = "visible";
  });

  const projectLink = document.getElementById("project-link");
  const projectSection = document.getElementById("project");
  projectLink.addEventListener("click", function (event) {
    header.style.display = "none";
    projectSection.style.display = "block";
    projectSection.style.visibility = "visible";
  });

  const aboutLink = document.getElementById("about-link");
  const aboutSection = document.getElementById("about");
  aboutLink.addEventListener("click", function (event) {
    header.style.display = "none";
    aboutSection.style.display = "block";
    aboutSection.style.visibility = "visible";
  });

  const contactLink = document.getElementById("contact-link");
  const contactSection = document.getElementById("contact");
  contactLink.addEventListener("click", function (event) {
    header.style.display = "none";
    contactSection.style.display = "block";
    contactSection.style.visibility = "visible";
  });

  if (window.location.hash === "#resume") {
    header.style.display = "none";
    resumeSection.style.display = "inherit";
    resumeSection.style.visibility = "visible";
  } else if (window.location.hash === "#project") {
    header.style.display = "none";
    projectSection.style.display = "block";
    projectSection.style.visibility = "visible";
  } else if (window.location.hash === "#about") {
    header.style.display = "none";
    aboutSection.style.display = "block";
    aboutSection.style.visibility = "visible";
  } else if (window.location.hash === "#contact") {
    header.style.display = "none";
    contactSection.style.display = "block";
    contactSection.style.visibility = "visible";
  }

  const projectsData = {
    article_id: "project",
    projects: [
      {
        title: "Diava",
        description:
          "Diava aims to be the go-to platform for book lovers by integrating gamified features and social engagement tools. We want to provide a motivating way for users to track their reading progress while fostering a vibrant community. By making reading more interactive, we aim to encourage people to read consistently and engage deeply with their books.",
        technologies: ["React.js", "Supabase", "Hugging Face", "Tailwind CSS"],
        links: {
          github: "https://github.com/anitaprova/Diava",
        },
        image: "images/homepage.png",
      },

      {
        title: "Compound Compass",
        description:
          "Our web app takes a SMILES string, extracts the scaffold, and performs similarity analysis to find similar compounds. In addition, it can take voice commands and return the corresponding SMILES string.",
        technologies: ["Python", "RDKit", "HTML", "CSS", "Flask"],
        links: {
          github: "https://github.com/anitaprova/jasy-gals",
        },
        image: "images/compound_compass.jpg",
      },
      {
        title: "Art Restoration",
        description:
          "We developed a machine learning model from scratch for image restoration, utilizing UNET to deblur, denoise, and brighten images, restoring them to their original quality.",
        technologies: ["Python", "Tensorflow", "Streamlit", "NumPy", "Pandas"],
        links: {
          github: "https://github.com/anitaprova/CTP-Project",
          website: "https://artrestoration.streamlit.app/",
        },
        image: "images/art_restoration.png",
      },
      {
        title: "HawkHelper",
        description:
          "We created a chatbot made for and by Hunter students. It will give students in-depth accurate information on mental health, food assistance, housing initiatives, and more quickly, efficiently, and accurately. By simply asking the chatbot any question regarding resources, students can receive answers almost instantaneously without the extra clicks and tabs.",
        technologies: [
          "React.js",
          "Express.js",
          "Python",
          "Gemini API",
          "HTML",
          "CSS",
        ],
        links: {
          github: "https://github.com/zaraamerr/cuny-resource-chatbot",
          devpost: "https://devpost.com/software/hawkhelper",
        },
        gif: "images/hawkhelper.gif",
      },
      {
        title: "NYC Culture Map",
        description:
          "This project was a collaborative effort with a team of four members for the CUNY hackathon. Over the course of three days, we employed technologies such as HTML, CSS, React, JS, LeafLet, and Google OAuth. The web app aims to provide an immersive exploration of New York City's diverse neighborhoods, highlighting their cultural richness and heritage. I utilized React and Leaflet to create an interactive map experience for users.",
        technologies: ["HTML", "CSS", "React", "JS", "LeafLet", "Google OAuth"],
        links: {
          devpost: "https://devpost.com/software/nyc-explorer",
          github: "https://github.com/Aaleia/UrbanTapestry",
        },
        gif: "images/map.gif",
      },
      {
        title: "Joystick Junction",
        description:
          "Over the course of 10 weeks, as part of my final project for the Intermediate Web Development Course at Codepath, I designed and developed a website using React where users can discuss their favorite video games. The website includes features such as user posts, where users can create, edit, and delete their posts, a commenting system allowing users to comment on posts made by others, and filtering options to sort posts by most popular and by time.",
        technologies: ["React"],
        links: {
          github: "https://github.com/anitaprova/codepath-finalproject",
        },
        gif: "images/joystick junction.gif",
      },
      {
        title: "Book Search",
        description:
          "This project was a collaborative effort with a team of three members over the course of one month. We employed technologies such as SvelteKit, Google Firebase, Google Firestore, Vite, HTML, CSS, and JavaScript. The application utilized Google Books APIs to facilitate search functionalities. I led the implementation of front-end components using SvelteKit and styled the application with CSS. The project was showcased at Codefest 2024 and was a part of a Google mentorship program, where we received guidance from industry experts to improve our technical skills and project management abilities.",
        technologies: [
          "SvelteKit",
          "Google Firebase",
          "Google Firestore",
          "Vite",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        links: {
          github: "https://github.com/Justinw21/dabooks",
        },
      },
    ],
  };

  // const projectsContainer = document.getElementById("projects-container");
  // projectsData.projects.forEach((project) => {
  //   const projectDiv = document.createElement("div");

  //   const title = document.createElement("h3");
  //   title.textContent = project.title;
  //   projectDiv.appendChild(title);

  //   const description = document.createElement("p");
  //   description.textContent = project.description;
  //   projectDiv.appendChild(description);

  //   const techList = document.createElement("p");
  //   techList.textContent =
  //     "Technologies Used: " + project.technologies.join(", ");
  //   projectDiv.appendChild(techList);

  //   const linkList = document.createElement("p");
  //   if (project.links.github) {
  //     const githubLink = document.createElement("a");
  //     githubLink.href = project.links.github;
  //     githubLink.textContent = "View the Github Here";
  //     const breakLine = document.createElement("br");
  //     linkList.appendChild(githubLink);
  //     linkList.appendChild(breakLine);
  //   }

  //   if (project.links.website) {
  //     const websiteLink = document.createElement("a");
  //     websiteLink.href = project.links.website;
  //     websiteLink.textContent = "View the Website Here";
  //     const breakLine = document.createElement("br");
  //     linkList.appendChild(websiteLink);
  //     linkList.appendChild(breakLine);
  //   }

  //   if (project.links.devpost) {
  //     const devpostLink = document.createElement("a");
  //     devpostLink.href = project.links.devpost;
  //     devpostLink.textContent = "View Devpost Here";
  //     const breakLine = document.createElement("br");
  //     linkList.appendChild(devpostLink);
  //     linkList.appendChild(breakLine);
  //   }
  //   projectDiv.appendChild(linkList);

  //   if (project.image) {
  //     const image = document.createElement("img");
  //     image.src = project.image;
  //     image.alt = "Image of " + project.title;
  //     projectDiv.appendChild(image);
  //   }

  //   if (project.gif) {
  //     const gif = document.createElement("img");
  //     gif.src = project.gif;
  //     projectDiv.appendChild(gif);
  //   }

  //   projectsContainer.appendChild(projectDiv);
  //   const breakLine = document.createElement("br");
  //   linkList.appendChild(breakLine);
  // });

  const resumeData = {
    education: [
      {
        degree: "Bachelor of Arts in Computer Science",
        institution: "Hunter College",
        graduationDate: "August 2022 - Dec 2025",
      },
    ],
    skills: [
      "C++",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "React",
      "Java",
      "MySQL",
    ],
    experiences: [
      {
        title: "Software Engineer Intern",
        company: "PwC",
        location: "New York, NY",
        dates: "June 2025 - Aug 2025",
        responsibilities: [
          "Developed an AI agent using Python to analyze code and generate visual representations automatically",
          "Containerized components with Docker to support scalable deployment and consistent development environments",
          "Utilized Langflow to integrate large language models into the development process and create a proof of concept",
        ],
      },
      {
        title: "Web Master",
        company: "Women in Computer Science Club (WiCS)",
        location: "New York, NY",
        dates: "Feb 2025 - Present",
        responsibilities: [
          "Rebuilt the WiCS website using React, TypeScript, Next.js, and shadcn for improved performance and user experience",
          "Designed and implemented an admin dashboard using Firebase to enable streamlined content management",
        ],
      },
      {
        title: "Fellow, Software Development/Data Science",
        company: "CUNY Tech Prep",
        location: "New York, NY",
        dates: "Jul 2024 - May 2025",
        responsibilities: [
          "Selected for a competitive data science fellowship with students from across the 11 CUNY senior colleges",
          "Mastered Python 3, Jupyter Notebooks, Pandas, Numpy, Scikit-learn, and SQL, and learned best practices in EDA, feature engineering, data processing, statistical modeling, data visualization, machine learning, data science process, and big data",
        ],
      },
      {
        title: "Products and Technology Intern",
        company: "PwC",
        location: "New York, NY",
        dates: "June 2024 - July 2024",
        responsibilities: [
          "Presented user experience improvements and marketing strategies for a pro bono case involving a nonprofit in education",
          "Leveraged Microsoft Power BI and Excel to visualize, clean, and analyze data for PowerPoint presentations in pro bono case",
          "Worked on a case study independently, analyzing key findings and presenting actionable insights",
        ],
      },
      {
        title: "Customer Service",
        company: "DigitalJetstream",
        location: "Remote",
        dates: "August 2022 - Present",
        responsibilities: [
          "Managed and executed targeted email campaigns to engage a customer list of 100+ individuals, resulting in a 5% increase in open rates",
          "Provided technical support and assistance to customers by enhancing website functionality through Joomla!",
          "Supervised and mentored a team of interns by overseeing their activities and providing constructive feedback",
        ],
      },
      {
        title: "Assistant Web Developer",
        company: "DigitalJetstream",
        location: "Remote",
        dates: "July 2022 - August 2022",
        responsibilities: [
          "Ran a website through Joomla! by designing the site, adding content, and handling updates",
          "Uploaded a series of engaging, well-researched articles",
          "Conducted comprehensive research across diverse subjects, including artificial intelligence advancements",
        ],
      },
      {
        title: "Systems Intern",
        company: "Almod Diamonds",
        location: "New York, NY",
        dates: "July 2021 - August 2021",
        responsibilities: [
          "Created and tested 50+ PC golden images with Sysprep and Acronis True Image for workstation rollout in multiple locations",
          "Imported and cleaned data using Excel",
          "Created comprehensive documentation for all projects",
        ],
      },
    ],
  };

  const resumeContainer = document.getElementById("resume-container");

  const link = document.createElement("a");
  link.href = "/images/Resume.pdf";
  link.target = "_blank";
  link.textContent = "Link to Resume.pdf";
  resumeContainer.appendChild(link);

  // === Education ===
  const schoolTitle = document.createElement("h3");
  schoolTitle.textContent = "Education";
  resumeContainer.appendChild(schoolTitle);

  const schoolInfo = document.createElement("p");
  schoolInfo.innerHTML = `
  <b>${resumeData.education[0].institution}</b> —
  <i>${resumeData.education[0].degree}</i> <br />
  <i>${resumeData.education[0].graduationDate}</i><br />
`;
  resumeContainer.appendChild(schoolInfo);

  // === Technical Skills ===
  const skillsTitle = document.createElement("h3");
  skillsTitle.textContent = "Technical Skills";
  resumeContainer.appendChild(skillsTitle);

  const skillsInfo = document.createElement("p");
  skillsInfo.innerHTML = resumeData.skills
    .map((skill) => `➸ ${skill}`)
    .join("<br />");
  resumeContainer.appendChild(skillsInfo);

  // === Experience ===
  const expTitleMain = document.createElement("h3");
  expTitleMain.textContent = "Experience";
  resumeContainer.appendChild(expTitleMain);

  resumeData.experiences.forEach((exp) => {
    const expP = document.createElement("p");
    expP.innerHTML = `
    <b>${exp.company}</b> — <i>${exp.title}</i> <br />
    <i>${exp.dates}</i><br />
    ${exp.responsibilities.map((r) => `➸ ${r}`).join("<br />")}
  `;
    resumeContainer.appendChild(expP);
  });
});
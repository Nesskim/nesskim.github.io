// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Vanessa",
  lastName: "Kim",
  message: " Test Analyst | Insurance Proffesional | SheCodes Student . ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Nesskim",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vanessajkim/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nesskim.png"),
  imageSize: 375,
  message:
    "My name is Vanessa Kim. I am a dedicated Test Anaylst at Auto & General with a history of meeting company goals utilizing consistent and organized practices. I am skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand. In my spare time, I ride motorbikes, garden and play video games.",
  resume: "https://drive.google.com/file/d/1YfRgD3QDER78rPM7qMOQMKLIKOCJoqUd/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "Nesskim"
  reposLength: 2,
  specificRepos: ["SheCodesAus/she-codes-group-project-api-fullstack-pancake", "SheCodesAus/she-codes-group-project-frontend-fullstack-pancake"],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vanessa.jade.kim@hotmail.com",
};



// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, getInTouch };

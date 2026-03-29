export const siteConfig = {
  name: "Saeed",
  title: "PhD Candidate | AI & Autonomous Driving",
  // Find your ID at semanticscholar.org — search your name, click your profile, copy the number from the URL
  semanticScholarId: "2325726503",
  description: "Portfolio website of Saeed Rahmani - PhD candidate specializing in Foundation Models, Reinforcement Learning, and Autonomous Systems",
  accentColor: "#1d4ed8",
  social: {
    email: "saeed.rahmani@cs.ox.ac.uk",
    linkedin: "https://www.linkedin.com/in/saeedrahmani/",
    twitter: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    github: "https://github.com/SaeedRahmani",
  },
  aboutMe:
    "I am a PhD candidate, expected to graduate in January 2026, with experience and interest in artificial intelligence for robotics and autonomous vehicles. I have hands-on experience with <strong>foundation models</strong> (both LLMs and VLMs), <strong>reinforcement learning</strong> , and <strong>world models</strong> for robot learning and verification, especially in complex and uncertain environments. My research focuses on developing AI systems for <strong>autonomous vehicles</strong> in mixed-autonomy traffic and <strong>safety and efficiency verification</strong> of automated vehicles in <strong>simulation</strong>.",
  skills: [
    "Python (PyTorch, TensorFlow, JAX)",
    "C++",
    "Julia",
    "Gym",
    "Waymax",
    "GPUDrive",
  ],
  experience: [
    {
      company: "Toyota Motors Europe, Belgium",
      title: "VLMs and Transformers, Research Intern",
      dateRange: "Oct. 2025 – present",
      logo: "/logos/toyota.png",
      images: ["/images/toyota-1.jpg", "/images/toyota-2.jpg"],
      bullets: [
        "Training transformer-based vision models for predicting abnormal scenarios from dashcam videos",
        "Conducting a comparative analysis of rule-based vs. AI-based anomaly detection methods in autonomous systems",
      ],
    },
    {
      company: "Oxford University, UK",
      title: "Multi-agent Learning, Exchange PhD",
      dateRange: "Aug. 2025 - present",
      logo: "/logos/oxford.png",
      images: ["/images/oxford-1.jpg", "/images/oxford-2.jpg"],
      bullets: [
        "Developed a Self-play MARL framework for improving the performance of agents transferred from one environment to another, achieving 80-120% success rate improvement",
        "Implemented behavior cloning (BC) policies in complex and uncertain environments with more than 60 agents in each scenario",
      ],
    },
    {
      company: "BMW Group, Germany",
      title: "Simulation Agent Modeler, Visiting Research Engineer",
      dateRange: "Aug. 2024",
      logo: "/logos/bmw.png",
      images: ["/images/bmw-1.jpg", "/images/bmw-2.jpg"],
      bullets: [
        "Debugged a simulation agent model and an autonomous control algorithm for safety-critical scenarios",
        "Designed and implemented 14 challenging scenarios for safety validation of autonomous vehicles",
      ],
    },
    {
      company: "TU Delft, Netherlands",
      title: "PhD Candidate",
      dateRange: "Jan. 2022 – present",
      logo: "/logos/tudelft.png",
      images: ["/images/tudelft-1.jpg", "/images/tudelft-2.jpg"],
      bullets: [
        "Developed an award-winning real-time MPC-based simulation framework for autonomous vehicles (IEEE ITSC 2023 Award Winner)",
        "Leveraged Foundation Models (VLMs) for critical trajectory failure detection with 90%+ accuracy on zero-shot learning",
        "Developed a hybrid MPC-RL framework for motion planning with 50% higher efficiency",
        "Co-designed simAgent algorithms for the EU Horizon 2020 flagship Project Hi-Drive",
      ],
    },
  ],
  projects: [
    {
      name: "Imitation Learning for AVs Inside World Models",
      description:
        "RNN-based World Model for training autonomous vehicles through imitation learning in complex driving scenarios.",
      link: "https://github.com/SaeedRahmani/Dream_Imitation_AVs",
      skills: ["Python", "PyTorch", "World Models"],
      emoji: "🌍",
      image: "",
    },
    {
      name: "Simulation Agents for Mixed-Autonomy Traffic",
      description:
        "Real-time simulation framework for evaluating autonomous vehicles in mixed traffic scenarios with human-driven vehicles.",
      link: "https://github.com/SaeedRahmani/AV-Simulation-at-Intersections",
      skills: ["Python", "C++", "Reinforcement Learning", "MPC"],
      emoji: "🚦",
      image: "",
    },
    {
      name: "Edge Case Detection for Autonomous Driving",
      description:
        "Foundation model-based system for detecting critical edge cases in autonomous driving systems (Hi-Drive Project).",
      link: "https://github.com/SaeedRahmani/edge_case_detection",
      skills: ["VLMs", "Deep Learning", "Python"],
      emoji: "🔍",
      image: "",
    },
  ],
  news: [
    {
      date: "Oct. 2025",
      html: `Started as a Research Intern at <strong>Toyota Motors Europe</strong>, Belgium, working on VLMs and Transformers for anomaly detection in autonomous driving.`,
    },
    {
      date: "Aug. 2025",
      html: `Joined <strong>Oxford University</strong> as an Exchange PhD student, working with Prof. Shimon Whiteson and Prof. Jakob Foerster on multi-agent reinforcement learning.`,
    },
    {
      date: "Aug. 2025",
      html: `Received the <strong>TU Delft TMI Collaborative Research Grant</strong> for 2025.`,
    },
    {
      date: "2025",
      html: `Paper accepted at <strong>IEEE IROS 2025</strong> on ethical decision-making in automated vehicles.`,
    },
    {
      date: "Aug. 2024",
      html: `Visited <strong>BMW Group</strong>, Germany as a Research Engineer for autonomous driving simulation and safety validation.`,
    },
    {
      date: "2023",
      html: `Awarded the <strong>Best Student Paper Runner-up Award</strong> at IEEE ITSC 2023, Spain.`,
    },
    {
      date: "Jan. 2022",
      html: `Started PhD at <strong>TU Delft</strong>, Netherlands, advised by Prof. Bart van Arem and Dr. Simeon C. Calvert.`,
    },
  ],
  education: [
    {
      school: "Oxford University, United Kingdom",
      degree: "PhD Candidate (Exchange)",
      dateRange: "Aug 2025 - Jan 2026",
      achievements: [
        "Research Topic: Multi-agent self-play reinforcement learning for generalizable agents",
        "Advisors: Prof. Shimon Whiteson, Prof. Jakob Foerster",
      ],
    },
    {
      school: "Delft University of Technology, Netherlands",
      degree: "PhD Candidate in AI for Autonomous Vehicles",
      dateRange: "Jan 2022 - Jan 2026",
      achievements: [
        "Advisors: Prof. Bart van Arem, Dr. Simeon C. Calvert",
        "IES IROS SYPA Award 2025",
        "TU Delft TMI Grant for Collaborative Research 2025",
      ],
    },
    {
      school: "Iran University of Science and Technology",
      degree: "MSc. (Cum Laude, Dean's Award)",
      dateRange: "2014 - 2017",
      achievements: [
        "GPA: 3.94/4.00",
        "Graduate Student Dean's Award",
        "Elite Graduate Student Award – Iran's National Elites Foundation",
      ],
    },
    {
      school: "Iran University of Science and Technology",
      degree: "BSc. (Cum Laude)",
      dateRange: "2010 - 2014",
      achievements: ["GPA: 3.67/4.00"],
    },
  ],
  publications: [
    {
      title:
        "Graph Neural Networks for Intelligent Transportation Systems: A Survey",
      authors: "Rahmani, S., Baghbani, A., Bouguila, N., & Patterson, Z.",
      venue: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2023",
      type: "Journal",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
    {
      title:
        "🏆 A Bi-Level Real-Time Microsimulation Framework for Modeling Two-Dimensional Vehicular Maneuvers",
      authors:
        "Rahmani, S., Neumann, J., Elbert Suryana, L., Theunisse, C., C. Calvert, S., van Arem, B.",
      venue: "IEEE ITSC 2023, Spain",
      year: "2023",
      type: "Conference",
      award: "Best Student Paper Runner-up Award",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
    {
      title:
        "A Human-Reasoning Supervision Framework for Ethical Decision-Making in Automated Vehicles",
      authors:
        "Elbert Suryana, L., Rahmani, S., C. Calvert, S., Zgonnikov, A., van Arem, B.",
      venue: "IEEE IROS 2025",
      year: "2025",
      type: "Conference",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
    {
      title:
        "Assessing the Alignment of Automated Vehicle Decisions with Human Reasons",
      authors:
        "Elbert Suryana, L., Rahmani, S., C. Calvert, S., Zgonnikov, A., van Arem, B.",
      venue: "IEEE RAAI 2025",
      year: "2025",
      type: "Conference",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
    {
      title:
        "Automated Vehicles at Unsignalized Intersections: Safety and Efficiency Implications",
      authors: "Rahmani, S., Xu, G., C. Calvert, S., van Arem, B.",
      venue: "TRR Journal",
      year: "2025",
      type: "Journal",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
    {
      title:
        "Edge Case Detection in Automated Driving: Methods, Challenges and Future Directions",
      authors:
        "Rahmani, S., Rieder, S., Gelder, E., Sonntag, M., Mallada, J. L., Kalisvaart, S., Hashemi, V., Calvert, S. C.",
      venue: "Under Review at IEEE T-ITS",
      year: "2024",
      type: "Journal",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
    {
      title:
        "Safe and Efficient Autonomous Driving at Unsignalized Intersections: An Integrated Model Predictive Control and Reinforcement Learning Approach",
      authors: "Rahmani, S., Xu, G., Cörpe, G., C. Calvert, S., van Arem, B.",
      venue: "Submitted to Journal",
      year: "2025",
      type: "Journal",
      link: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    },
  ],
};

export const siteConfig = {
  name: "Saeed",
  title: "PhD Candidate | AI & Robotics Researcher",
  description: "Portfolio website of Saeed Rahmani - PhD candidate specializing in Foundation Models, Reinforcement Learning, and Autonomous Systems",
  accentColor: "#1d4ed8",
  social: {
    email: "saeed.rahmani@cs.ox.ac.uk",
    linkedin: "https://www.linkedin.com/in/saeedrahmani/",
    twitter: "https://scholar.google.com/citations?user=H9yGoHcAAAAJ&hl=en",
    github: "https://github.com/SaeedRahmani",
  },
  aboutMe:
    "I am a PhD candidate, expected to graduate in January 2026, with experience and interest in artificial intelligence for robotics. I have hands-on experience with <strong>Foundation Models</strong> (both LLMs and VLMs), <strong>World Models</strong>, and <strong>Reinforcement Learning</strong> for robot learning, especially in complex and uncertain environments. My research focuses on developing AI systems for <strong>autonomous vehicles</strong> in the mixed-autonomy era.",
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
      company: "Oxford University, UK",
      title: "Multi-agent Learning, Exchange PhD",
      dateRange: "Aug. 2025 - present",
      logo: "/logos/oxford.png",
      bullets: [
        "Developed a Self-play MARL framework for improving the performance of agents transferred from one environment to another, achieving 80-120% success rate improvement",
        "Implemented behavior cloning (BC) policies in complex and uncertain environments with more than 60 agents in each scenario",
      ],
    },
    {
      company: "Toyota Motors Europe, Belgium",
      title: "VLMs and Transformers, Research Intern",
      dateRange: "Oct. 2025 – present",
      logo: "/logos/toyota.png",
      bullets: [
        "Training transformer-based vision models for predicting abnormal scenarios from dashcam videos",
        "Conducting a comparative analysis of rule-based vs. AI-based anomaly detection methods in autonomous systems",
      ],
    },
    {
      company: "BMW Group, Germany",
      title: "Simulation Agent Modeler, Visiting Research Engineer",
      dateRange: "Aug. 2024",
      logo: "/logos/bmw.png",
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
        "RNN-based World Model for training autonomous vehicles through imitation learning in complex driving scenarios",
      link: "https://github.com/SaeedRahmani",
      skills: ["Python", "PyTorch", "World Models"],
    },
    {
      name: "Simulation Agents for Mixed-Autonomy Traffic",
      description:
        "Real-time simulation framework for evaluating autonomous vehicles in mixed traffic scenarios with human-driven vehicles",
      link: "https://github.com/SaeedRahmani",
      skills: ["Python", "C++", "Reinforcement Learning", "MPC"],
    },
    {
      name: "Edge Case Detection for Autonomous Driving",
      description:
        "Foundation model-based system for detecting critical edge cases in autonomous driving systems (Hi-Drive Project)",
      link: "https://hi-drive.eu",
      skills: ["VLMs", "Deep Learning", "Python"],
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

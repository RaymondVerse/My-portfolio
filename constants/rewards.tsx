import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaCss3,
  FaDocker,
  FaEthereum,
  FaFigma,
  FaGithubSquare,
  FaHtml5,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
  FaRust,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAwslambda,
  SiDjango,
  SiGraphql,
  SiJenkins,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiOracle,
  SiPostgresql,
  SiSolana,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

export const REWARDS = [
  {
    category: "skills",
    info: [
      {
        title: "Frontend Development",
        description: "Specialized in modern frontend technologies.",
        icons: [
          FaHtml5,
          FaJs,
          FaReact,
          SiNextdotjs,
          FaWordpress,
          FaAngular,
          FaVuejs,
          BiLogoTypescript,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "Backend Development",
        description: "Specialized in modern backend technologies.",
        icons: [
          FaPython,
          FaEthereum,
          FaNode,
          FaRust,
          SiDjango,
          SiGraphql,
          SiSolana,
          SiJsonwebtokens,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "UI/UX Design",
        description: "Proficient in designing user-centric interfaces.",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
        stage: "",
      },
      {
        title: "DevOps Development",
        description: "Specialized in modern DevOps practices.",
        icons: [
          FaAws,
          FaDocker,
          FaGithubSquare,
          SiAwslambda,
          SiAmazonec2,
          TbBrandAzure,
          SiJenkins,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "Database Development",
        description: "Specialized in modern Database management.",
        icons: [
          SiMongodb,
          SiMysql,
          SiPostgresql,
          SiNeo4J,
          SiAmazondynamodb,
          SiOracle,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
    ],
  },
  {
    category: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        description:
          "Recognized for excellence in web design and functionality.",
        icons: [], // Empty for non-skill categories
        stage: "2019 - 2020",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        description: "Finalist in Adobe's prestigious design competition.",
        icons: [],
        stage: "2017 - 2018",
      },
    ],
  },
  {
    category: "experience",
    info: [
      {
        title: "Senior Web3 Developer - TokenPocket",
        description:
          "Developed and deployed various smart contracts to integrate TokenPocket's multi-chain wallet with decentralized finance (DeFi) protocols and NFT marketplaces.",
        icons: [],
        stage: "2022 - 2024",
      },
      {
        title: "Senior Web3 Developer - QuickNode",
        description:
          "Built and deployed core smart contracts for QuickNode v1, including decentralized swap routers, liquidity zappers, and staking vaults.",
        icons: [],
        stage: "2021 - 2022",
      },
      {
        title: "Blockchain Engineer - Stakin",
        description:
          "Engineered core contracts for Stakin's services, including staking mechanisms and cross-chain bridges.",
        icons: [],
        stage: "2020 - 2021",
      },
      {
        title: "Senior Web Engineer - Telesero",
        description:
          "Involved in the development of programming user interface design and front-end for the web applicatio.",
        icons: [],
        stage: "2018 - 2020",
      },
      {
        title: "Grupo Liderança, Brazil",
        description:
          "Managed projects end-to-end, including defining architecture, selecting technology stacks.",
        icons: [],
        stage: "2017 - 2018",
      },
    ],
  },
  {
    category: "credentials",
    info: [
      {
        title: "Web Development - LINGNAN University",
        description: "Studied web development and computer science principles.",
        icons: [],
        stage: "2020",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        description: "Completed a diploma in computer science fundamentals.",
        icons: [],
        stage: "2018",
      }
    ],
  },
];

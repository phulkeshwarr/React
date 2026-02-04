import Navbar from './components/section1/Navbar.jsx'
import Content from './components/section1/Content.jsx' 

const App = () => {

const users = [
  {
    index:1,
    name: "Aarav Mehta",
    intro:
      "Experienced software engineer focused on building scalable web applications, improving system performance, collaborating with teams, and delivering reliable solutions that meet business and user requirements.",
    img: "https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg",
    experience: "Satisfied"
  },
  {
    index:2,
    name: "Sophia Williams",
    intro:
      "Creative UI/UX designer passionate about crafting intuitive user experiences, conducting research, designing clean interfaces, and continuously improving product usability through thoughtful design decisions.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop",
    experience: "Satisfied"
  },
  {
    index:3,
    name: "Rahul Verma",
    intro:
      "Backend developer specializing in APIs, databases, and server optimization, working closely with frontend teams to ensure secure, efficient, and maintainable application architectures.",
    img: "https://i.pinimg.com/736x/09/63/03/09630372b8e6f94257d5c6b3d47f0560.jpg",
    experience: "Neutral"
  },
  {
    index:4,
    name: "Emily Carter",
    intro:
      "Data analyst skilled in transforming raw data into actionable insights using visualization, statistical analysis, and reporting to support strategic decision making across departments.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop",
    experience: "Satisfied"
  },
  {
    index:5,
    name: "Kunal Sharma",
    intro:
      "DevOps engineer focused on automating deployments, managing cloud infrastructure, improving system reliability, and ensuring smooth collaboration between development and operations teams.",
    img: "https://i.pinimg.com/736x/27/22/0a/27220a217b57191db52fdf46fad6a549.jpg",
    experience: "Neutral"
  },
  {
    index:6,
    name: "Isabella Rossi",
    intro:
      "Product manager experienced in defining roadmaps, aligning stakeholders, prioritizing features, and guiding cross functional teams to deliver customer focused digital products.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop",
    experience: "Satisfied"
  },
  {
    index:7,
    name: "Daniel Thompson",
    intro:
      "Quality assurance engineer dedicated to improving software reliability by designing test cases, identifying defects, and ensuring products meet functional and performance standards.",
    img: "https://i.pinimg.com/1200x/04/ad/3c/04ad3ccce9d3ca2c530c4b0a76a078b3.jpg",
    experience: "Dissatisfied"
  },
  {
    index:8,
    name: "Neha Kapoor",
    intro:
      "Human resources professional focused on employee engagement, talent development, conflict resolution, and creating positive workplace cultures that support organizational growth.",
    img: "https://i.pinimg.com/736x/db/4f/2c/db4f2c65552c6fd086dbaab717eda1e1.jpg",
    experience: "Neutral"
  }
];
  return (
    <div className='p-6'>
        <Navbar />
        <Content users = {users}/>
    </div>
  )
}

export default App

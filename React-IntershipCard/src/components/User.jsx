import React from 'react'
import Card from './Card';

const User = () => {
    const array = [1,2,3,4,5];
    
    const user_name = [{name: 'Phulkeshwar', age: 21}, {name: 'Deepak', age: 23}, {name: 'Raju', age: 22}, {name: 'Sagar', age: 25}];

    const jobOpenings = [
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png",
    company: "Google",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logoeps.com/wp-content/uploads/2025/02/amazon_icon_logo-logo_brandlogos.net_fgndw.png",
    company: "Amazon",
    posted: "1 week ago",
    post: "Frontend React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.0Y8Hmr7KiAI_InrwDPpj9wHaHI?w=2048&h=1972&rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Meta",
    posted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://th.bing.com/th/id/R.8ef8e7517ce4e8ba5c30c0e649892441?rik=iBu%2f6%2bu0uajSAg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fapple-logo-transparent-background%2fapple-logo-transparent-background-3.png&ehk=WjliEge%2fHi3dPczZKkgdahobwLU1erVlKf0u3T%2bYPOM%3d&risl=&pid=ImgRaw&r=0",
    company: "Apple",
    posted: "2 weeks ago",
    post: "iOS UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    posted: "6 days ago",
    post: "Creative UI Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "10 days ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company: "Tesla",
    posted: "4 days ago",
    post: "UI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    posted: "3 weeks ago",
    post: "UI Developer Intern",
    tag1: "Internship",
    tag2: "Intern",
    pay: "$25/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    company: "Oracle",
    posted: "8 days ago",
    post: "Web UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://vectorseek.com/wp-content/uploads/2021/01/Adobe-Logo-Vector.jpg",
    company: "Adobe",
    posted: "12 days ago",
    post: "Visual Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  }
];

  return (
    // <div className='Parent'>
    //     {array.map (function(){
    //       return "item";
    // })}
    // </div>

    // <div className='Parent'>
    //     <h3>{array}  </h3>
    // </div>

    // <div className='Parent'>
    //     {array.map ( (item) => {
    //       return <h3 key={item}>Item {item*2*6}</h3>;  // Added key prop for better practice
    //   })}
    // </div>

    // <div className='Parent'>
    //     {user_name.map ( (item, index) => {
    //         console.log(item);
    //         console.log(index);
    //         console.log(item.name);
    //         console.log(item.age);
    //       return <h3 key={index}>Name: {item.name} | Age: {item.age} </h3>;  // Added key prop for better practice
    //     })}
    // </div>

    // <div className='Parent'>
    //     {jobOpenings.map((user) => {
    //         console.log(user.company);
    //         return <h1>User Company: {user.company} <br /> Pay: {user.pay}</h1>
    //     })}
    // </div>

    <div className='Parent'>
        {jobOpenings.map((job, index) => {
            return (
                <Card 
                    key={index}
                    img={job.brandLogo}
                    company={job.company}
                    posted={job.posted}
                    post={job.post}
                    tag1={job.tag1}
                    tag2={job.tag2}
                    pay={job.pay}
                    location={job.location}
                />              
            );
        })}
    </div>
    
);
}
export default User

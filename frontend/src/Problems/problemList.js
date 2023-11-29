// import axios from "axios";
// import React ,{ useState, useEffect } from "react";

// import { Link } from "react-router-dom";


// const ProblemList = ()=>{
//     const [problems, setProblems] = useState([]);
//     const AuthorId = localStorage.getItem("user");
//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const response = await axios.get(
//                     "http://localhost:8080/problems",
//                     {withCredentials : true}
//                 );
//                 setProblems(response.data);
//             }catch(error){
//                 console.log(error.message);
//             }
//         };
//         fetchData();
//     }, []);
    
//   return (
//     <div>
//       <h5 className="text-white mt-8 text-center font-mono">Problem List</h5>
//       <div className="overflow-auto">
//         <table className="mx-auto divide-y-4 divide-green-600 bg-white text-sm dark:divide-green-700 dark:bg-black">
//           <thead className="ltr:text-left rtl:text-right">
//             <tr>
//               <th className="whitespace-nowrap px-16 py-8 font-medium text-gray-900 dark:text-white">
//                 Problem
//               </th>
//               <th className="whitespace-nowrap px-16 py-8 font-medium text-gray-900 dark:text-white">
//                 Difficulty
//               </th>
//               <th className="whitespace-nowrap px-16 py-8 font-medium text-gray-900 dark:text-white">
//                 Topic
//               </th>
//               <th className="whitespace-nowrap px-16 py-8 font-medium text-gray-900 dark:text-white">
//                 AuthorId
//               </th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200 dark:divide-green-600">
//             {problems.map((individualProblem, index) => (
//               <tr key={index}>
//                 <td className="whitespace-nowrap px-16 py-2 font-medium text-gray-900 dark:text-white">
//                   <Link to="/problem/twoSum"> {individualProblem.title}</Link> 
//                 </td>
//                 <td className="whitespace-nowrap px-16 py-2 text-gray-700 dark:text-gray-200">
//                   {individualProblem.difficulty}
//                 </td>
//                 <td className="whitespace-nowrap px-16 py-2 text-gray-700 dark:text-gray-200">
//                   {individualProblem.topic}
//                 </td>
//                 <td className="whitespace-nowrap px-16 py-2 text-gray-700 dark:text-gray-200">
//                   {AuthorId}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default ProblemList;




import './problemList.css';
import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const AuthorId = localStorage.getItem("user");
  useEffect(()=>{
      const fetchData = async()=>{
          try{
              const response = await axios.get(
                  "http://localhost:8080/problems",
                  {withCredentials : true}
              );
              setProblems(response.data);
          }catch(error){
              console.log(error.message);
          }
      };
      fetchData();
  }, []);
  return (
    <div className="problemList">
      <h1>AlgoJudge</h1>
      <p>This is an online judge which looks good :)</p>
      <div className="problemTable">
        <div className="tableHeader">
          <div>Problem</div>
          <div>Difficulty</div>
          <div>Topic</div>
          {/* <div>AuthorId</div> */}
        </div>
        {problems.map((problem, index) => (
          <div key={index} className="tableRow">
            <div>{problem.name}</div>
            <div>{problem.difficulty}</div>
            <div>{problem.topic}</div>
            {/* <div>{problem.authorId}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemList;


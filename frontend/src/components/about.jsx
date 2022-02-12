import react, {useEffect, useState} from "react"
function About() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [messages, setMessage] = useState("");

//   useEffect(() => {
//     fetch('/about')
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setMessage(result);
//           console.log(result)
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div className="App">
//          <h1>{messages.message}</h1>
//       </div>
//     );
//   }
return (
    <h1>about</h1>
);
}

export default About;

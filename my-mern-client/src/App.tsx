import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/name');
        console.log(response);
        setName(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
import { useEffect, useState} from 'react'
import axios from 'axios';

const GetData = () => {

    const [posts, setPosts] = useState([]);


     async function getData() {

    try {
      // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      // const data = await response.json();
      // console.log(data);

      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);

    }catch (error) {
      console.log("Here is the error", error);
    }

  }
  
  useEffect(() => {

    getData();
    
  }, []);

  return (
    <div>
      <ol>
        {
            posts?.map((post) => {
                return (
                    <li key={post.id}>{post.title}</li>
                )
            })
        }
      </ol>
    </div>
  );
}

export default GetData;

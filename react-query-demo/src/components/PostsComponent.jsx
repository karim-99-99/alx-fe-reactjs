import {useQuery} from '@tanstack/react-query'

//fetch Data
const fetchData = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return res.json()
};

const ReactQuery = () => {
//handle Data Fetching and Caching

const { fetchPosts, isError, isLoading } = useQuery({
    queryKey: ["fetchData"], 
    queryFn: fetchData
  });
  
    //handling Loading state
    if (isLoading) return <div>Loading ...</div>
// handling error state

if(isError) return <div> Error loading data</div>

//Render the fetch data
return (
    <div>
        {fetchPosts.map(item => (
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
)
}

export default ReactQuery
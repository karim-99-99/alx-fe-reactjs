import {useQuery} from '@tanstack/react-query'

//fetch Data
const fetchData = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return res.json()
};

const ReactQuery = () => {
//handle Data Fetching and Caching

const { data, isError, fetchPosts } = useQuery({
    queryKey: ["fetchData"], 
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cache remains for 10 minutes
    refetchOnWindowFocus: false, // Prevent refetching when switching tabs
  });
  
    //handling Loading state
    if (fetchPosts) return <div>Loading ...</div>
// handling error state

if(isError) return <div> Error loading data</div>

//Render the fetch data
return (
    <div>
        {data.map(item => (
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
)
}

export default ReactQuery
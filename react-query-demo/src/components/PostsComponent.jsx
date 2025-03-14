import {useQuery} from '@tanstack/react-query'

//fetch Data
const fetchData = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return res.json()
};

const ReactQuery = () => {
//handle Data Fetching and Caching

const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchPosts"], 
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cache remains for 10 minutes
    refetchOnWindowFocus: false, // Prevent refetching when switching tabs
  });
  
    //handling Loading state
    if (isLoading) return <div>Loading ...</div>
// handling error state

if(isError) return <div> Error loading data</div>

//Render the fetch data
return (
    <div>
        <h> Fetch Posts</h>
        <button onClick={() => refetch} disabled={isFetching}>{isFetching ? "Refreshing..." : "Refetch Posts"}</button>
        {data.map(item => (
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
)
}

export default ReactQuery
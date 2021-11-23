import BlogList from './BlogList';
import useFetch from "./hooks/useFetch"
import Container from "react-bootstrap/Container"

const Home = () => {

    const url = "http://localhost:8181/blogs"
    const { data: blogs, isPending, error } = useFetch(url);

    return (

        <Container className="mt-5">
            {error && <div className="text-center">{error} </div>}
            {isPending && <h1 className="text-center">Loading... </h1>}
            {blogs && <BlogList data={blogs} title="All Entries" />}
        </Container>

    )
}

export default Home
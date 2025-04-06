import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const { posts, loading, error } = useSelector((state) => state.posts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Home Page</h1>
            {posts.map((post) => (
                <div key={post.id} className="card">
                    <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
                    <h3>{post.title.slice(0, 20)}...</h3>
                    <p>{post.body.slice(0, 50)}...</p>
                    <Link to={`/item/${post.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
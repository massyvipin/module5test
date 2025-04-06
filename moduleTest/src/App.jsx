import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/postSlice';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts()); // Fetch posts on load
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
};

export default App;
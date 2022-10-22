import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>This Category has total {news.length} News.</h2>
        </div>
    );
};

export default Category;
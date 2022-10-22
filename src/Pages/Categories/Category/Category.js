import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
      <div>
        <h2>This Category has total {categoryNews.length} News.</h2>
        {
            categoryNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
            ></NewsSummaryCard>)
        }
      </div>
    );
};

export default Category;
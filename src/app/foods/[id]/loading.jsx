import FoodDetailsSkeleton from '@/components/skeleton/FoodDetailsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <FoodDetailsSkeleton />
        </div>
    );
};

export default loading;
import React from 'react';
import { WidgetContainer } from '../components/WidgetContainer/WidgetContainer';

export const RecommendedProducts: React.FC = () => {
    return (
        <WidgetContainer width={'25rem'} height={'30rem'}>
            <h2>Recommended Products</h2>
            <div>
                products
            </div>
        </WidgetContainer>
    );
};

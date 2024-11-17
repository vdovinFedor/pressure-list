import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/function-component-definition
const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const goToDiary = () => navigate('/diary');
    const goToMeasurements = () => navigate('/measurements');

    return (
        <div className="flex flex-col items-center mt-8">
            <button
                onClick={goToDiary}
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition"
            >
                Дневник
            </button>
            <button
                onClick={goToMeasurements}
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
                Показатели давления
            </button>
        </div>
    );
};

export default HomePage;

import React, { createContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [selectedHeading, setSelectedHeading] = useState('');

    return (
        <QuizContext.Provider value={{ selectedHeading, setSelectedHeading }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContext;

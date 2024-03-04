import React, { useRef, useState, useEffect } from 'react';

const CombinedComponent = () => {
    const inputRef = useRef(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const focusInput = () => {
            inputRef.current.focus()
        }

        focusInput()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };

        fetchData()
    }, [])

    return (
        <div>
            <label>Введите текст: </label>
            <input type="text" ref={inputRef} />

            <h1>Данные с сервера:</h1>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка данных...</p>
            )}
        </div>
    );
};

export default CombinedComponent;

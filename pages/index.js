'use client';
import '../styles/globals.css'
import { useState } from 'react';
export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
            <h1 className="text-4xl font-bold mb-8">Contador Nextjs</h1>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
                <span className="text-3xl font-mono w-20 text-center">{count}</span>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => setCount(count - 1)}>-</button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => setCount(count + 1)}>+</button>
                <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500" onClick={() => setCount(0)}>C</button>
            </div>
        </main>
    );
}
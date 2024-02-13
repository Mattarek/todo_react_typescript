import './App.css';
import { dummyData } from './data/todos';

function App() {
    return (
        <main className='py-10 h-screen'>
            <h1 className='font-bold text-center text-3x1'>Your todos</h1>
            <div className='max-w-lg'>
                <div className='space-y-2'>
                    {dummyData.map((element, index) => (
                        <p
                            key={index}
                            className='text-lg'>
                            {element.title}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;

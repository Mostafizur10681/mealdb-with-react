import React from 'react';

const Home = () => {
    return (
        <div className='mt-12'>
            <input type="text" className='py-3 px-5 w-2/4 border-solid border-2 border-slate-500' placeholder='Write here what you want?' />
            <button className='bg-slate-500 py-3 px-5 text-xl text-white rounded-lg hover:bg-green-900' >Search</button>
        </div>

    );
};

export default Home;
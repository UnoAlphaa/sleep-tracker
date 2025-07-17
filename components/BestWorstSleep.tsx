import getWorstBestSleep from '@/actions/getBestWorstSleep';
import React from 'react'


const BestWorstSleep = async () => {
    const { bestSleep, worstSleep } = await getWorstBestSleep();
    return (
        <div className='bg-gray-100 flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full'>
                <h3
                    className='text-2xl font-bold text-center mb-6 text-gray-600'
                >Best and Worst sleep
                </h3>

                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:space-y-0'>
                    {/* Best Sleep */}
                    <div className='text-center'>
                        <h4 className='text-2xl font-bold bg-gradient-to-r 
                        from-green-500 to-green-700 bg-clip-text text-transparent
                        mb-2'>Best sleep</h4>
                        <p>
                            {bestSleep !== undefined ? `${bestSleep} hours` : 'No Data availiable'}
                        </p>
                    </div>

                    {/* divider */}
                <div className='hidden sm:block h-16 w-px bg-gray-300'></div>
                <div className='text-center'>
                    <h4 className='text-2xl font-bold 
                    bg-gradient-to-r 
                        from-red-500 to-red-700 bg-clip-text text-transparent
                    mb-2'>Worst sleep</h4>
                    <p>
                        {worstSleep !== undefined ? `${worstSleep} hours` : 'No Data availiable'}
                    </p>
                </div>
                </div>
                
            </div>

        </div>
    )
}

export default BestWorstSleep
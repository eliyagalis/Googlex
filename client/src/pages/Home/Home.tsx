import Header from '@/components/ui/Header'
import Typography from '@/components/ui/Typography'
import { typography } from '@/data/typography'
import React from 'react'

const Home = () => {
    return (
        <div className='w-full min-h-screen'>
            <Header />
            <main className='w-full max-w-7xl mx-auto mt-20'>
                <div className='flex'>
                    <div className='w-2/5 space-y-5'>
                        <Typography size={typography.fontSize['3xl']} weight={typography.weight.bold}>
                            <h1>Uncover What Google Knows About You</h1>
                        </Typography>
                        <Typography size={typography.fontSize['xl']} weight={typography.weight.normal}>
                            <h2>Upload your data. Visualize your footprint. Regain control of your digital identity.</h2>
                        </Typography>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
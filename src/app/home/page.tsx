
import { Template } from '@/components'


export default function Home() {
    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen'>
                <Template >
                    <main className='flex flex-col justify-center items-center'>
                        <div className='mt-5 mb-5'>
                            <img className='w-30' src="/images/foto.png" alt="" />
                        </div>

                        <div>
                            <h1 className='text-4xl font-bold text-custom-100'>Luiz Henrique</h1>
                        </div>

                        <div className="mt-10 border border-custom-100/80 w-[20%] lg:w-[50%] sm:w-[30%] md:[40%]"></div>

                        <div className='mt-10 mb-5'>
                            <h2 className='text-2xl font-medium text-custom-100'>DESENVOLVEDOR FULLSTACK</h2>
                        </div>
                    </main >
                </Template>
            </div>
        </>
    )
}
import farmacia from '../../assets/farmacia.svg'

function Home() {
    return (
        <div className="bg-teal-500 flex justify-center items-center h-screen">
            <div className='container grid grid-cols-2 text-white'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-6xl font-bold'>Seja bem vinde!!!!</h2>
                    <p className='text-2xl'>Aqui na "Farmacia" temos preços e produtos imperdiveis totalmente 
                    pensado e planejado para a sua saúde e bem estar !!</p>
                    <div className="flex justify-around gap-4">
                        <button className='rounded bg-white text-blue-800 py-3 px-6 text-xl'>Ver produtos</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={farmacia} alt="" className='w-4/5' />
                </div>
            </div>
        </div>
    );
}

export default Home;

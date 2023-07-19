import Layout from "../layout";

const Home = () =>{
    return(

        <Layout>
            <div className="p-1 grid md:grid-cols-4 gap-5">
                {
                    Array(12).fill(0).map((item,index)=>(
                        <div key={index} className="flex flex-col gap-y-4">
                            <img src={`thumb/9.jpg`} className="rounded-lg" />
                            <div className="flex gap-x-4">
                                <img 
                                    src="/thumb/ak.png" 
                                    className="rounded-full w-10 h-10"
                                />
                                <div>
                                    <h1 className="text-sm font-semibold mb-3">Building Youtube Clone With React Js | Tailwind css tutorial</h1>
                                    <div className="flex gap-x-2 items-center mb-1">
                                        <p className="text-xs text-slate-500">Set India</p>
                                        <span className="material-icons" style={{fontSize: 16}}>check_circle</span>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <p className="text-xs text-slate-500">120K View</p>
                                        <p className="text-xs text-slate-500">1 Day Ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
} 

export default Home;
import { useState } from 'react';

const menus = [
    {
        label: 'home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'music',
        icon: 'headphones'
    },
    {
        label: 'home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'music',
        icon: 'headphones'
    },
    {
        label: 'home',
        icon: 'home'
    },
    {
        label: 'shorts',
        icon: 'app_shortcut'
    },
    {
        label: 'subscriptions',
        icon: 'loyalty'
    },
    {
        label: 'music',
        icon: 'headphones'
    }
]

const Layout = ({ children }) => {
    const [open, SetOpen] = useState(true);

    return (
        <div>
            <nav className=" flex items-center justify-between fixed border-b top-0 left-0 w-full h-16 z-50 px-5 bg-white">
                <div className='flex items-center gap-x-4'>
                    <button onClick={() => SetOpen(!open)} className='hover:bg-gray-200 w-10 h-10 rounded-full justify-center items-center'>
                        <span className="material-icons-outlined" style={{ fontSize: 24 }}> menu</span>
                    </button>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        alt="logo"
                        className="w-16"
                    />
                </div>

                <div className='w-1/2 flex flex-col'>
                    <form action="" className='flex'>
                        <input className="p-4 border-slate-300 rounded-l-full border h-10 flex-1" type="text" placeholder='Search' />
                        <button className='border-slate-300 border-l-0 border rounded-r-full h-10 w-12 flex items-center justify-center'>
                            <span className="material-icons-outlined text-slate-300" style={{ fontSize: 24 }}> search</span>
                        </button>
                    </form>
                </div>

                <div className='flex items-center gap-x-4'>
                    <button className='hover:bg-gray-200 w-10 h-10 rounded-full justify-center items-center'>
                        <span className="material-icons-outlined" style={{ fontSize: 24 }}>videocam</span>
                    </button>
                    <button className='hover:bg-gray-200 w-10 h-10 rounded-full justify-center items-center'>
                        <span class="material-icons-outlined" style={{ fontSize: 24 }}> notifications</span>
                    </button>
                    <img
                        src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg"
                        alt="logo"
                        className="w-10 h-10 border-rounded"
                    />
                </div>

            </nav>

            <aside className="overflow-auto fixed border-r fiexd top-0 left-0 h-full mt-16 flex flex-col  gap-y-3"
                style={{
                    width: open ? 250 : 70,
                    transition: '0.2s'
                }}
            >
                {
                    menus.map((item, index) => (
                        <button
                            key={index}
                            className={`flex ${open ? 'flex-row' : 'flex-col'} ${open ? 'items-start' : 'items-center'} gap-x-5 py-2 px-2 rounded-lg hover:bg-gray-100`}
                        >
                            <span className="material-icons-outlined text-slate-700">{item.icon}</span>
                            <span
                                className={`capitalize text-slate-700 ${open ? null : 'text-xs'}`}
                            >
                                {open ? item.label : item.label.slice(0, 5)}
                            </span>
                        </button>
                    ))
                }

            </aside>
            <section className="mt-16"
                style={{
                    marginLeft: open ? 250 : 70,
                    transition: '0.2s'
                }}
            >
                {children}            
            </section>
        </div>
    )
}
export default Layout;
import React from 'react'

const TopRoutes = () => {

    const topRoutes = [
        {
            id: 1,
            from: "Satkhira",
            to: "Dhaka",
            totalNeedTime: "06",
            facilities: [
                {
                    id: 1,
                    name: "internet"
                },
                {
                    id: 2,
                    name: "Snaks"
                },
                {
                    id: 3,
                    name: "Tv"
                },
                {
                    id: 4,
                    name: "Mobile Charging"
                },
            ],
            price: "800"
        },
                {
            id: 2,
            from: "khulna",
            to: "Dhaka",
            totalNeedTime: "03",
            facilities: [
                {
                    id: 1,
                    name: "internet"
                },
                {
                    id: 2,
                    name: "Snaks"
                },
                {
                    id: 3,
                    name: "Tv"
                },
                {
                    id: 4,
                    name: "Mobile Charging"
                },
            ],
            price: "400"
        },
                {
            id: 3,
            from: "Dhaka",
            to: "Rangpur",
            totalNeedTime: "12",
            facilities: [
                {
                    id: 1,
                    name: "internet"
                },
                {
                    id: 2,
                    name: "Snaks"
                },
                {
                    id: 3,
                    name: "Tv"
                },
                {
                    id: 4,
                    name: "Mobile Charging"
                },
            ],
            price: "1500"
        },
                {
            id: 4,
            from: "Borishal",
            to: "Dhaka",
            totalNeedTime: "05",
            facilities: [
                {
                    id: 1,
                    name: "internet"
                },
                {
                    id: 2,
                    name: "Snaks"
                },
                {
                    id: 3,
                    name: "Tv"
                },
                {
                    id: 4,
                    name: "Mobile Charging"
                },
            ],
            price: "600"
        },
    ]

    return (
        <section className='mt-[150px]'>
            <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <h2 className='text-center text-3xl mb-[30px]'>Top Search <span className='text-red-400'>Routes</span></h2>
                <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    {
                        topRoutes.map((route) => {
                            return (
                                <div className='border border-gray-400 py-[20px] px-[14px] rounded'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-gray-400'>From</p>
                                        <p className='text-gray-400'>To</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <h5 className=''>{route.from}</h5>
                                        <h6 className='border border-gray-300 text-gray-500 rounded-full text-[15px] py-[2px] px-[12px]'>06 Hrs</h6>
                                        <h5 className=''>{route.to}</h5>
                                    </div>
                                    <div className='flex items-center mt-[7px] gap-5'>
                                        {
                                            route.facilities.map((facilitie) => {
                                                return (
                                                    <label htmlFor="">
                                                        <i></i>
                                                        <span>{facilitie.name}</span>
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between mt-[30px]'>
                                        <h3>TK. {route.price}</h3>
                                        <button className='py-[4px] px-[14px] bg-red-600 text-white rounded cursor-pointer'>Reserve Seat</button>
                                    </div>
                                </div>
                            )
                        })
                    }


   
                </div>
            </div>
        </section>
    )
}

export default TopRoutes
import React from 'react'

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Secure Payment",
            description: "Integrate secure payment gateways for users to pay for their tickets",
            icon: "fa-solid fa-money-check text-[18px] bg-red-400 p-[10px] rounded-full"
        },
        {
            id: 2,
            title: "Refund Policy",
            description: "Offer options for the users to purchase refundable tickets with clear terms",
            icon: "fa-solid fa-building-shield text-[18px] bg-red-400 p-[10px] rounded-full"
        },
        {
            id: 3,
            title: "24/7 Support",
            description: "Get assistance anytime through chat, email, or phone",
            icon: "fa-solid fa-phone text-[18px] bg-red-400 p-[10px] rounded-full"
        },
    ]

    return (
        <section className='mt-[150px]'>
            <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <h2 className='text-center text-3xl  py-[30px]'>Our <span className='text-red-400'>Services</span></h2>
                <div className='w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {
                        services.map((service) => {
                            return (
                                <div className='bg-gray-200 p-[25px] rounded-3xl'>
                                    <div className='flex justify-center items-center gap-3'>
                                        <i className={service.icon}></i>
                                        <h2 className='text-center text-[22px]'>{service.title}</h2>
                                    </div>
                                    <p className='text-center py-[16px]'>{service.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Services
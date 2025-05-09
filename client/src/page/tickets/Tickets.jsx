import React from 'react'
import Form from '../../components/home/Form'

const Tickets = () => {
    const busCompanies = [
        {
            id: 1,
            name: "Satkhira Line",
            stock: "06",
        },
        {
            id: 2,
            name: "Emad Poribohon",
            stock: "14",
        },
        {
            id: 3,
            name: "Tungipara Express",
            stock: "10",
        },
        {
            id: 4,
            name: "MR Poribohon",
            stock: "02",
        },
    ]

    const busTypes = [
        {
            id: 1,
            type: "Business Class"
        },
        {
            id: 2,
            type: "Economices Class"
        },
        {
            id: 3,
            type: "Local"
        },
    ]

    const amenities = [
        {
            id: 1,
            facilityType: "Internet/Wifi"
        },
        {
            id: 2,
            facilityType: "Ac & Air Suspension"
        },
        {
            id: 3,
            facilityType: "Water Bottles"
        },
        {
            id: 4,
            facilityType: "ALED TV & Music"
        },
    ]
    return (
        <section>
            <div className='w-[95%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1260px] m-auto'>
                <h3 className='text-center font-bold text-4xl pt-[10px]'>Want to change the route?</h3>
                <Form />
                <div className='flex gap-[70px] mt-[80px]'>
                    <div className='hidden md:block md:max-w-20%'>
                        <h3 className='py-[12px]'>Apply Filters</h3>
                        <div className='flex flex-col gap-4'>
                        <div className='border border-gray-300 p-[10px] rounded min-w-[250px]'>
                                <h4 className='py-[4px] text-[20px]'>Price</h4>
                                <div className='flex flex-col gap-1'>
                                    input
                                </div>
                            </div>
                            <div className='border border-gray-300 p-[10px] rounded min-w-[250px]'>
                                <h4 className='py-[4px] text-[20px]'>Bus Types</h4>
                                <div className='flex flex-col gap-1'>
                                    {
                                        busTypes.map((busType) => {
                                            return (
                                                <label htmlFor="" className='flex gap-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <span>{busType.type}</span>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='border border-gray-300 p-[10px] rounded min-w-[250px]'>
                                <h4 className='py-[4px] text-[20px]'>Bus Companies</h4>
                                <div className='flex flex-col gap-1'>
                                    {
                                        busCompanies.map((busCompane) => {
                                            return (
                                                <label htmlFor="" className='flex gap-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <span>{busCompane.name}</span>
                                                    <span>({busCompane.stock})</span>
                                                </label>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] sm:max-w-[80%]'></div>
                </div>
            </div>
        </section>
    )
}

export default Tickets
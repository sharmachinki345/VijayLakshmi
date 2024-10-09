import React from 'react'

const Client = () => {
    return (
        <section className="flex flex-col items-center py-16 min-h-screen bg-[#fadfcd] md:px-10 lg:px-20 pt-10">
            <h1 className="text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-semibold ">
                Services
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/services15.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Crane On Rent</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../src/assets/Service2.png" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Close Container Towing Service</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/services16.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Mini Cranes on Hire</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/services14.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Bucket Cranes on Hire</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/services17.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Mobile Crane on Hire</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/service18.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Material Lifting Cranes</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/service19.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Flatbed Towing Services</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/client-img/services11.jpg" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Sky lift Cranes on Hire</div>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="../../src/assets/Service9.png" alt="" />
                    <div className=' bg-orange-300 text-center text-lg text-pretty'>Towing Services</div>
                </div>
                
            </div>

        </section>
    )
}

export default Client
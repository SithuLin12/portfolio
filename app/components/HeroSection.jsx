import Image from "next/image"
import React from "react"
function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-7 place-self-center">
                <h1 className="text-white text-4xl lg:text-6xl font-extrabold">Hello , I'm Si Thu Lin</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">Lorem ipsums dolor sit amet consectetur adipisicing elit. Nulla ad nisi reiciendis sed quo laborum ipsum dolore earum et. Asperiores similique, adipisci corporis possimus ad pariatur animi rem itaque provident.</p>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
       <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
       <Image src="/images/user.png" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="hero image" width={300} height={300}/>
       </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

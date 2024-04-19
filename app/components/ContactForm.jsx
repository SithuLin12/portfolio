import React from 'react'

const ContactForm = () => {
  return (
    <div>
      
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-8">
                <div class="max-w-md mx-auto">
                    <div>
                    <h1 class="text-2xl text-white font-semibold"></h1>
                    </div>
                    <div class="divide-y divide-gray-200">
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="relative">
                        <input autocomplete="off" id="email" name="email" type="text"  class="pl-4 peer bg-slate-800 placeholder-transparent h-10 w-full rounded-lg mb-3 text-white focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                        <label for="email" class="absolute left-0 -top-3.5 text-white  rounded-lg px-4 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Email Address</label>
                        </div>
                        <div class="relative">
                        <input autocomplete="off" id="password" name="password" type="text"  class="pl-4 peer bg-slate-800 placeholder-transparent h-10 w-full rounded-lg mb-3 text-white focus:outline-none focus:borer-rose-600" placeholder="Password" />
                        <label for="password" class="absolute left-0 -top-3.5 text-white  rounded-lg px-4 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Subject</label>
                        </div>
                        <div class="relative">
                        <input autocomplete="off" id="password" name="password" type="text"  class="pl-4 peer bg-slate-800 placeholder-transparent h-10 w-full rounded-lg mb-3 text-white focus:outline-none focus:borer-rose-600" placeholder="Password" />
                        <label for="password" class="absolute left-0 -top-3.5 text-white  rounded-lg px-4 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Message</label>
                        </div>
                        <div class="relative"> 
                        <button class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
    </div>
  )
}

export default ContactForm

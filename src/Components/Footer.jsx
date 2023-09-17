import React from 'react'
import { AiOutlineWhatsApp, AiFillYoutube, AiOutlineMail, AiOutlineTwitter, AiOutlinePhone } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div >
            <footer className='mt-10' >
                <hr />
                <div className='md:flex md:gap-8 justify-around mt-3 items-start'>
                    <section className='ml-6 mr-2 md:w-[280px]'>
                        <p className='text-2xl mb-3 '>About Us</p>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis culpa! Amet tempore pariatur, maxime voluptatibus porro tenetur inventore distinctio hic consequatur quaerat totam tempora itaque molestiae aliquam sunt est eveniet! Consequuntur ea assumenda minus ex aperiam excepturi et repellat officia ad, facilis, deserunt repudiandae omnis! Corporis explicabo cupiditate ea.</p>
                    </section>

                    <section className='my-12 md:my-0 ml-6 mr-2'>
                        <p className='text-2xl mb-3'>Quick Pages</p>
                        <div className='flex gap-20'>
                            <ul className='list-none'>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                            </ul>
                            <ul className='list-none'>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                                <li>Demo Data</li>
                            </ul>
                        </div>
                    </section>
                    <section className='ml-6 mr-2'>
                        <div className='flex items-center gap-2  '>
                            <AiOutlineWhatsApp className='text-3xl text-red-500 border-2 border-gray-500 rounded-full p-1' />
                            <p className='inline text-[14px] font-semibold'>WhatsApp Us</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <AiOutlinePhone className='text-3xl text-red-500 border-2 border-gray-500 rounded-full p-1 my-4' />
                            <p className='inline text-[14px] font-semibold'>+977 9852361422</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <AiOutlineMail className='text-3xl text-red-500 border-2 border-gray-500 rounded-full p-1' />
                            <p className='inline text-[14px] font-semibold'>abc123@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <BiLocationPlus className='text-3xl text-red-500 border-2 border-gray-500 rounded-full p-1 my-4' />
                            <p className='inline text-[14px] font-semibold'>Ratnanagar,Chitwan</p>
                        </div>
                    </section>
                    <section className='ml-6 mr-2'>


                        <p className='uppercase font-semibold my-4 md:my-1'>subscribe for newsletter</p>
                        <div className='flex mb-9 md:mt-2'>
                            <input className='outline-none border-red-500 pl-2 border-2 h-12 w-[250px]' type="text" placeholder='enter your email' />
                            <button className='bg-black text-white px-4'>SUBSCRIBE</button>
                        </div>



                    </section>
                </div>
                <div className='ml-5 md:flex md:justify-between md:px-3 md:mt-6'>
                    <div className='md:flex md:justify-center md:items-center md:flex-col'>
                        <p className='uppercase font-semibold '>We are Accepte</p>
                        <div className='flex items-center gap-3 px-2 mb-10 cursor-pointer'>
                            <img className='h-[50px]' src="https://th.bing.com/th/id/OIP.VVtFlQALfXztHjSXHmNQFgHaDE?pid=ImgDet&rs=1" alt="" />
                            <img className='h-[50px]' src="https://www.cogenthealth.com.np/images/esewa.png" alt="" />
                            <img className='h-[50px]' src="https://ahummingway.com/wp-content/uploads/2020/07/1cdfa981ad7d37ac4a49d88380a8c6c8-600x426.png" alt="" />
                        </div>
                    </div>

                    <div>
                        <p className='uppercase font-semibold '>Connect with Us</p>
                        <div className='flex gap-8 items-start justify-start text-4xl cursor-pointer mt-8'>
                            <FaFacebook className='text-blue-500 cursor-pointer' />
                            <AiFillYoutube className='text-red-500 cursor-pointer' />
                            <AiOutlineTwitter className='text-blue-400 cursor-pointer'/>
                        </div>
                    </div>
                </div>
                <div className='bg-black w-[100vw] mt-6'>
                    <p className='text-white text-xl text-center py-4'>Copyright @ 2023.All Right Reserve</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
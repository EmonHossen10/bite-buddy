"use client"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import veg from '../../../public/asset/veg1.png'
import onion from '../../../public/asset/onion.png'
import milk from '../../../public/asset/milk.png'
export default function Login() {
    const [password, setPassword] = useState("")
    const [toglePassword, setToglePassword] = useState(true)
    
    const handlePass = e => {
        setPassword(e.target.value)
    }
    
    const handleShowPass = () => {
        console.log('demon of the 4th generation');
        setToglePassword(!toglePassword)
    }
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 relative">
            <div className="bg-white flex justify-center items-center col-span-2">
                <div className="space-y-3 mt-24">
                    <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Welcome to <span className="text-primary">BiteBuddy!</span></h1>
                    <p className="text-center md:text-left">Welcome to best food ordering app</p>
                    <Image className="px-10 md:px-0" width={450} height={450} src='https://brandio.io/envato/iofrm/html/images/graphic4.svg' alt='register background'></Image>
                </div>
            </div>
            <Image className="absolute mt-[370px] md:ml-[500px] md:mt-[580px] w-[50px] h-[60px] md:w-[150px] md:h-[160px]" src={onion} alt='onion'></Image>
            <Image className="absolute w-[90px] h-[110px] md:w-[150px] md:h-[230px]" src={veg} alt='vegetable'></Image>
            <Image className="absolute mt-[370px] md:mt-0 ml-[280px] lg:ml-[1220px] w-[80px] h-[190px] md:w-[250px] md:h-[450px]" src={milk} alt='milk'></Image>
            <div className="grid col-span-3 bg-[#44C97D]">
                <section className="">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="mb-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Log In!!!
                                </h1>
                                <namem className="space-y-4 md:space-y-6" action="#">
                                    <form className="space-y-4 md:space-y-6">
                                        <div>
                                            <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                        </div>
                                        <div className="relative">
                                            <label name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input onChange={handlePass} type={toglePassword ? "password" : "text"} name="confirm password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            {
                                                password ?
                                                    <label className="swap absolute -mt-8 ml-[350px] ">
                                                        {/* this hidden checkbox controls the state */}
                                                        <input type="checkbox" />
                                                        {/* volume on icon */}
                                                        <FaEye onClick={handleShowPass} className="swap-on fill-current text-white text-xl"></FaEye>
                                                        {/* volume off icon */}
                                                        <FaEyeSlash onClick={handleShowPass} className="swap-off fill-current text-white text-xl"></FaEyeSlash>
                                                    </label> :
                                                    <></>
                                            }
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label name="terms" className="font-light text-gray-500 dark:text-gray-300">Remember <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Me !!!</a></label>
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full text-white border-primary border-2 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            New here? <Link className="font-medium text-primary hover:underline dark:text-primary-500" href='/register'>Register here</Link>
                                        </p>
                                    </form>
                                </namem>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

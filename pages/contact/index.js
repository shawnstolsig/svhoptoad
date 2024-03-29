import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from 'react'
import { MailIcon, AtSymbolIcon } from '@heroicons/react/outline'
import emailjs from 'emailjs-com'

import {
    contactForm
} from '../../content/contact'
import * as ga from '../../lib/google-analytics'
import sanity from "../../lib/sanity";

function ContactForm({headers, content}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [boat, setBoat] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    const router = useRouter()

    const clearForm = () => {
        setName('')
        setEmail('')
        setPhone('')
        setBoat('')
        setMessage('')
        setSubject('')
    }

    const sendEmail = async (event) => {
        event.preventDefault();
        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                'multiuse_template',
                {
                    name,
                    email,
                    phone,
                    boat,
                    message,
                    subject,
                    website: 'svhoptoad.com'
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            );
            alert(`Message sent!`)
            clearForm()
            ga.event({
                action: "email-success",
                params : {
                    name,
                    email,
                    boat,
                    phone
                }
            })
            await router.push('/')
        } catch (error) {
            console.log(`Error sending email:`,error);
            ga.event({
                action: "email-failure",
                params : {
                    name,
                    email,
                    boat,
                    phone
                }
            })
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
            <div className="relative bg-white shadow-xl rounded overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-3">

                    {/* Contact Form Sidebar */}
                    <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-cyan-500 to-cyan-600 sm:px-10 xl:p-12">
                        {/* Decorative angle backgrounds */}
                        <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                            <svg
                                className="absolute inset-0 w-full h-full"
                                width={343}
                                height={388}
                                viewBox="0 0 343 388"
                                fill="none"
                                preserveAspectRatio="xMidYMid slice"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                    fill="url(#linear1)"
                                    fillOpacity=".1"
                                />
                                <defs>
                                    <linearGradient
                                        id="linear1"
                                        x1="254.553"
                                        y1="107.554"
                                        x2="961.66"
                                        y2="814.66"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" />
                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                            aria-hidden="true"
                        >
                            <svg
                                className="absolute inset-0 w-full h-full"
                                width={359}
                                height={339}
                                viewBox="0 0 359 339"
                                fill="none"
                                preserveAspectRatio="xMidYMid slice"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                    fill="url(#linear2)"
                                    fillOpacity=".1"
                                />
                                <defs>
                                    <linearGradient
                                        id="linear2"
                                        x1="192.553"
                                        y1="28.553"
                                        x2="899.66"
                                        y2="735.66"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" />
                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                            aria-hidden="true"
                        >
                            <svg
                                className="absolute inset-0 w-full h-full"
                                width={160}
                                height={678}
                                viewBox="0 0 160 678"
                                fill="none"
                                preserveAspectRatio="xMidYMid slice"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                    fill="url(#linear3)"
                                    fillOpacity=".1"
                                />
                                <defs>
                                    <linearGradient
                                        id="linear3"
                                        x1="192.553"
                                        y1="325.553"
                                        x2="899.66"
                                        y2="1032.66"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" />
                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">
                            {contactForm.sidebarTitle}
                        </h3>
                        <p className="mt-6 text-base text-cyan-50 max-w-3xl">
                            {headers['contact']}
                        </p>
                        <dl className="mt-8 space-y-6">
                            <dt>
                                <span className="sr-only">Email</span>
                            </dt>
                            <dd className="flex text-base text-cyan-50">
                                <AtSymbolIcon className="flex-shrink-0 w-6 h-6 text-cyan-200" aria-hidden="true" />
                                <span className="ml-3">{contactForm.email}</span>
                            </dd>
                            <dt>
                                <span className="sr-only">Address</span>
                            </dt>
                            <dd className="flex text-base text-cyan-50">
                                <MailIcon className="flex-shrink-0 w-6 h-6 text-cyan-200" aria-hidden="true" />
                                <div className="ml-3">
                                    {contactForm.address[0]}
                                    <br/>
                                    {contactForm.address[1]}
                                    <br/>
                                    {contactForm.address[2]}
                                </div>
                                {/*<span className="ml-3">{contactForm.address}</span>*/}
                            </dd>
                        </dl>
                        <ul className="mt-8 flex justify-center space-x-12" role="list">
                            <li>
                                <a className="text-cyan-200 hover:text-cyan-100" href={contactForm.instagramLink} target={`_blank`}>
                                    <span className="sr-only">Instagram</span>
                                    <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className="text-cyan-200 hover:text-cyan-100" href={contactForm.facebookLink} target={`_blank`}>
                                    <span className="sr-only">Facebook</span>
                                    <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                        <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                        <form onSubmit={sendEmail} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-warm-gray-900">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-warm-gray-300 rounded-md"
                                        onChange={event => setName(event.target.value)}
                                        value={name}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="boat" className="block text-sm font-medium text-warm-gray-900">
                                        Boat
                                    </label>
                                    <span id="boat-optional" className="text-sm text-warm-gray-500">
                                      Optional
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="boat"
                                        id="boat"
                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-warm-gray-300 rounded-md"
                                        aria-describedby="boat-optional"
                                        onChange={event => setBoat(event.target.value)}
                                        value={boat}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-warm-gray-300 rounded-md"
                                        onChange={event => setEmail(event.target.value)}
                                        value={email}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">
                                        Phone
                                    </label>
                                    <span id="phone-optional" className="text-sm text-warm-gray-500">
                                      Optional
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                        aria-describedby="phone-optional"
                                        onChange={event => setPhone(event.target.value)}
                                        value={phone}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                                    Subject
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-warm-gray-300 rounded-md"
                                        onChange={event => setSubject(event.target.value)}
                                        value={subject}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                                        Message
                                    </label>
                                    {message.length === 0 &&
                                        <span id="message-max" className="text-sm text-warm-gray-500">
                                            Max. {contactForm.maxMessageLength} characters
                                        </span>
                                    }
                                    {message.length > 0 && message.length < contactForm.maxMessageLength &&
                                        <span id="message-max" className="text-sm text-warm-gray-500">
                                            {contactForm.maxMessageLength - message.length} remaining
                                        </span>
                                    }
                                    {message.length === contactForm.maxMessageLength &&
                                    <span id="message-max" className="text-sm text-red-500">
                                            0 remaining
                                        </span>
                                    }
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-warm-gray-300 rounded-md"
                                        aria-describedby="message-max"
                                        onChange={event => {
                                            if(event.target.value.length > 500) return;
                                            setMessage(event.target.value)
                                        }}
                                        value={message}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:flex sm:justify-end">
                                {/*TODO: add popup with missing fields? */}
                                <button
                                    type="submit"
                                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto disabled:bg-gray-300"
                                    disabled={!name || !email || !subject || !message}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Contact = ({ headers, content}) => {
    // console.log('headers', headers, 'content', content)

    return (
        <>
            <Head>
                <title>SV Hoptoad | Contact</title>
            </Head>
            <ContactForm headers={headers} content={content}/>
        </>
    )
}
export async function getStaticProps(context) {
    const data = await sanity.fetch(`
        *[identifier in ["contact"]]
        `)

    const headers = {}
    const content = {}

    data.filter(d => d._type === 'headers').forEach(h => headers[h.identifier] = h.header)
    data.filter(d => d._type === 'content').forEach(c => content[c.identifier] = c.body)

    return {
        props: {
            headers,
            content
        },
        revalidate: 60
    }
}
export default Contact

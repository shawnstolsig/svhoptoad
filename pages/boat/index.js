import Head from "next/head"
import { useRouter } from 'next/router'
import clsx from "clsx"
import { useState } from 'react'

import { boats } from "../../content/boat"

function BoatSelector({ boat, setBoat }) {
    // const router = useRouter()

    return (
        <div className={'max-w-5xl mx-auto'}>
            <div className="sm:hidden">
                <label htmlFor="boat-tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="boat-tabs"
                    name="boat-tabs"
                    className="block w-3/4 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md mx-auto"
                    onChange={(event) => setBoat(event.target.value)}
                    value={boat}
                >
                    {boats.map(({design, href}) => (
                        <option key={design} value={href}>{design}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Boat Tabs">
                    {boats.map(({design, href}, tabIdx) => (
                        <button
                            key={design}
                            // href={`${router.pathname}?boat=${href}`}
                            onClick={() => setBoat(href)}
                            className={clsx(
                                href === boat ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === boats.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                            )}
                            aria-current={href === boat ? 'page' : undefined}
                        >
                            <span>{design}</span>
                            <span
                                aria-hidden="true"
                                className={clsx(
                                    href === boat ? 'bg-cyan-500' : 'bg-transparent',
                                    'absolute inset-x-0 bottom-0 h-0.5'
                                )}
                            />
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}

const Boat = () => {
    const router = useRouter()
    const [boat, setBoat] = useState(router.query.boat ? router.query.boat : boats[0].href)
    return (
        <>
            <Head>
                <title>SV Hoptoad | Boat</title>
            </Head>
            <BoatSelector boat={boat} setBoat={setBoat} />
            {boat}
        </>
    );
}

export default Boat;
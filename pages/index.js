import clsx from "clsx";

import Head from 'next/head'

import Card from '../components/card';

export default function Home() {
    return (
        <>

            <Head>
                <title>SV Hoptoad | Home</title>
            </Head>

            <div className={'flex'}>

            <Card>
                <Card.Title>Card</Card.Title>
                <Card.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Content>
                <Card.Actions>
                    <button onClick={() => alert('hello')}>Click me</button>
                </Card.Actions>
            </Card>

            <Card>
                <Card.Title>Card</Card.Title>
                <Card.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Content>
                <Card.Actions>
                    <button onClick={() => alert('hello')}>Click me</button>
                </Card.Actions>
            </Card>
            </div>

        </>
    );
}
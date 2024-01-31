import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';
import usercontext from '../Context/Usercontext';
import useTheme from '../Context/theme';

function Github() {

const {name}=useContext(usercontext)

const {themecolor}=useTheme()

    const { x, y } = useLoaderData()

    return (
        <div>
            GitHub followers: {x.followers} and {x.bio}.
            <p>Currency exchange rate is {y["inr"]["usd"]}</p>
            <h3>My name is {name} </h3>
            <p>Theme color is {themecolor}</p>
        </div>
    )
}

export default Github;

// API call
export const githubloader = async () => {

    const res = await fetch('https://api.github.com/users/hiteshchoudhary')

    return res.json();

}

// API call
export const otherApiLoader = async () => {

    const res = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json')

    return res.json()

}



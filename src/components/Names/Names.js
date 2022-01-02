import React from 'react'
import './Names.css'

const hats = require('../../util/hats.json')
const roads = require('../../util/roads.json')

export default class Names extends React.Component {
    randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }

    render() {
        const hat_index = this.randomNumber(0, hats.length - 1)
        const road_index = this.randomNumber(0, roads.length - 1)

        const name = `${roads[road_index]} ${hats[hat_index]}`.toUpperCase()

        return (
            <div className="Names">{name}</div>
        )
    }
}
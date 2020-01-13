import React from 'react'
import Heroes from './Heroes.jsx'

const URL_API = 'https://api.opendota.com/api/heroes'

export default class Grid extends React.Component {

    state = {
        heroes: [],
        heroesLoading: false,
        filteredHeroes: []
    }

    getHeroes = async () => {
        const heroes = await fetch(`${URL_API}`)
            .then(res => res.json())
            .then(heroes => heroes)
            .catch(err => console.log(err))
    
        this.setState({
            heroesLoading: true,
            heroes: heroes,
            filteredHeroes: heroes
        })
    }

    componentDidMount = () => {
        this.getHeroes()
    }

    filter = (filters) => {
        const heroes = this.state.heroes.filter(hero => {
            return filters.includes(hero.attack_type) && filters.includes(hero.primary_attr)
        })

        return heroes
    }

    filteredHeroes = () => {
        const inputs = document.querySelectorAll('.filter__item_checkbox')

        const filters = []

        inputs.forEach(input => {
            input.checked ? filters.push(input.dataset.name) : null
        })

        const filteredHeroes = this.filter(filters)

        //console.log(filteredHeroes)

        this.setState({
            filteredHeroes: filteredHeroes
        })
    }

    render() {
        const { filteredHeroes } = this.state
        return (
            <div className="grid">
                <div className="filter">
                    <ul className="filter__list">
                        {this.props.taps.map((filter, index) => (
                            <li key={index} className="filter__item">
                                <label className="filter__item_label">
                                    <input data-name={filter.name} className="filter__item_checkbox" type="checkbox"/>
                                    <span className="filter__item_txt">{filter.text}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div className="filter__btn">
                        <button onClick={this.filteredHeroes}>Apply filters</button>
                    </div>
                </div>
                <Heroes heroes={filteredHeroes} />
            </div>
        )
    }
}

Grid.defaultProps = {
    taps: [
        {
            name: 'All',
            text: 'Все'
        },
        {
            name: 'Melee',
            text: 'Ближний бой'
        },
        {
            name: 'Ranged',
            text: 'Дальний бой'
        },
        {
            name: 'str',
            text: 'Силовики'
        },
        {
            name: 'int',
            text: 'Маги'
        },
        {
            name: 'agi',
            text: 'Ловкачи'
        }
    ]
}
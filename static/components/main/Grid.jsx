import React from 'react'
import shortid from 'shortid'
import regeneratorRuntime from "regenerator-runtime"

import TalentsCell from './TalentsCell.jsx'
import Heroes from './Heroes.jsx'

const url = 'https://api.opendota.com/api/heroes'

export default class Grid extends React.Component {

    state = {
        heroes: [],
        filterHeroes: [],
        isLoad: false,
        isFiltered: false
    }

    componentDidMount = async () => {
        fetch(`${url}`)
            .then(res => res.json())
            .then(
                (result) => {                    
                    this.setState({
                        isLoad: true,
                        heroes: result
                    })
                    console.log(result)
                }
            )
    }

    swithFilteredName = (filterName) => {
        switch(filterName) {
            case 'Melee': case 'Ranged':
                return this.state.heroes.filter(hero => hero.attack_type == `${filterName}`)
            case 'agi': case 'str': case 'int':
                return this.state.heroes.filter(hero => hero.primary_attr == `${filterName}`)
        }
    }

    filter = (filterName) => {
        let filtered = filterName == null ? this.state.heroes : this.swithFilteredName(filterName)

        this.setState({
            filterHeroes: filtered,
            isFiltered: true
        })
    }

    render() {
        let { heroes, filterHeroes, isLoad, isFiltered } = this.state
        if(!isLoad) {
            return <div>Загрузка</div>
        } else {
            return (
                <div className="grid">
                    <div className="grid__filter">
                        {this.props.filters.map(filter => (
                            <div 
                                key={shortid.generate()} 
                                className={`grid__filter_item`}
                                onClick={() => this.filter(filter.filterName)}
                            >
                                {filter.txt}
                            </div>
                        ))}
                    </div>
    
                    <Heroes isFiltered={isFiltered} heroes={heroes} filterHeroes={filterHeroes}/>
                </div>
            )
        }
    }
}


Grid.defaultProps = {
    filters: [
        {filterName: null, txt: 'все'},
        {filterName: 'Melee', txt: 'ближний бой'},
        {filterName: 'Ranged', txt: 'дальний бой'},
        {filterName: 'agi', txt: 'ловкач'},
        {filterName: 'str', txt: 'силовик'},
        {filterName: 'int', txt: 'интовик'},
    ]
};
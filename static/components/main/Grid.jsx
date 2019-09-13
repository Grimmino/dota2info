import React from 'react'
import shortid from 'shortid'
import heroesUrl from '../../json/heroes.json'
import spellsUrl from '../../json/spells.json'
import regeneratorRuntime from "regenerator-runtime"


export default class Grid extends React.Component {

    state = {
        heroes: [],
        spells: []
    }

    componentWillMount = () => {
        this.filterHeroes(heroesUrl.heroes)
    }

    filterHeroes = (arrayheroes) => {
        this.setState({
            heroes: arrayheroes
        })
    }

    showInfo = (e) => {
        this.setState({
            infoShow: !this.state.infoShow
        })
    }

    sortHeroes = (filter) => {
        switch (filter) {
            case 'all': this.filterHeroes(heroesUrl.heroes)
                break
            case 'exp': this.filterHeroes(heroesUrl.heroes.filter(hero => hero.talents.exp))
                break
            case 'ms': this.filterHeroes(heroesUrl.heroes.filter(hero => hero.talents.ms))
                break
            case 'attackspeed': this.filterHeroes(heroesUrl.heroes.filter(hero => hero.talents.attackspeed))
                break
            case 'spelldamage': this.filterHeroes(heroesUrl.heroes.filter(hero => hero.talents.spelldamage))
                break
            case 'cd': this.filterHeroes(heroesUrl.heroes.filter(hero => hero.talents.cd))
                break
        }
    }

    render() {
        return (
            <div className="grid">
                <div className="grid__filter">
                    <div className="grid__filter_item" onClick={() => this.sortHeroes('all')}>все</div>
                    <div className="grid__filter_item" onClick={() => this.sortHeroes('exp')}>+опыт</div>
                    <div className="grid__filter_item" onClick={() => this.sortHeroes('attackspeed')}>скорость атаки</div>
                    <div className="grid__filter_item" onClick={() => this.sortHeroes('ms')}>скорость бега</div>
                    <div className="grid__filter_item" onClick={() => this.sortHeroes('spelldamage')}>урон способностей</div>
                    <div className="grid__filter_item" onClick={() => this.sortHeroes('cd')}>перезарядка</div>
                </div>

                <div className="grid__heroes">
                    {this.state.heroes.map(hero => (
                        <HeroInfo 
                            key={shortid.generate()}
                            talents={hero.talents}
                            name={hero.name}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

class HeroInfo extends Grid {

    state = {
        infoShow: false
    }

    showInfo = () => {
        this.setState({
            infoShow: !this.state.infoShow
        })
    }
    
    render() {
        return (
            <div className="hero">
                <div className="hero__name" onClick={this.showInfo}>{this.props.name}</div>
                {this.state.infoShow == false 
                    ? null
                    : 
                    <div className="hero__info">
                        <div className="hero__talents">
                            <div className="hero__talents_row">
                                <div className="hero__talents_title">25 уровень</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl25.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl25.right}</div>
                            </div>
                            <div className="hero__talents_row">
                                <div className="hero__talents_title">20 уровень</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl20.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl20.right}</div>
                            </div>
                            <div className="hero__talents_row">
                                <div className="hero__talents_title">15 уровень</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl15.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl15.right}</div>
                            </div>
                            <div className="hero__talents_row">
                                <div className="hero__talents_title">10 уровень</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl10.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl10.right}</div>
                            </div>
                        </div>
                        <div className="hero__layout" onClick={this.showInfo}></div>
                    </div>
                }
            </div>
        )
    }
}

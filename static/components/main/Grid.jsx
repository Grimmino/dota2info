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

    componentWillMount = async (e) => {
        //const api_url = await fetch(`https://api.opendota.com/api/heroes`)
        //const heroes = await api_url.json()

        const heroesJson = heroesUrl
        const spellsJson = spellsUrl
        console.log(heroesJson)

        this.setState({
            heroes: heroesJson.heroes,
            spells: spellsJson.spells
        })
    }

    showInfo = () => {
        this.setState({
            infoShow: !this.state.infoShow
        })
    }

    render() {
        return (
            <div className="grid">
                <div className="grid__header">
                    <div className="grid__talant">+опыт</div>
                    <div className="grid__talant">скорость атаки</div>
                    <div className="grid__talant">урон способностей</div>
                    <div className="grid__talant">+к силе</div>
                    <div className="grid__talant">перезарядка</div>
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
                                <div className="hero__talents_cell">{this.props.talents.lvl10.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl10.right}</div>
                            </div>
                            <div className="hero__talents_row">
                                <div className="hero__talents_cell">{this.props.talents.lvl15.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl15.right}</div>
                            </div>
                            <div className="hero__talents_row">
                                <div className="hero__talents_cell">{this.props.talents.lvl20.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl20.right}</div>
                            </div>
                            <div className="hero__talents_row">
                                <div className="hero__talents_cell">{this.props.talents.lvl25.left}</div>
                                <div className="hero__talents_cell">{this.props.talents.lvl25.right}</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

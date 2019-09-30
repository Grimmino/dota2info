import React from 'react'
import shortid from 'shortid'
import regeneratorRuntime from "regenerator-runtime"



export default class Heroes extends React.Component {

    backGroundHero = (primaryAttr) => {
        switch(primaryAttr) {
            case 'str':
                return 'hero__name_str'
            case 'agi':
                return 'hero__name_agi'
            case 'int':
                return 'hero__name_int'
        }
    }
    render() {
        const arrayHeroes = !this.props.isFiltered ? this.props.heroes : this.props.filterHeroes
        return (
            <div className="grid__heroes">
                {arrayHeroes.map(hero => (
                    <div key={shortid.generate()} className="hero">
                        <div 
                            className={`hero__name ${this.backGroundHero(hero.primary_attr)}`}
                        >
                            {hero.localized_name}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
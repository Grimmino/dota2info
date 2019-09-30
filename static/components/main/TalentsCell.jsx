import React from 'react'
import shortid from 'shortid'

export default class TalentsCell extends React.Component {

    componentWillMount = () => {
        console.log(this.props.talents)
    }

    render() {
        return (
            <div className="hero__info">
                <div className="hero__talents">
                    <div className="hero__talents_row">
                        <div className="hero__talents_title">10 уровень</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl10.left}</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl10.right}</div>
                    </div>
                    <div className="hero__talents_row">
                        <div className="hero__talents_title">15 уровень</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl15.left}</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl15.right}</div>
                    </div>
                    <div className="hero__talents_row">
                        <div className="hero__talents_title">20 уровень</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl20.left}</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl20.right}</div>
                    </div>
                    <div className="hero__talents_row">
                        <div className="hero__talents_title">25 уровень</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl25.left}</div>
                        <div className="hero__talents_cell">{this.props.talents.lvl25.right}</div>
                    </div>
                </div>
                <div className="hero__layout" onClick={this.props.showInfo}></div>
            </div>
        )
    }
}
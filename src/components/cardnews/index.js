import React from 'react';
import './cardnext.scss';

class CardNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            date: this.props.date,
            highlight: this.props.highlight
        }
    }
    render() {
        return(
            <div className="card-container">
                <div className="staright-line"></div>
                <div className="card-content">
                    <div className="date-title">
                        <span className="type">{this.state.type}</span>
                        <span className="date">{this.state.date}</span>
                    </div>
                    <div className="highlight">
                        <span>{this.state.highlight}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardNews;
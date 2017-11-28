import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';
import './ChartBlock.css';

class ChartBlock extends Component {
    render() {
        const {
            vatta,
            pitta,
            kapha
        } = this.props;

        const chartData = {
            labels: ['pitta', 'kapha', 'vatta'],
            datasets: [{
                label: "Yoga type",
                backgroundColor: ['#fdbea3','#f492d2','#7c5cd1' ],
                borderColor: 'transparent',
                data: [pitta, kapha, vatta],
            }]
        };
        
        const chartOptions = {
            layout: {
                padding: 3,
                margin: 0
            },
            legend: {
                display: false
            },
            cutoutPercentage: 85
        }

        return (
            <section className="chart-block">
                <div className="chart-block__inner-round">

                    <div className="chart-block__label chart-block__label_vatta">
                        <p className="chart-block__label-text">Vatta</p>
                    </div>

                    <div className="chart-block__label chart-block__label_pitta">
                        <p className="chart-block__label-text">Pitta</p>
                    </div>

                    <div className="chart-block__label chart-block__label_kapha">
                        <p className="chart-block__label-text">Kapha</p>
                    </div>

                    <div className="chart-block__inner-rect">
                        <div className="chart-block__chart">
                        <Doughnut 
                                data={chartData}
                                width={145}
                                height={145}
                                options={chartOptions}
                            />
                        </div>
                        <div className="chart-block__types">
                            <div className="chart-block__type">
                                <p className="chart-block__data chart-block__data_vata">{vatta}% Vata</p>
                                <i className="chart-block__point chart-block__point_vata"></i>
                                <div className="chart-block__line chart-block__line_vata" style={{width: `${vatta * 0.7}px`}}></div>
                            </div>
                            
                            <div className="chart-block__type">
                                <p className="chart-block__data chart-block__data_pitta">{pitta}% Pitta</p>
                                <i className="chart-block__point chart-block__point_pitta"></i>
                                <div className="chart-block__line chart-block__line_pitta" style={{width: `${pitta * 0.7}px`}}></div>
                            </div>

                            <div className="chart-block__type">
                                <p className="chart-block__data chart-block__data_kapha">{kapha}% Kapha</p>
                                <i className="chart-block__point chart-block__point_kapha"></i>
                                <div className="chart-block__line chart-block__line_kapha" style={{width: `${kapha * 0.7}px`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ChartBlock;
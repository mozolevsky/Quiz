import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Route } from 'react-router-dom';
import Aromatherapy from './Aromatherapy/Aromatherapy';
import Colors from './Colors/Colors';
import Exercise from './Exercise/Exercise';
import FoodsAndDiet from './FoodsAndDiet/FoodsAndDiet';
import Gems from './Gems/Gems';
import Herbs from './Herbs/Herbs';
import Mantras from './Mantras/Mantras';
import Massage from './Massage/Massage';
import Overview from './Overview/Overview';
import Spices from './Spices/Spices';
import Yoga from './Yoga/Yoga';
import MealPlans from './MealPlans/MealPlans';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';




class ReportContent extends Component {
    render() {
        const {
            pagesData,
            vatta,
            pitta,
            kapha
        } = this.props;

        return (
            <ScrollToTop>
                <Route
                    path={`/report/type*`} 
                    render={() => <Overview 
                                        pageData={pagesData[0]}
                                        vatta={vatta}
                                        pitta={pitta}
                                        kapha={kapha}
                                    />}
                />
                <Route 
                    exact={true} 
                    path={`/report/overview`} 
                    render={() => <Overview 
                        pageData={pagesData[0]}
                        vatta={vatta}
                        pitta={pitta}
                        kapha={kapha}
                    />}
                />
                <Route 
                    exact={true} 
                    path={`/report/foods-and-diet`} 
                    render={() => <FoodsAndDiet pageData={pagesData[1]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/exercise`} 
                    render={() => <Exercise pageData={pagesData[2]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/herbs`} 
                    render={() => <Herbs pageData={pagesData[3]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/spices`} 
                    render={() => <Spices pageData={pagesData[4]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/aromatherapy`} 
                    render={() => <Aromatherapy pageData={pagesData[5]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/massage`} 
                    render={() => <Massage pageData={pagesData[6]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/yoga`} 
                    render={() => <Yoga pageData={pagesData[7]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/colors`} 
                    render={() => <Colors pageData={pagesData[8]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/mantras`} 
                    render={() => <Mantras pageData={pagesData[9]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/gems`} 
                    render={() => <Gems pageData={pagesData[10]}/>}
                />
                <Route 
                    exact={true} 
                    path={`/report/meal-plans`} 
                    render={() => <MealPlans pageData={pagesData[11]}/>}
                />                 
            </ScrollToTop>
        );
    }
}

export default ReportContent;
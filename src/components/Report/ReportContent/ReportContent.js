import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
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
        const {match, pagesData} = this.props;

        return (
            <ScrollToTop>
                <Route 
                    exact={true} 
                    path={`${match.path}`} 
                    render={() => <Overview pageData={pagesData[0]} />}
                />
                <Route 
                    exact={true} 
                    path={`${match.path}/foods-and-diet`} 
                    render={() => <FoodsAndDiet pageData={pagesData[1]}/>}
                />
                <Route 
                    exact={true} 
                    path={`${match.path}/exercise`} 
                    render={() => <Exercise pageData={pagesData[2]}/>}
                />
                <Route 
                    exact={true} 
                    path={`${match.path}/herbs`} 
                    render={() => <Herbs pageData={pagesData[3]}/>}
                />
                <Route 
                    exact={true} 
                    path={`${match.path}/spices`} 
                    render={() => <Spices pageData={pagesData[4]}/>}
                />


                <Route exact={true} path={`${match.path}/aromatherapy`} component={Aromatherapy}/>
                <Route exact={true} path={`${match.path}/colors`} component={Colors}/>
                <Route exact={true} path={`${match.path}/gems`} component={Gems}/>
                
                <Route exact={true} path={`${match.path}/mantras`} component={Mantras}/>
                <Route exact={true} path={`${match.path}/massage`} component={Massage}/>
                <Route exact={true} path={`${match.path}/yoga`} component={Yoga}/>
                <Route exact={true} path={`${match.path}/meal-plans`} component={MealPlans}/>
            </ScrollToTop>
        );
    }
}

export default ReportContent;
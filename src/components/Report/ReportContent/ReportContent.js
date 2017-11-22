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
        const {match} = this.props;

        return (
            <ScrollToTop>
                <Route exact={true} path={`${match.path}/aromatherapy`} component={Aromatherapy}/>
                <Route exact={true} path={`${match.path}/colors`} component={Colors}/>
                <Route exact={true} path={`${match.path}/exercise`} component={Exercise}/>
                <Route exact={true} path={`${match.path}/foods-and-diet`} component={FoodsAndDiet}/>
                <Route exact={true} path={`${match.path}/gems`} component={Gems}/>
                <Route exact={true} path={`${match.path}/herbs`} component={Herbs}/>
                <Route exact={true} path={`${match.path}/mantras`} component={Mantras}/>
                <Route exact={true} path={`${match.path}/massage`} component={Massage}/>
                <Route exact={true} path={`${match.path}/overview`} component={Overview}/>
                <Route exact={true} path={`${match.path}/spices`} component={Spices}/>
                <Route exact={true} path={`${match.path}/yoga`} component={Yoga}/>
                <Route exact={true} path={`${match.path}/meal-plans`} component={MealPlans}/>
            </ScrollToTop>
        );
    }
}

export default ReportContent;
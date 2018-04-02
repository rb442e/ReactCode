/**
 * Created by RBhatnagar on 3/29/2018.
 */

"use strict";

import React from 'react';
import './CustomLeftNav.css';
import {Link} from 'react-router-dom';

export default class CustomLeftNav extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li><Link to={"hoa"}>GetMemberHeartDetails</Link></li>
                    <li><Link to={"home"}>GetBehaviorQuestions</Link></li>
                    <li><Link to={"news"}>GetMemberResponsesByMemberCeid</Link></li>
                    <li><Link to={"about"}>GetMemberAttributesByMemberCeId</Link></li>
                    <li><Link to={"about"}>GetSurveyDetailsByMember</Link></li>
                    <li><Link to={"about"}>MemberMobileGetByMemberCeId</Link></li>
                    <li><Link to={"about"}>LoadUserNameByMemberID</Link></li>
                    <li><Link to={"about"}>MemberGoalGetByMemberAndGoalIdAndInstanceId</Link></li>
                    <li><Link to={"about"}>GetMemberAttributesByMemberCeId</Link></li>
                    <li><Link to={"about"}>GetSurveyDetailsByMember</Link></li>
                    <li><Link to={"about"}>MemberMobileGetByMemberCeId</Link></li>
                    <li><Link to={"about"}>LoadUserNameByMemberID</Link></li>
                    <li><Link to={"about"}>MemberGoalGetByMemberAndGoalIdAndInstanceId</Link></li>
                </ul>
            </div>
        )
    }
}
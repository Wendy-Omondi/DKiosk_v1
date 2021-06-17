import React, { Component } from 'react';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { EventSettingModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

class Scheduler extends Component {

    localData; EventSettingModel ={
        datasource: [{
            EndTime: new Date(2021, 0, 1, 6, 30),
            StartTime: new Date(2021, 0, 17, 4, 0)
        }]
    }
    remoteData = new DataManager({
        url: 'https://js.syncfunction.com/demos/ejservice/api/Schedule/LocalData',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    render() {
        return(
            <ScheduleComponent currentView='Month' selectedData={ new Date(2021, 0, 17)}
            eventSettings={{datasource: this.remoteData}}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        )
    }
}

export default Scheduler;

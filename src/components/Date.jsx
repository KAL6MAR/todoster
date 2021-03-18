import React from 'react';

import DatePicker from 'react-datepicker';

function Date() {
    const [startDate, setStartDate] = React.useState();
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="uk"
        />
    );
}

export default Date;

import { addDays } from "helpers/dateProcessing";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePicker() {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
    });

    const handleDateChange = (newDates) => {
        console.log(newDates);
        setDates(newDates);
    };
    return (
        <div>
            <Datepicker value={dates} onChange={handleDateChange} />
        </div>
    );
}

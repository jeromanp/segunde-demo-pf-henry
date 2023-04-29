export const getUnavailableDates = () => {};

export const checkDisponibility = () => {};

//Check si dos periodos de tiempo se suporponen
export const checkOverlappingPeriods = (
    startDate1,
    endDate1,
    startDate2,
    endDate2
) => {
    if (startDate1 < endDate2 && startDate2 < endDate1) {
        return true;
    } else {
        return false;
    }
};

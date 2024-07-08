import { getDateFromValue, getNextDate, getPrevDate, getStartYear } from '../utils';

import { CalendarStateType, Action, ActionType, InitialState, SizeMap } from './types';

const sizeMap: SizeMap = {
    Days: [5, 6],
    Months: [3, 2],
    Years: [3, 2],
    Quarter: [2, 1],
};

export const getInitialState = (value: Date | undefined, calendarState: CalendarStateType): InitialState => {
    const initDate = value || new Date();
    const date = getDateFromValue(initDate);

    return {
        date: { ...date, day: value !== undefined ? date.day : 0 },
        startYear: getStartYear(date.year),
        calendarState,
        size: sizeMap[calendarState],
    };
};

export const reducer = (state: InitialState, action: Action): InitialState => {
    switch (action.type) {
        case ActionType.PREVIOUS_MONTH: {
            const { year, monthIndex } = action.payload;
            const [prevYear, prevMonthIndex] = getPrevDate(year, monthIndex);

            return {
                ...state,
                date: {
                    day: state.date.day,
                    monthIndex: prevMonthIndex,
                    year: prevYear,
                },
            };
        }
        case ActionType.NEXT_MONTH: {
            const { monthIndex, year } = action.payload;
            const [nextYear, nextMonthIndex] = getNextDate(year, monthIndex);

            return {
                ...state,
                date: {
                    day: state.date.day,
                    monthIndex: nextMonthIndex,
                    year: nextYear,
                },
            };
        }
        case ActionType.PREVIOUS_YEAR: {
            const { step } = action.payload;

            return {
                ...state,
                startYear: state.startYear - step,
                date: {
                    day: state.date.day,
                    monthIndex: state.date.monthIndex,
                    year: state.date.year - step,
                },
            };
        }
        case ActionType.NEXT_YEAR: {
            const { step } = action.payload;

            return {
                ...state,
                startYear: state.startYear + step,
                date: {
                    day: state.date.day,
                    monthIndex: state.date.monthIndex,
                    year: state.date.year + step,
                },
            };
        }
        case ActionType.PREVIOUS_START_YEAR: {
            const { yearsCount } = action.payload;

            return {
                ...state,
                startYear: state.startYear - yearsCount,
            };
        }
        case ActionType.NEXT_START_YEAR: {
            const { yearsCount } = action.payload;

            return {
                ...state,
                startYear: state.startYear + yearsCount,
            };
        }
        case ActionType.UPDATE_DATE: {
            const { value } = action.payload;
            const date = getDateFromValue(value);
            const startYear = getStartYear(value.getFullYear());

            return {
                ...state,
                date,
                startYear,
            };
        }
        case ActionType.UPDATE_MONTH: {
            const { calendarState, monthIndex, size } = action.payload;

            return {
                ...state,
                size,
                calendarState,
                date: {
                    day: state.date.day,
                    monthIndex,
                    year: state.date.year,
                },
            };
        }
        case ActionType.UPDATE_YEAR: {
            const { calendarState, year, size } = action.payload;

            return {
                ...state,
                size,
                calendarState,
                date: {
                    day: state.date.day,
                    monthIndex: state.date.monthIndex,
                    year,
                },
            };
        }
        case ActionType.UPDATE_CALENDAR_STATE: {
            const { calendarState, size } = action.payload;

            return {
                ...state,
                calendarState,
                size: size || state.size,
            };
        }
        default:
            return state;
    }
};

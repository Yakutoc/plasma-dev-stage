import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { classes } from '../DatePicker.tokens';
import type { UseDatePickerProps } from '../DatePickerBase.types';
import {
    formatCalendarValue,
    formatInputValue,
    getDateFromFormat,
    getMaskedDateOnInput,
    validateDateWithFullMonth,
} from '../utils/dateHelper';
import type { DateInfo } from '../../Calendar/Calendar.types';

export const useDatePicker = ({
    currentValue,
    setInputValue,
    setCalendarValue,
    dateFormatDelimiter,
    format,
    lang = 'ru',
    disabled,
    readOnly,
    maskWithFormat,
    valueError,
    valueSuccess,
    name,
    onChangeValue,
    onCommitDate,
    onChange,
}: UseDatePickerProps) => {
    const datePickerErrorClass = valueError ? classes.datePickerError : undefined;
    const datePickerSuccessClass = valueSuccess ? classes.datePickerSuccess : undefined;

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) {
            return;
        }
        const { value } = event.target;

        const newValue = maskWithFormat
            ? getMaskedDateOnInput(value, format, dateFormatDelimiter(), currentValue)
            : value;

        if (!format) {
            setCalendarValue(formatCalendarValue(newValue));
            setInputValue(formatInputValue({ value: newValue, format, lang }));
            onChangeValue?.(event, newValue);
            onChange?.({ target: { value: newValue, name } });

            return;
        }

        const { hasMonthFullName, isValidMonth, isLengthEqual } = validateDateWithFullMonth({
            currentValue: newValue,
            format,
            lang,
        });

        if ((!hasMonthFullName && newValue?.length === format?.length) || (isValidMonth && isLengthEqual)) {
            setCalendarValue(formatCalendarValue(newValue, format, lang));
        }

        setInputValue(
            formatInputValue({ value: newValue, format, lang, hasMonthFullName, isValidMonth, isLengthEqual }),
        );

        onChangeValue?.(event, newValue);
        onChange?.({ target: { value: newValue, name } });
    };

    const handleCommitDate = (
        date?: Date | string,
        applyFormat?: boolean,
        isCalendarValue?: boolean,
        dateInfo?: DateInfo,
    ) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            setCalendarValue(undefined);
            setInputValue('');

            return onCommitDate?.('', false, true);
        }

        if (isCalendarValue) {
            const formattedInputValue = formatInputValue({ value: date, format, lang });

            setCalendarValue(formatCalendarValue(date, format, lang));
            setInputValue(formattedInputValue);

            onCommitDate?.(date, false, true, dateInfo);
            onChangeValue?.(null, formattedInputValue);
            onChange?.({ target: { value: formattedInputValue, name } });

            return;
        }

        const formatString = applyFormat ? format : undefined;

        const { value: newDate, isError, isSuccess } = getDateFromFormat(date, formatString, lang);
        const formattedInputValue = formatInputValue({ value: newDate, format, lang });

        setCalendarValue(formatCalendarValue(newDate, format, lang));
        setInputValue(formattedInputValue);

        onCommitDate?.(newDate, isError, isSuccess);
        onChangeValue?.(null, formattedInputValue);
        onChange?.({ target: { value: formattedInputValue, name } });
    };

    const updateExternalDate = (
        externalDate: Date | string | undefined,
        inputSetter: Dispatch<SetStateAction<string>>,
        calendarSetter: Dispatch<SetStateAction<Date | undefined>>,
    ) => {
        inputSetter(formatInputValue({ value: externalDate, format, lang }));

        if (!format) {
            calendarSetter(formatCalendarValue(externalDate, undefined, lang));
            return;
        }

        if (!externalDate) {
            calendarSetter(undefined);
            return;
        }

        const { value: newDate, isError } = getDateFromFormat(externalDate, undefined, lang);

        if (!isError) {
            calendarSetter(formatCalendarValue(newDate, format, lang));
        }
    };

    return {
        datePickerErrorClass,
        datePickerSuccessClass,
        handleChangeValue,
        handleCommitDate,
        updateExternalDate,
    };
};

const _validateLogin = (value: string): string => {
    const basicError = validateRequiredNoSpaces(value, 'Логин');
    if (basicError) return basicError;

    if (value.length < 5) {
        return 'Логин должен содержать не менее 5 символов.';
    } else if (value.length > 20) {
        return 'Логин не может содержать более 20 символов.';
    }

    const latinAlnum = /^[A-Za-z0-9]+$/;
    if (!latinAlnum.test(value)) {
        return 'Введены недопустимые символы. Допустимо использовать буквенно-числовые значения (латиница).';
    }

    return '';
};

const _validatePassword = (value: string): string => {
    const basicError = validateRequiredNoSpaces(value, 'Пароль');
    if (basicError) return basicError;
}

const validateRequiredNoSpaces = (value: string, fieldName = 'Поле'): string => {
    if (!value) {
        return `Обязательно для заполнения.`;
    }

    if (/\s/.test(value)) {
        return `${fieldName} не должен содержать пробелы.`;
    }

    return '';
};

const withTrim =
    (validator: (value: string) => string) =>
        (value: string): string => {
            const trimmed = value.trim();
            return validator(trimmed);
        };

export const validateLogin = withTrim(_validateLogin);
export const validatePassword = withTrim(_validatePassword);
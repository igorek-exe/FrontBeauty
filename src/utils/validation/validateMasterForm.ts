export const validateLogin = (value: string): string => {
    const trimmed = value.trim();

    if (!trimmed) {
        return 'Обязательно для заполнения.';
    }

    if (/\s/.test(trimmed)) {
        return 'Логин не должен содержать пробелы.';
    }

    if (trimmed.length < 5) {
        return 'Логин должен содержать не менее 5 символов.';
    } else if (trimmed.length > 20) {
        return 'Логин не может содержать более 20 символов.';
    }

    const latinAlnum = /^[A-Za-z0-9]+$/;
    if (!latinAlnum.test(trimmed)) {
        return 'Введены недопустимые символы. Допустимо использовать буквенно-числовые значения (латиница).';
    }

    return '';
};
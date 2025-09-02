type Styles = { [key: string]: string };

export const cn = (
    styles: Styles,
    ...classes: (keyof Styles | string | undefined)[]
) => {
    return classes
        .filter(Boolean)
        .map(cls => (cls && styles[cls as string]) || cls)
        .join(' ');
};
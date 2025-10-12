import { useState } from 'react';
import type { EducationItem } from '@/components';

export const useMasterEducationForm = (initialEducation: EducationItem[]) => {
    const [education, setEducation] = useState<EducationItem[]>(initialEducation);

    const handleChange = (index: number, field: keyof EducationItem, value: string) => {
        setEducation((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
    };

    const handleAdd = () => {
        setEducation((prev) => [...prev, { title: '', year: '' }]);
    };

    const handleRemove = (index: number) => {
        setEducation((prev) => prev.filter((_, i) => i !== index));
    };

    return { education, setEducation, handleChange, handleAdd, handleRemove };
};

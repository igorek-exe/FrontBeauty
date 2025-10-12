import { useState } from 'react';
import type { ExperienceItem } from '@/components';

export const useMasterExperienceForm = (initialExperience: ExperienceItem[]) => {
    const [experience, setExperience] = useState<ExperienceItem[]>(initialExperience);

    const handleChange = (index: number, field: keyof ExperienceItem, value: string) => {
        setExperience((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
    };

    const handleAdd = () => {
        setExperience((prev) => [...prev, { title: '', yearStart: '', yearEnd: '' }]);
    };

    const handleRemove = (index: number) => {
        setExperience((prev) => prev.filter((_, i) => i !== index));
    };

    return { experience, setExperience, handleChange, handleAdd, handleRemove };
};

export type SearchFormValues = {
    district: string | null;
    specialty: string | null;
};

export type UseSearchFormReturn = {
    district: string | null;
    specialty: string | null;
    showClearButton: boolean;
    handleSearch: (e: React.FormEvent) => void;
    handleRemoveDistrict: () => void;
    handleRemoveSpecialty: () => void;
    handleClearAllFilters: () => void;
    setDistrictValue: (label: string) => void;
    setSpecialtyValue: (label: string) => void;
};

export class SearchFormReturn {}
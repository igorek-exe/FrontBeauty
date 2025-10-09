import React from 'react';
import { Input } from '@/components';
import type { AddressItem } from '@/components';

type Props = {
    addresses: AddressItem[];
    onChange: (index: number, field: keyof AddressItem, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    onSave: () => void;
    onCancel: () => void;
};

const MasterAdressesForm: React.FC<Props> = ({ addresses, onChange, onAdd, onRemove, onSave, onCancel }) => {
    return (
        <div>
            {addresses.map((item, index) => (
                <div key={index}>
                    <div>
                        <Input
                            type="text"
                            name={`address-${index}`}
                            placeholder="Адрес"
                            value={item.address}
                            onChange={(e) => onChange(index, 'address', e.target.value)}
                        />
                        <Input
                            type="text"
                            name={`region-${index}`}
                            placeholder="Район"
                            value={item.region}
                            onChange={(e) => onChange(index, 'region', e.target.value)}
                        />
                    </div>
                    <button onClick={() => onRemove(index)} aria-label="Удалить">
                        ×
                    </button>
                </div>
            ))}

            <button type="button" onClick={onAdd}>
                + Добавить адрес
            </button>

            <div>
                <button onClick={onSave}>
                    Сохранить
                </button>
                <button onClick={onCancel}>
                    Отмена
                </button>
            </div>
        </div>
    );
};

export { MasterAdressesForm };

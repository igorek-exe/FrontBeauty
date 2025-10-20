import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '@/stores/slices/authSlice.ts';
import { RegisterMasterCredentials } from '@/stores/types/authTypes';
import { AppDispatch } from '@/stores/store.ts';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import EyeEmpty from '@/assets/icons/EyeEmpty.svg?react';
import {
    validateLogin,
    passwordValidator,
    validatePasswordConfirmation,
    validateEmail,
} from '@/utils';
import { Button, LinkButton, Picture, SvgIcon, RoleSelect } from '@/components';
import { Input } from '@/components';

interface Errors {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    agreeToPersonalData?: string;
}

const RegisterMaster: React.FC = () => {
    const [credentials, setCredentials] = useState<RegisterMasterCredentials>({
        role: 'master',
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Errors>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreeToPersonalData: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmationVisible, setPasswordConfirmationVisibile] = useState(false);
    const [agreeToPersonalData, setAgreeToPersonalData] = useState(false);

    /*const [isLoading, setIsLoading] = useState(false);*/
    const [loginError, setLoginError] = useState<string | null>(null);
    const [blurredField, setBlurredField] = useState<string | null>(null);
    const [validFields, setValidFields] = useState<string[]>([]);
    const [invalidFields, setInvalidFields] = useState<string[]>([]);

    const [iconClass, setIconClass] = useState({
        password: '',
        passwordConfirmation: '',
    });

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (blurredField === 'password') {
            setIconClass((prev) => ({
                ...prev,
                password: errors.password ? 'passwordErr' : 'passwordValid',
            }));
        }

        if (blurredField === 'passwordConfirmation') {
            setIconClass((prev) => ({
                ...prev,
                passwordConfirmation: errors.passwordConfirmation
                    ? 'passwordConfirmErr'
                    : 'passwordConfirmValid',
            }));
        }
    }, [blurredField, errors.password, errors.passwordConfirmation]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordConfirmationVisibility = () => {
        setPasswordConfirmationVisibile(!passwordConfirmationVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleAgreeChange = () => {
        const newValue = !agreeToPersonalData;
        setAgreeToPersonalData(newValue);

        if (newValue) {
            setErrors((prev) => ({ ...prev, agreeToPersonalData: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreeToPersonalData) {
            setErrors((prev) => ({
                ...prev,
                agreeToPersonalData:
                    'Необходимо подтвердить согласие на обработку персональных данных.',
            }));
            return;
        }

        setLoginError(
            errors.email ||
                errors.username ||
                errors.password ||
                errors.passwordConfirmation ||
                errors.agreeToPersonalData
        );

        try {
            await dispatch(register(credentials)).unwrap();
            navigate('/master');
        } catch (error) {
            if (error instanceof Error) {
                setLoginError(error.message);
            } else if (typeof error === 'string') {
                setLoginError(error);
            } else {
                setLoginError('Произошла неизвестная ошибка');
            }
        }
    };

    const getInputStyle = (name: string) => {
        if (invalidFields.includes(name)) {
            return {
                border: '2px solid #EE443F',
            };
        }

        if (validFields.includes(name)) {
            return {
                border: '2px solid #C5E9CD',
            };
        }

        return {
            border: '1.5px solid #ccc',
        };
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let errorMessage = '';

        switch (name) {
            case 'username':
                errorMessage = validateLogin(value);
                break;
            case 'password':
                errorMessage = passwordValidator(value);
                break;
            case 'passwordConfirmation':
                errorMessage = validatePasswordConfirmation(value, credentials.password);
                break;
            case 'email':
                errorMessage = validateEmail(value);
                break;
        }

        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
        setBlurredField(name);

        setValidFields((prev) => {
            if (!errorMessage && !prev.includes(name)) {
                return [...prev, name];
            }
            if (errorMessage && prev.includes(name)) {
                return prev.filter((f) => f !== name);
            }
            return prev;
        });

        setInvalidFields((prev) => {
            if (errorMessage && !prev.includes(name)) {
                return [...prev, name];
            }
            if (!errorMessage && prev.includes(name)) {
                return prev.filter((f) => f !== name);
            }
            return prev;
        });
    };

    const getHintText = (name: string, validText: string, defaultText: string) => {
        return validFields.includes(name) ? validText : defaultText;
    };

    const getHintClass = (name: string) => {
        if (validFields.includes(name)) {
            return `${styles.inputHint} ${styles.validHint}`;
        }
        if (invalidFields.includes(name)) {
            return `${styles.inputHint}`;
        }
        return styles.inputHint;
    };

    return (
        <div>
            <div className={styles.centred}>
                <div className={styles.leftSide}>
                    <Picture src={'/images/master-reg.png'} alt={'маникюр мастера'} />
                    <div className={styles.leftSIdeText}>
                        <h3 className={styles.leftSideTitle}>Профиль мастеров</h3>
                        <p className={styles.leftSideDesc}>
                            Создайте свою страницу специалиста
                            <br />и получайте дополнительный поток клиентов. 3 миллиона человек ищут
                            услуги и специалистов каждый месяц.
                        </p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.loginFormContainer}>
                        <h2 className={styles.loginTitle}>Регистрация</h2>
                        <div className={styles.wrappRoleSelect}>
                            <RoleSelect />
                        </div>
                        <div className={styles.loginLinks}>
                            <span className={styles.noAccount}>Уже есть Личный Профиль?</span>
                            <LinkButton to="/login" className="linkEnter">
                                Войти
                            </LinkButton>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="username" className={styles.formLabel}>
                                    Логин
                                </label>
                                <Input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="логин"
                                    className={styles.formInput}
                                    style={getInputStyle('username')}
                                />
                                {errors.username ? (
                                    <span className={`${styles.errorMessage} ${styles.inputHint}`}>
                                        {errors.username}
                                    </span>
                                ) : (
                                    <span className={getHintClass('username')}>
                                        {getHintText('username', 'логин', 'введите логин')}
                                    </span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>
                                    Email
                                </label>
                                <Input
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="email"
                                    className={styles.formInput}
                                    style={getInputStyle('email')}
                                />
                                {errors.email ? (
                                    <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                        {errors.email}
                                    </span>
                                ) : (
                                    <span className={getHintClass('email')}>
                                        {getHintText('email', 'email', 'введите email')}
                                    </span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="password" className={styles.formLabel}>
                                    Пароль
                                </label>
                                <div className={styles.passwordInputContainer}>
                                    <Input
                                        type={passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="пароль"
                                        className={styles.formInput + ' ' + styles.passwordInput}
                                        style={getInputStyle('password')}
                                    />
                                    <button
                                        type="button"
                                        className={styles.passwordToggleButton}
                                        onClick={togglePasswordVisibility}
                                    >
                                        <SvgIcon Icon={EyeEmpty} className={iconClass.password} />
                                    </button>
                                </div>
                                {errors.password ? (
                                    <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                        {errors.password}
                                    </span>
                                ) : (
                                    <span className={getHintClass('password')}>
                                        {getHintText('password', 'пароль', 'придумайте пароль')}
                                    </span>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="passwordConfirmation" className={styles.formLabel}>
                                    Пароль
                                </label>
                                <div className={styles.passwordInputContainer}>
                                    <Input
                                        type={passwordConfirmationVisible ? 'text' : 'password'}
                                        name="passwordConfirmation"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="повторите пароль"
                                        className={styles.formInput + ' ' + styles.passwordInput}
                                        style={getInputStyle('passwordConfirmation')}
                                    />
                                    <button
                                        type="button"
                                        className={styles.passwordToggleButton}
                                        onClick={togglePasswordConfirmationVisibility}
                                    >
                                        <SvgIcon
                                            Icon={EyeEmpty}
                                            className={iconClass.passwordConfirmation}
                                        />
                                    </button>
                                </div>
                                {errors.passwordConfirmation ? (
                                    <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                        {errors.passwordConfirmation}
                                    </span>
                                ) : (
                                    <span className={getHintClass('passwordConfirmation')}>
                                        {getHintText(
                                            'passwordConfirmation',
                                            'пароль',
                                            'повторите пароль'
                                        )}
                                    </span>
                                )}
                            </div>

                            <div className={styles.formAgreeGroup}>
                                <label className={styles.checkboxLabel}>
                                    <span className={styles.checkboxText}>
                                        Согласие на обработку персональных данных
                                    </span>
                                    <Input
                                        type="checkbox"
                                        name="agree"
                                        checked={agreeToPersonalData}
                                        onChange={handleAgreeChange}
                                        className={`${styles.checkboxInput} 
                                        ${errors.agreeToPersonalData ? styles.checkboxError : ''}`}
                                    />
                                </label>

                                {errors.agreeToPersonalData && (
                                    <span className={styles.errorAgree}>
                                        {errors.agreeToPersonalData}
                                    </span>
                                )}
                            </div>

                            <div className={styles.formBtnGroup}>
                                {loginError && (
                                    <div className={styles.errorServer}>
                                        {loginError}
                                    </div>
                                )}
                                <Button
                                    children="Продолжить"
                                    type="submit"
                                    classNames={{ buttonClass: 'registerButton' }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { RegisterMaster };

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '@/stores/slices/authSlice.ts';
import { RegisterMasterCredentials } from '@/stores/types/authTypes';
import { AppDispatch } from '@/stores/store.ts';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import EyeEmpty from '@/assets/icons/EyeEmpty.svg?react';
import masterImage from '/images/master.png';
import { validateLogin } from '@/utils';
import { Button, LinkButton, SvgIcon } from '@/components';

interface Errors {
    login: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    agreeToPersonalData?: string;
}

/*interface LoginFormProps {
    onSuccess?: (token: string) => void;
    onError?: (error: string) => void;
}*/

const RegisterMaster: React.FC = () => {
    const [credentials, setCredentials] = useState<RegisterMasterCredentials>({
        role: 'master',
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Errors>({
        login: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreeToPersonalData: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmationVisible, setPasswordConfirmationVisibile] = useState(false);
    const [agreeToPersonalData, setAgreeToPersonalData] = useState(false);

    /*const [isLoading, setIsLoading] = useState(false);*/
    const [loginError, setLoginError] = useState('');

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordConfirmationVisibility = () => {
        setPasswordConfirmationVisibile(!passwordConfirmationVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreeToPersonalData) {
            setErrors((prev) => ({
                ...prev,
                agreeToPersonalData: 'Необходимо подтвердить согласие на обработку персональных данных.',
            }));
            return;
        }

        setLoginError(
            errors.email || errors.login || errors.password || errors.passwordConfirmation || errors.agreeToPersonalData
        );
        console.log(errors.email || errors.login || errors.password || errors.passwordConfirmation);

        try {
            await dispatch(register(credentials)).unwrap();
            navigate('/master');
        } catch (error: never) {
            setLoginError(error);
        }
    };

    const getInputStyle = (fieldValue: string, error?: string) => {
        if (error) {
            return {
                borderColor: 'red',
                backgroundColor: '#ffe6e6',
            };
        } else if (fieldValue.length > 6) {
            return {
                borderColor: 'green',
                backgroundColor: '#e6ffe6',
            };
        } else {
            return {
                borderColor: '#ccc',
                backgroundColor: 'white',
            };
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let errorMessage = '';

        switch (name) {
            case 'login':
                errorMessage = validateLogin(value);
                break;
        }

        const isPasswordContainsLogin = (password, login) => {
            const lowerPassword = password.toLowerCase();
            const lowerLogin = login.toLowerCase();
            return lowerPassword.includes(lowerLogin);
        };
        if (name === 'email') {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Адрес электронной почты введен некорректно';
            }
        }

        if (name === 'password') {
            if (value.length < 6) {
                errorMessage = 'Пароль должен содержать не менее 6 символов';
            } else {
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!?@#$%^])[A-Za-z\d!?@#$%^]{6,15}$/;
                if (!passwordRegex.test(value)) {
                    errorMessage =
                        'Пароль должен содержать минимум 1 букву, 1 цифру, 1 спец. символ и быть длиной от 6 до 15 символов без пробелов.';
                } else if (credentials.username && isPasswordContainsLogin(value, credentials.username)) {
                    errorMessage = 'Пароль не должен содержать логин.';
                }
            }
        }

        if (name === 'passwordConfirmation') {
            if (value !== credentials.password) {
                errorMessage = 'Пароли не совпадают';
            }
        }

        if (name === 'phoneNumber') {
            const phoneRegex = /^\+?\d{10,15}$/;
            if (!phoneRegex.test(value)) {
                errorMessage = 'Номер телефона введен некорректно.';
            }
        }

        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    };

    return (
        <div className="container">
            <div className={styles.centred}>
                <div className={styles.leftSide}>
                    <img src={masterImage} alt="master" />
                    <div className={styles.leftSIdeText}>
                        <h4>Профиль мастеров</h4>
                        <p>
                            Создайте свою страницу специалиста и получайте дополнительный поток клиентов. 3 миллиона
                            человек ищут услуги и специалистов каждый месяц.
                        </p>
                    </div>
                </div>

                <div className={styles.loginFormContainer}>
                    <div className={styles.loginHeader}>
                        <h2 className={styles.loginTitle}>Регистрация для Мастеров</h2>
                        <div className={styles.loginLinks}>
                            <span className="noAccount">Уже есть Личный Профиль?</span>
                            <LinkButton to="/login" className="registerLink">
                                Вход
                            </LinkButton>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="login" className={styles.formLabel}>
                                Логин
                            </label>
                            <input
                                type="text"
                                id="login"
                                name="login"
                                value={credentials.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="логин"
                                className={styles.formInput}
                                style={{ ...getInputStyle(credentials.username, errors.login) }}
                            />
                            {errors.login ? (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>{errors.login}</span>
                            ) : (
                                <span className={styles.inputHint}>придумайте логин</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="email"
                                className={styles.formInput}
                                style={{ ...getInputStyle(credentials.email, errors.email) }}
                            />
                            {errors.email ? (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>{errors.email}</span>
                            ) : (
                                <span className={styles.inputHint}>введите email</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.formLabel}>
                                Пароль
                            </label>
                            <div className={styles.passwordInputContainer}>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="пароль"
                                    className={styles.formInput + ' ' + styles.passwordInput}
                                    style={{ ...getInputStyle(credentials.password, errors.password) }}
                                />
                                <button
                                    type="button"
                                    className={styles.passwordToggleButton}
                                    onClick={togglePasswordVisibility}
                                >
                                    <SvgIcon Icon={EyeEmpty} className="" />
                                </button>
                            </div>
                            {!errors.password ? (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>придумайте пароль</span>
                            ) : (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>{errors.password}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="passwordConfirmation" className={styles.formLabel}>
                                Пароль
                            </label>
                            <div className={styles.passwordInputContainer}>
                                <input
                                    type={passwordConfirmationVisible ? 'text' : 'password'}
                                    id="passwordConfirmation"
                                    name="passwordConfirmation"
                                    value={'test'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="повторите пароль"
                                    className={styles.formInput + ' ' + styles.passwordInput}
                                    style={{
                                        ...getInputStyle('test', errors.passwordConfirmation),
                                    }}
                                />
                                <button
                                    type="button"
                                    className={styles.passwordToggleButton}
                                    onClick={togglePasswordConfirmationVisibility}
                                >
                                    <SvgIcon Icon={EyeEmpty} className="" />
                                </button>
                            </div>
                            {!errors.passwordConfirmation ? (
                                <span className={styles.inputHint}>повторите пароль</span>
                            ) : (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.passwordConfirmation}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.checkboxLabel}>
                                <span className={styles.checkboxText}>Согласие на обработку персональных данных</span>
                                <input
                                    type="checkbox"
                                    checked={agreeToPersonalData}
                                    onChange={() => setAgreeToPersonalData(!agreeToPersonalData)}
                                    className={styles.checkboxInput}
                                />
                            </label>

                            {errors.agreeToPersonalData && (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.agreeToPersonalData}
                                </span>
                            )}
                        </div>

                        <div className={styles.formBtnGroup}>
                            {loginError && (
                                <div className={styles.errorMessage + ' ' + styles.inputHint}>{loginError}</div>
                            )}
                            <Button children="Продолжить" type="submit" classNames={{ buttonClass: 'loginButton' }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { RegisterMaster };

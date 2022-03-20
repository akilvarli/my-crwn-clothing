import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords not match')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            setCurrentUser(user)
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }


    const handleChange = e => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput type="text"
                    required
                    label='Display Name'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange} />

                <FormInput
                    type="email"
                    required
                    label='Email'
                    name='email'
                    value={email}
                    onChange={handleChange} />

                <FormInput
                    type="password"
                    required
                    label='Password'
                    name='password'
                    value={password}
                    onChange={handleChange} />

                <FormInput
                    type="password"
                    required
                    label='Confirm Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange} />

                <Button buttonType="inverted">Sign up</Button>
            </form>

        </div>
    )
}

export default SignUpForm
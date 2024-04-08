import { object, string, ref } from 'yup'

export const registerSchema = object().shape( {
   email: string().email().required( 'Email is required' ).email( 'Invalid email address' ),
   password: string().required( 'Password is required' ).min( 6, 'Password must be at least 6 characters' ),
   confirmPassword: string().oneOf( [ ref( 'password' ), null ], 'Passwords must match' )
})

export const loginSchema = object().shape( {
   email: string().email().required( 'Email is required' ).email( 'Invalid email address' ),
   password: string().required( 'Password is required' ).min( 6, 'Password must be at least 6 characters' )
})
import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        
});



import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            street: "",
            number: "",
            city: "", 
            password: "",
            confirmPassword: ""
        },
        validationSchema: yup.object({
            name: yup.string().max(25, 'Must be 15 characters or less').required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            street: yup.string(),
            number: yup.number(),
            city: yup.string(),
            password: yup.string().min(8).required(),
            confirmPassword: yup.string().min(8).required()    
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        });
        return (
            <div>
            <form onSubmit={formik.handleSubmit}> 
                <input name="name" placeholder="Name" {...formik.getFieldProps("name")} />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
                <br />
                <input name="email" placeholder="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <br />
                <input name="password" placeholder="Password" {...formik.getFieldProps("password")} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <br />
                <input name="confirmPassword" placeholder="Confirm Password" {...formik.getFieldProps("confirmPassword")} />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
                <br />
                <input name="street" placeholder="Street" {...formik.getFieldProps("street")} />
                {formik.touched.street && formik.errors.street ? (
                    <div>{formik.errors.street}</div>
                ) : null}
                <br />
                <input name="number" placeholder="Number" {...formik.getFieldProps("number")} />
                {formik.touched.number && formik.errors.number ? (
                    <div>{formik.errors.number}</div>
                ) : null}
                <br />
                <input name="city" placeholder="City" {...formik.getFieldProps("city")} />
                {formik.touched.city && formik.errors.city ? (
                    <div>{formik.errors.city}</div>
                ) : null}
                <br />
                <button type="submit">Submit</button>
            </form>
            
            </div>
        );
    };

export default MyForm;
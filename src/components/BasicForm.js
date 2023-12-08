import { useFormik } from "formik"
import { Form, Input } from "./Forms.styled"
import { basicSchema } from "./schemas"
const onSubmit = () => {
    console.log("submitted")
};

export const BasicForm = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    console.log(errors);
    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email" >Email</label>
            <Input value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email" type="email" placeholder="Please enter your email..." />

            <label htmlFor="age" >Age</label>
            <Input value={values.age}
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                id="age" placeholder="Please enter your age..." />

            <label htmlFor="password" >Password</label>
            <Input value={values.password}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                id="password" placeholder="Please enter your password..." />

            <label htmlFor="confirmPassword" >Confirm Password</label>
            <Input value={values.confirmPassword}
                type="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword" placeholder="Please repeat your password..." />
            <button type="submit">Submit</button>
        </Form>
    )
}
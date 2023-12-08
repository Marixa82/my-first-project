import { useFormik } from "formik"
import { Form, Input } from "./Forms.styled"

export const BasicForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",

        }
    })
    console.log(formik)
    return (
        <Form>
            <label htmlFor="email" >Email</label>
            <Input value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email" type="email" placeholder="Please enter your email..." />

            <label htmlFor="age" >Age</label>
            <Input value={formik.values.age}
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="age" placeholder="Please enter your age..." />

            <label htmlFor="password" >Password</label>
            <Input value={formik.values.password}
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email" placeholder="Please enter your password..." />
        </Form>
    )
}
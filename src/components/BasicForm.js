import { useFormik } from "formik"
// import { Form} from "./Forms.styled"
import './Forms.css';
import { basicSchema } from "./schemas"

const onSubmit = () => {
    console.log("submitted")
};

export const BasicForm = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
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
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email" >Email</label>
            <input value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email" type="email" placeholder="Please enter your email..."
                className={errors.email && touched.email ? "error-email" : ""}
            />
            {/* {errors.email && touched.email && (
                <ErrorBlock>
                    {errors.email}
                </ErrorBlock>
            )} */}

            <label htmlFor="age" >Age</label>
            <input value={values.age}
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                id="age" placeholder="Please enter your age..."
            />

            <label htmlFor="password" >Password</label>
            <input value={values.password}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                id="password" placeholder="Please enter your password..." />

            <label htmlFor="confirmPassword" >Confirm Password</label>
            <input value={values.confirmPassword}
                type="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword" placeholder="Please repeat your password..." />
            <button type="submit">Submit</button>
        </form>
    )
}
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "./schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export const AdvancedForm = () => {
    return (
        <Formik initialValues={{ username: '', jobType: '', acceptedTo: false }} validationSchema={advancedSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form >
                    <CustomInput
                        label="UserName"
                        name="username"
                        type="text"
                        placeholder="Please enter your name"
                    />
                    <CustomSelect
                        label="Job Type"
                        name="jobType"
                        placeholder="Please select a job"
                    >
                        <option value="">Please select a job type</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Product Manager</option>
                        <option value="other">Other</option>
                    </CustomSelect>
                    <CustomCheckbox type="checkbox" name="acceptedTos" />
                    <button disabled={isSubmitting} type="submit">Submit</button>
                </Form>
            )}
        </Formik>)

};
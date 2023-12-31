import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';
import { addContact } from 'redux/contacts/operations';

// Validation for registration form
const validationSchema = yup.object({
  name: yup
    .string('Enter contact name')
    .required('Email is required')
    .max(16, 'Number should be of maximum 16 characters length')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([ ' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name contains invalid characters'
    ),
  number: yup
    .string('Enter contact number')
    .required('Password is required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Invalid phone number format. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const ContactForm = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();
  // Initialization Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(addContact(values));
      formik.resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        required
        fullWidth
        autoComplete="name"
        id="name"
        name="name"
        label="Contact Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        sx={{ mb: 2 }}
      />
      <TextField
        required
        fullWidth
        autoComplete="number"
        id="number"
        name="number"
        label="Phone Number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        sx={{ mb: 2 }}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import * as Yup from "yup";

export default function Contact() {
  const PhoneRegex = new RegExp(
    "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
  );
  const ValidationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone: Yup.string()
      .matches(PhoneRegex, "Invalid Phone Number")
      .required("Phone is required"),
    subject: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Subject is required"),
    message: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Message is required"),
  });
  return (
    <section className="py-5">
      <div className="special-title mb-5">
        <h1>contact us</h1>
        <div>
          <FaStar />
        </div>
      </div>
      <Container>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const promise = new Promise((resolve) =>
              setTimeout(resolve, 1500)
            ).then(() => {
              setSubmitting(false);
              resetForm();
            });

            toast.promise(
              promise,
              {
                loading: "Sending message...",
                success: <b>Message sent!</b>,
                error: <b>Could not sending message.</b>,
              },
              {
                iconTheme: {
                  primary: "#48c2db",
                },
              }
            );
          }}
        >
          {({
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            touched,
            errors,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-5 position-relative">
                <Form.Control
                  className="form-control"
                  type="text"
                  name="userName"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                />
                <Form.Label>Your Name:</Form.Label>
                <p className="text-danger small fst-italic ms-1">
                  {errors.userName && touched.userName && errors.userName}
                </p>
              </Form.Group>
              <Form.Group className="mb-5 position-relative">
                <Form.Control
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Form.Label>Your Email:</Form.Label>
                <p className="text-danger small fst-italic ms-1">
                  {errors.email && touched.email && errors.email}
                </p>
              </Form.Group>
              <Form.Group className="mb-5 position-relative">
                <Form.Control
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <Form.Label>Your Phone:</Form.Label>
                <p className="text-danger small fst-italic ms-1">
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </Form.Group>
              <Form.Group className="mb-5 position-relative">
                <Form.Control
                  className="form-control"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                />
                <Form.Label>Subject:</Form.Label>
                <p className="text-danger small fst-italic ms-1">
                  {errors.subject && touched.subject && errors.subject}
                </p>
              </Form.Group>
              <Form.Group className="mb-5 position-relative">
                <Form.Control
                  as="textarea"
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <Form.Label>Your Message:</Form.Label>
                <p className="text-danger small fst-italic ms-1">
                  {errors.message && touched.message && errors.message}
                </p>
              </Form.Group>
              <Button
                className="btn form__submit"
                type="submit"
                disabled={isSubmitting}
              >
                Send Message
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
      <Toaster position="bottom-right" />
    </section>
  );
}

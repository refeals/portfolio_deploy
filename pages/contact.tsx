import { send } from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, r) => {
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID
    const userId = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
    const variables = {
      from_name: data.name,
      message_html: data.comment,
      reply_to: data.email,
      from_email: data.email
    }

    send(serviceId, templateId, variables, userId)
      .then((res) => {
        console.log('Email successfully sent!')
        r.target.reset()
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          name="name"
          ref={register({
            required: 'Please enter your name',
            maxLength: {
              value: 20,
              message: 'Please enter a name with fewer than 20 characters'
            }
          })}
        />
        <br />
        {errors.name && errors.name.message}
        <br />

        <input
          placeholder="email"
          name="email"
          ref={register({
            required: 'Please enter an email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            }
          })}
        />
        <br />
        {errors.email && errors.email.message}
        <br />

        <textarea
          placeholder="comment"
          name="comment"
          ref={register({
            required: true
          })}
        />
        <br />
        {errors.comment && 'oops, you forgot your message!'}
        <br />

        <input type="submit" />
      </form>
    </div>
  )
}

export default Contact

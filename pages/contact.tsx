import { init, send } from 'emailjs-com'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()

  useEffect(() => {
    init(process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID)
  }, [])

  const sendFeedback = (serviceID, templateId, variables) => {
    send(serviceID, templateId, variables)
      .then(res => console.log('Email successfully sent!'))
      .catch(err => console.error(err))
  }

  const onSubmit = (data, r) => {
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID
    const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID
    sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
    r.target.reset()
  }

  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          name="name"
          ref={
            register({
              required: 'Please enter your name',
              maxLength: {
                value: 20,
                message: 'Please enter a name with fewer than 20 characters',
              },
            })
          }
        />
        <br />
        {errors.name && errors.name.message}
        <br />

        <input
          placeholder="email"
          name="email"
          ref={
            register({
              required: 'Please enter an email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })
          }
        />
        <br />
        {errors.email && errors.email.message}
        <br />

        <textarea
          placeholder="comment"
          name="comment"
          ref={
            register({
              required: true,
            })
          }
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

// server/api/send-email.post.ts
import { useCompiler } from '#vue-email'
import nodemailer from 'nodemailer';
const config = useRuntimeConfig();


export default defineEventHandler(async (event) => {
  const template = await useCompiler('welcome.vue', {
    props: {
      url: 'https://vuemail.net/',
    }
  })

  //const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    secure: false,
    auth: {
      user: config.MAILUSER,
      pass: config.MAILPASSWORD,
    },
  });

  const options = {
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    html: template,
  };

  await transporter.sendMail(options);
  return { message: 'Email sent' };
});

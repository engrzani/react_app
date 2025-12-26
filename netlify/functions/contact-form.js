const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, subject, message, projectType } = JSON.parse(event.body);

    // Validation
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email configuration (using environment variables)
    // You'll need to set these in Netlify dashboard
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent via Portfolio Bot Contact Form</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    const confirmationMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <h2>Thanks for contacting me, ${name}!</h2>
        <p>I've received your message about "${subject}" and will get back to you within 24 hours.</p>
        <p>Looking forward to discussing your project!</p>
        <br>
        <p>Best regards,</p>
        <p><strong>${process.env.SENDER_NAME || 'Your Name'}</strong></p>
      `
    };

    await transporter.sendMail(confirmationMail);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Message sent successfully!' 
      })
    };
  } catch (error) {
    console.error('Contact Form Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send message',
        message: error.message 
      })
    };
  }
};

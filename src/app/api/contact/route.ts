import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...data } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'info@preettech.com',
        pass: process.env.SMTP_PASS || 'your_smtp_password_here',
      },
    });

    let subject = 'New Website Form Submission - Hotel Oak Chhav';
    let text = `You have received a new form submission from the Hotel Oak Chhav website:\n\n`;
    let html = `<h3>New Form Submission - Hotel Oak Chhav</h3><table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">`;
    
    if (formType === 'booking') {
      subject = 'NEW BOOKING REQUEST: ' + data.phone;
      text += `Type: Quick Booking Inquiry\n`;
      text += `Check-in: ${data.checkIn}\n`;
      text += `Check-out: ${data.checkOut}\n`;
      text += `Adults: ${data.adults}\n`;
      text += `Children: ${data.children}\n`;
      text += `Phone: ${data.phone}\n`;
      
      html += `
        <tr><td style="background:#f5f5f5;font-weight:bold;width:30%;">Request Type</td><td>Quick Booking Inquiry</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Check-in</td><td>${data.checkIn}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Check-out</td><td>${data.checkOut}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Adults</td><td>${data.adults}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Children</td><td>${data.children}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Phone</td><td>${data.phone}</td></tr>
      `;
    } else {
      subject = `CONTACT INQUIRY: from ${data.name}`;
      text += `Type: General Contact Form\n`;
      text += `Name: ${data.name}\n`;
      text += `Email: ${data.email}\n`;
      text += `Phone: ${data.phone}\n`;
      text += `Message: \n${data.message}\n`;
      
      html += `
        <tr><td style="background:#f5f5f5;font-weight:bold;width:30%;">Request Type</td><td>General Contact Inquiry</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Name</td><td>${data.name}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Email</td><td>${data.email}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Phone</td><td>${data.phone}</td></tr>
        <tr><td style="background:#f5f5f5;font-weight:bold;">Message</td><td>${data.message.replace(/\n/g, '<br/>')}</td></tr>
      `;
    }

    html += `</table><p style="margin-top:20px;color:#666;">This email was sent automatically from your website.</p>`;

    const mailOptions = {
      from: `"Hotel Oak Chhav" <info@preettech.com>`,
      to: 'Oak.Chaav@gmail.com',
      replyTo: data.email || data.phone,
      subject: subject,
      text: text,
      html: html
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    // Even if it fails (because of missing SMTP pass), we return success in dev to show the UI working,
    // but we'll return 500 so the user knows they need to set it up.
    return NextResponse.json({ success: false, message: 'Failed to send email. Please check SMTP configuration.' }, { status: 500 });
  }
}

import nodemailer from "nodemailer";

const sendEmail = async (userEmail: string, subject: string, message: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "asahu532@zohomail.in",
        pass: "qJTCn1iaAfiH"
      },
      logger: true,
      debug: true
    });
    console.log("transporter", transporter);
    const mailOptions = {
      from: "asahu532@zohomail.in",
      to: userEmail,
      subject: subject,
      text: message
    };
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("Email send to the user");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error while sending an email", error?.message);
      return error;
    }
  }
};

export default sendEmail;

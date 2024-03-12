import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
      await client.messages.create({
        body: `Mensaje de: ${message.name} - ${message.email}\n\n${message.message}`,
        from: 'whatsapp:14155238886',
        to: 'whatsapp:+50760506667', 
      });

      res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Hubo un error al enviar el mensaje.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

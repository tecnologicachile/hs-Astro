import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    const emailHtml = `
      <h2>Nuevo mensaje de contacto desde Hosting Sistemas</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
      <p><strong>Empresa:</strong> ${company || 'No proporcionado'}</p>
      <p><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
      <br>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const data = await resend.emails.send({
      from: 'Hosting Sistemas <onboarding@resend.dev>',
      to: ['contacto@hostingsistemas.cl'],
      subject: `Nuevo contacto de ${name} - ${service || 'Consulta general'}`,
      html: emailHtml,
      reply_to: email,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email enviado correctamente',
        data
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al enviar el mensaje',
        error: error instanceof Error ? error.message : 'Error desconocido'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
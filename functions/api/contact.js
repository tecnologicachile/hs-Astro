export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Usar el token de Resend desde las variables de entorno de Cloudflare
    const RESEND_API_KEY = env.RESEND_API_KEY || 're_REc9SHrH_HArH88z5FndKFcJPCN2q8Myz';

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

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Hosting Sistemas <onboarding@resend.dev>',
        to: ['contacto@hostingsistemas.cl'],
        subject: `Nuevo contacto de ${name} - ${service || 'Consulta general'}`,
        html: emailHtml,
        reply_to: email,
      })
    });

    const data = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Email enviado correctamente',
          data
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    } else {
      throw new Error(data.message || 'Error al enviar el email');
    }
  } catch (error) {
    console.error('Error al enviar email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}

// Manejar preflight requests para CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Si phone es un objeto (datos transformados de Zod), extraer el número formateado
    const phoneDisplay = typeof phone === 'object' && phone?.formatted 
      ? phone.formatted 
      : phone || '';

    // Validar campos requeridos
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Los campos nombre, email y mensaje son requeridos.'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Configuración de Resend
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY || 're_ChBJYXbK_BBTzMiZgTP9c7NdipT78dDXf';
    const EMAIL_FROM = import.meta.env.EMAIL_FROM || 'noreply@transactional.erpsync.app';
    const EMAIL_TO = import.meta.env.EMAIL_TO || 'soporte@tecnologicachile.cl';

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no está configurado');
    }

    // Crear el contenido del email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1E40AF; }
            .value { margin-top: 5px; }
            .message-content { background: #F8FAFC; padding: 15px; border-left: 4px solid #3B82F6; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Nuevo mensaje de contacto - Hosting Sistemas</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nombre:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <div class="label">Teléfono:</div>
              <div class="value">${phoneDisplay || 'No proporcionado'}</div>
            </div>
            
            <div class="field">
              <div class="label">Empresa:</div>
              <div class="value">${company || 'No proporcionado'}</div>
            </div>
            
            <div class="field">
              <div class="label">Servicio de interés:</div>
              <div class="value">${service || 'No especificado'}</div>
            </div>
            
            <div class="field">
              <div class="label">Mensaje:</div>
              <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email usando Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `Hosting Sistemas <${EMAIL_FROM}>`,
        to: [EMAIL_TO],
        subject: `Nuevo contacto de ${name}${service ? ` - ${service}` : ''}`,
        html: emailHtml,
        reply_to: email,
      })
    });

    const data = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } else {
      console.error('Error de Resend:', data);
      throw new Error(data.message || 'Error al enviar el email');
    }

  } catch (error) {
    console.error('Error al procesar contacto:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contacta directamente por teléfono.',
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

// Manejar preflight requests para CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json() as {
    name?: string
    email?: string
    phone?: string
    subject?: string
    message?: string
  }

  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY not configured')
    return NextResponse.json({ error: 'Service temporairement indisponible.' }, { status: 503 })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const subjectLabels: Record<string, string> = {
      'divorce-amiable': 'Divorce amiable',
      'divorce-contentieux': 'Divorce contentieux',
      'garde-enfants': "Garde d'enfants",
      'patrimoine': 'Droit du patrimoine',
      'succession': 'Succession',
      'autre': 'Autre',
    }

    const subjectLabel = subjectLabels[subject] ?? subject

    const { error } = await resend.emails.send({
      from: 'Cabinet Bonaccorsi-Boyer <contact@bonaccorsi-boyer-avocat.fr>',
      to: ['bonaccorsi-boyer-avocat@outlook.com'],
      replyTo: email,
      subject: `[Cabinet] Nouveau message — ${subjectLabel}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #FAF7F2;">
          <div style="border-top: 2px solid #B8914A; padding-top: 24px; margin-bottom: 32px;">
            <h1 style="font-size: 22px; color: #16110E; margin: 0 0 4px;">Nouveau message reçu</h1>
            <p style="font-size: 13px; color: #8A7F78; margin: 0;">Cabinet Bonaccorsi-Boyer</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 12px; color: #8A7F78; letter-spacing: 0.1em; text-transform: uppercase; width: 120px;">Nom</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 14px; color: #16110E;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 12px; color: #8A7F78; letter-spacing: 0.1em; text-transform: uppercase;">E-mail</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 14px; color: #16110E;">${email}</td>
            </tr>
            ${body.phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 12px; color: #8A7F78; letter-spacing: 0.1em; text-transform: uppercase;">Téléphone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 14px; color: #16110E;">${body.phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 12px; color: #8A7F78; letter-spacing: 0.1em; text-transform: uppercase;">Objet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D8; font-size: 14px; color: #B8914A;">${subjectLabel}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 12px; color: #8A7F78; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">Message</p>
            <div style="background: #EDE5D8; padding: 20px; font-size: 14px; color: #16110E; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #EDE5D8;">
            <p style="font-size: 11px; color: #C4BCB7;">Ce message a été envoyé via le formulaire du site Cabinet Bonaccorsi-Boyer.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Erreur envoi e-mail.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}

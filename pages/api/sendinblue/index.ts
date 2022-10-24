import { NextApiRequest, NextApiResponse } from 'next';
import SibApiV3Sdk from 'sib-api-v3-sdk';

export default function sendEmail(_req: NextApiRequest, _res: NextApiResponse) {
  if (_req.method === 'POST') {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const {
      body: { email, name },
    } = _req;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY ?? '';

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject =
      'Tenho interesse de participar da whitelist PrimeSea';
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
      ? parseInt(process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID)
      : 21;
    sendSmtpEmail.templateId = templateId;
    sendSmtpEmail.to = [
      { email: 'suporte@primesea.io', name: 'Suporte PrimeSea' },
    ];
    sendSmtpEmail.params = {
      name,
      email,
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data) {
        // eslint-disable-next-line no-console
        console.log(
          'API called successfully. Returned data: ' + JSON.stringify(data)
        );
      },
      function (error) {
        console.error(error);
      }
    );
    _res.json(200);
  }
}

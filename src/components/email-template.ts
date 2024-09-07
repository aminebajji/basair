const generateEmailContent = (name: string = '', message: string = '', isSender: boolean = true) => `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مرحبًا بك في نادي بصائر</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0f0f0;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; text-align: center; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 30px 0; background: linear-gradient(135deg, #099c96,#019f99);">
                            <img src="https://basair.vercel.app/basair-green.png" alt="Logo" style="max-width: 140px; height: 140px; border-radius: 50%; border: 4px solid #ffffff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);">
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h1 style="color: #333; margin-bottom: 20px; font-size: 28px; font-weight: bold;">${name}</h1>
                            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 30px; text-align: right;">
                                <p style="color: #444; font-size: 18px; line-height: 1.6; margin: 0;">
                                    ${message}مرحبا
                                </p>
                            </div>
                            ${isSender ? `
                            <a href="https://basair.vercel.app" style="display: inline-block; background-color: #019f99; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-size: 18px; font-weight: bold; transition: background-color 0.3s;">زيارة موقعنا</a>
                            ` : ''}
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f8f8; border-top: 1px solid #e0e0e0;">
                            <table role="presentation" style="width: 100%;">
                                <tr>
                                    <td style="padding: 20px 0; text-align: center;">
                                        <img src="https://basair.vercel.app/logo-basair.png" alt="Logo" style="max-width: 100px; height: auto; margin-bottom: 15px;">
                                        <div style="margin-top: 15px;">
                                    
                                            <a href="https://www.instagram.com/basairclubndy/?igsh=MXV4ejB2OHBmb3pudA%3D%3D" style="text-decoration: none; margin: 0 10px; display: inline-block;">
                                                <img src="https://basair.vercel.app/instagram.png" alt="instagram" style="width: 36px; height: 36px;">
                                            </a>
                                            <a href="https://web.facebook.com/profile.php?id=61564990312686" style="text-decoration: none; margin: 0 10px; display: inline-block;">
                                                <img src="https://basair.vercel.app/facebook.png" alt="Facebook" style="width: 36px; height: 36px;">
                                            </a>
                                             <a href="https://whatsapp.com/channel/0029VaoJq9pJP2167dZn730K" style="text-decoration: none; margin: 0 10px; display: inline-block;">
                                                <img src="https://basair.vercel.app/whatsapp.png" alt="whatsap" style="width: 36px; height: 36px;">
                                            </a>
                                             <a href="https://t.me/+G-B7d1hteuRhYWE0" style="text-decoration: none; margin: 0 10px; display: inline-block;">
                                                <img src="https://basair.vercel.app/telegram.png" alt="telegram" style="width: 36px; height: 36px;">
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 0 20px; text-align: center; color: #666; font-size: 14px;">
                                        © 2023 نادي بصائر. جميع الحقوق محفوظة.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

export default generateEmailContent;
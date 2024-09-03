
const generateEmailContent = (name: string='',message: string='') => `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مرحبًا بك في نادي بصائر</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0f0f0;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; text-align: center; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 10px; background-color: #f8f8f8; border-bottom: 1px solid #e0e0e0;">
                            <img src="https://basair.vercel.app/basair-green.png" alt="Logo" style="max-width: 120px; height: 120px;border-radius:50%;">
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 20px;">
                            <h1 style="color: #333; margin-bottom: 20px; font-size: 24px;">${name}</h1>
                            <p style="color: #666; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                             ${message} 
                            </p>
                            
                
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style=" background-color: #f8f8f8; border-top: 1px solid #e0e0e0;">
                            <table role="presentation" style="width: 100%;">
                                <tr>
                                 <td style="text-align: center;">
                                       <img src="https://basair.vercel.app/logo-basair.png" alt="Logo" style="max-width: 100px; height: auto;">
                                    </td>
                                    <td style="text-align: center; padding-bottom: 10px;">
                                        <a href="#" style="text-decoration: none; margin: 0 10px;"><img src="https://basair.vercel.app/man.png" alt="Facebook" style="width: 30px; height: 30px;border-radius:50%;"></a>
                                        <a href="#" style="text-decoration: none; margin: 0 10px;"><img src="https://basair.vercel.app/quran.png" alt="Twitter" style="width: 30px; height: 30px;border-radius:50%;"></a>
                                        <a href="#" style="text-decoration: none; margin: 0 10px;"><img src="https://basair.vercel.app/woman.png" alt="Instagram" style="width: 30px; height: 30px;border-radius:50%;"></a>
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
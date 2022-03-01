const _ = require('lodash');
const { phone } = require('phone');
const TWILIO_NOT_ALLOW_COUNTRY_LIST = ['AF', 'AR', 'AM', 'BS', 'BY', 'BE', 'BJ', 'BR', 'CM', 'CA', 'KY', 'CL', 'CN', 'CO', 'CG', 'CR', 'CU', 'CZ', 'DO', 'EC', 'EG', 'SV', 'ET', 'GF', 'GH', 'GU', 'GN', 'GW', 'HK', 'HU', 'IN', 'ID', 'IR', 'IL', 'CI', 'JO', 'KZ', 'KE', 'KW', 'LB', 'LR', 'MW', 'MY', 'MX', 'MC', 'MA', 'MM', 'NP', 'NZ', 'NI', 'NG', 'OM', 'PK', 'PA', 'PY', 'PE', 'PH', 'PR', 'QA', 'RU', 'RW', 'SA', 'RS', 'ZA', 'KR', 'SS', 'LK', 'SD', 'SY', 'TZ', 'TH', 'TN', 'TR', 'UG', 'AE', 'US', 'UY', 'VN', 'ZM', 'ZW'];

function sendSMS(client, from, to, message, messagingServiceSid) {
    try {
        let recipients = [];
        if (Array.isArray(to)) {
            recipients = _.compact(recipients.concat(to));
        } else if (typeof to === 'string' && !_.isEmpty(to)) {
            const mobileArray = to.split(',');
            recipients = recipients.concat(mobileArray);
        }
        if (recipients.length) {
            for (let i = 0; i < recipients.length; i++) {
                let messageBody = {
                    body: message,
                    messagingServiceSid: messagingServiceSid,
                    to: recipients[i],
                };
                let country = phone(recipients[i]);;
                if (country.isValid && !TWILIO_NOT_ALLOW_COUNTRY_LIST.includes(country.countryIso2)) {
                    messageBody.from = from;
                }
                client.messages.create(messageBody).done();
            }
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = sendSMS;

const AWS = require('./aws');
const userTemplete = require('./data/usertemplate.json');

class UserCreator {
    constructor() {
        this.params = userTemplete;
        this.serviceProvider = new AWS.CognitoIdentityServiceProvider();
    }

    run(inputData) {
        this._buildParams(inputData);
        return new Promise((resolve, reject) => {
            this.serviceProvider.adminCreateUser(this.params, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                    return reject(err);
                }
                console.log(data);
                resolve(data);
            });
        });
    }

    _buildParams(inputData) {
        this.params.UserPoolId = inputData.headers['user-pool-id'];
        this.params.Username = inputData.data.email;
        this.params.TemporaryPassword = inputData.data.password || userTemplete.TemporaryPassword;
        this.params.UserAttributes.push({
            Name: 'name',
            Value: inputData.data.name
        });
        this.params.UserAttributes.push({
            Name: 'phone_number',
            Value: '+1' + inputData.data.phoneNumber
        });
        if (inputData.data.picture) {
            this.params.UserAttributes.push({
                Name: 'picture',
                Value: inputData.data.picture
            });
        }
        if (inputData.data.gender) {
            this.params.UserAttributes.push({
                Name: 'gender',
                Value: inputData.data.gender
            });
        }
    }
}

module.exports = UserCreator;
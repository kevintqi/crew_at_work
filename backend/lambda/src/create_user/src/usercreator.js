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
        this.params.Username = inputData.email;
        this.params.TemporaryPassword = inputData.password;
        this.params.UserAttributes.push({
            Name: 'name',
            Value: inputData.name
        });
        this.params.UserAttributes.push({
            Name: 'phone_number',
            Value: '+1' + inputData.phoneNumber
        });
        if (inputData.picture) {
            this.params.UserAttributes.push({
                Name: 'picture',
                Value: inputData.picture
            });
        }
        if (inputData.gender) {
            this.params.UserAttributes.push({
                Name: 'gender',
                Value: inputData.gender
            });
        }
    }
}

module.exports = UserCreator;
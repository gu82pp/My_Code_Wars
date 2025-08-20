/*
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
// This will NOT happen
foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly
*/

// Converts a URL Query String into an object map
function convertQueryToMap(query) {

    if(query.length === 0) {
        return {};
    }

    const params = query.split('&');
    let result = {};
    let link = result;

    for (const param of params) {
        const [left, right] = param.split('='); 
        const keys = left.split('.');

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (i === (keys.length - 1)) {
                link[key] = decodeURIComponent(right);
            } else {
                if (!link.hasOwnProperty(key)) {
                    link[key] = {};
                }
                link = link[key];
            }
        }

        link = result;

    }
    return result;
}

// var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
var q = '',
out = {
    'user': {
    'name': {
        'firstname': 'Bob',
        'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
    }
};
console.log(convertQueryToMap(q));
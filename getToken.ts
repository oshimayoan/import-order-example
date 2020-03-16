//import AsyncStorage from '@react-native-community/async-storage';

//let token = await AsyncStorage.getItem('@token');

//if (!!token) {
//  token = 'not found';
//}
//
//console.log('>>', token);

let response = await fetch('https://randomuser.me/api/');
let json = await  response.json();
console.log('json', json);

export {};

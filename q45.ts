// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_details(manufacturer: string, model: string, ...key_args: any[]) {
    let car = { manufacturer, model , ...Object.fromEntries(key_args)};
    return car;
}
let my_car_details = car_details('dodge', 'challenger SRT demon170',['year' , '2023'] , ['color' , 'red'], ['feature' , 'sport']);
console.log(my_car_details)
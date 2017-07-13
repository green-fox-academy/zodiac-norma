'use strict'

function hotelDataBuilder(data) {

    let xhrResponse = data;
    let hotelData = [];
    let commonHotel = {
        links: {},
        data: []
    }

    for (let i = 0; i < xhrResponse.length; i++) {

        commonHotel.links.self = xhrResponse[i].link;

        hotelData[i] = {
            type: xhrResponse[i].type,
            id: xhrResponse[i].id,
            attributes: {
                hotel_id: xhrResponse[i].hotel_id,
                location: xhrResponse[i].location,
                longitude: xhrResponse[i].longitude,
                latitude: xhrResponse[i].latitude,
                name: xhrResponse[i].name,
                main_image_src: xhrResponse[i].main_image_src,
                has_wifi: xhrResponse[i].has_wifi,
                has_parking: xhrResponse[i].has_parking,
                has_pets: xhrResponse[i].has_pets,
                has_restaurant: xhrResponse[i].has_restaurant,
                has_bar: xhrResponse[i].has_bar,
                has_swimming_pool: xhrResponse[i].has_swimming_pool,
                has_air_conditioning: xhrResponse[i].has_air_conditioning,
                has_gym: xhrResponse[i].has_gym,
                meal_plan: xhrResponse[i].meal_plan,
                user_id: xhrResponse[i].user_id,
                booking_id: xhrResponse[i].booking_id,
                amount: xhrResponse[i].amount,
                currency: xhrResponse[i].currency,
                status: xhrResponse[i].status,
                stars: xhrResponse[i].stars
            }
        }
        commonHotel.data.push(hotelData);
    }
}

let hotelTestData = [{
    link: 'google.com',
    type: 'type',
    id: 'id',
    hotel_id: 'hotel_id',
    location: 'location',
    longitude: 'longitude',
    latitude: 'latitude',
    name: 'name',
    main_image_src: 'main_image_src',
    has_wifi: 'true',
    has_parking: 'true',
    has_pets: 'true',
    has_restaurant: 'true',
    has_bar: 'true',
    has_swimming_pool: 'true',
    has_air_conditioning: 'true',
    has_gym: 'true',
    meal_plan: 'true',
    user_id: 'true',
    booking_id: 'true',
    amount: '50',
    currency: 'USD',
    status: 'status',
    stars: '5 stars',
}]

hotelDataBuilder(hotelTestData);

function roomDataBuilder(data) {

    let xhrResponse = data;
    let roomData = [];
    let commonroom = {
        links: {},
        data: []
    }

    for (let i = 0; i < xhrResponse.length; i++) {

        commonHotel.links.self = xhrResponse[i].link;

        hotelData[i] = {
            type: xhrResponse[i].type,
            id: xhrResponse[i].id,
            attributes: {
                hotel_id: xhrResponse[i].hotel_id,
                location: xhrResponse[i].location,
                longitude: xhrResponse[i].longitude,
                latitude: xhrResponse[i].latitude,
                name: xhrResponse[i].name,
                main_image_src: xhrResponse[i].main_image_src,
                has_wifi: xhrResponse[i].has_wifi,
                has_parking: xhrResponse[i].has_parking,
                has_pets: xhrResponse[i].has_pets,
                has_restaurant: xhrResponse[i].has_restaurant,
                has_bar: xhrResponse[i].has_bar,
                has_swimming_pool: xhrResponse[i].has_swimming_pool,
                has_air_conditioning: xhrResponse[i].has_air_conditioning,
                has_gym: xhrResponse[i].has_gym,
                meal_plan: xhrResponse[i].meal_plan,
                user_id: xhrResponse[i].user_id,
                booking_id: xhrResponse[i].booking_id,
                amount: xhrResponse[i].amount,
                currency: xhrResponse[i].currency,
                status: xhrResponse[i].status,
                stars: xhrResponse[i].stars
            }
        }
        commonHotel.data.push(hotelData);
    }
}

let hotelTestData = [{
    link: 'google.com',
    type: 'type',
    id: 'id',
    hotel_id: 'hotel_id',
    location: 'location',
    longitude: 'longitude',
    latitude: 'latitude',
    name: 'name',
    main_image_src: 'main_image_src',
    has_wifi: 'true',
    has_parking: 'true',
    has_pets: 'true',
    has_restaurant: 'true',
    has_bar: 'true',
    has_swimming_pool: 'true',
    has_air_conditioning: 'true',
    has_gym: 'true',
    meal_plan: 'true',
    user_id: 'true',
    booking_id: 'true',
    amount: '50',
    currency: 'USD',
    status: 'status',
    stars: '5 stars',
}]

hotelDataBuilder(hotelTestData);

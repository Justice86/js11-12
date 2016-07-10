$(document).ready(function () {

    var data = {
        name: 'Жовтуха Андрей Константинович',
        photo: {
            src: 'img/1.jpg',
            alt: 'Моё фото'
        },
        job: 'Бухгалтер в ГП "Укрметртестстандарт"',
        why: 'Хочу учить фронтенд, потому что:',
        reasons: ['Надоело скучная однообразная работа',
            'График работы',
            'Не привязаность к месту'],
        tel: 'Мой контактный телефон:',
        number: '+380937750335',
        fb: 'Мой профиль в facebook:',
        fb_link: 'https://www.facebook.com/profile.php?id=100000420505758',
        feedback: 'Мой фидбек:',
        feedback_text: 'Жду Ваших замечаний!'
    };

    var profile = $('#profile').html();
    var content = tmpl(profile, data);

    $('.template').append(content);

});

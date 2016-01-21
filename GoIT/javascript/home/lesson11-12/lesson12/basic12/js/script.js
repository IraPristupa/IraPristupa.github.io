
$(function() {

   var html = $('#profile').html();

   var data = {
        profile_title: 'Приступа Ирина Владимировна',
        profile_image_url: 'img/ya.jpg',
        profile_content: 'Преподаватель английского и немецкого языков',
        study_title: 'Хочу учить фронтенд, потому что:',
        study_reasons: ['Мне это нравится',
                        'Хочу попробывать себя во всём',
                        'Хорошие перспективы развития'],
        phone_title: 'Мой контактный телефон',
        phone_number: '+380631575008',
        facebook_title: 'Мой профиль в фейсбуке',
        facebook_url: 'https://www.facebook.com/profile.php?id=100009826605846',
        facebook_link: 'facebook.com',
        feedback_title: 'Мой фидбэк:',
        feedback_content: 'Если нужно, могу подтянуть ваш английский :)'
    };

   var content = tmpl(html,data);

   $('body').append(content);

});
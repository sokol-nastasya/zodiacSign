const zodiac_month = document.getElementById('month');
const zodiac_day = document.getElementById('date');
const btn_find = document.getElementById('btn_find');
const zodiac_block = document.querySelector('.zodiac_result');
const zodiacImage = document.querySelector('.zodiac_image');

let yourSign;


const zodiac_sign = (month, day) => {
    const zodiacSigns = {
        'Aries': { startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/arias.jpg'},
        'Taurus': { startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/taurus.jpg' },
        'Gemini': { startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/gemini.jpg'},
        'Cancer': { startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/cancer.jpeg'},
        'Leo': { startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/Leo.jpg'}, 
        'Virgo': { startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/virgo.jpg'}, 
        'Libra': { startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/libra.jpg'}, 
        'Scorpio': { startMonth: 10, startDay:23, endMonth: 11, endDay: 21, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/scorpio.jpg'},
        'Sagittarius': {startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/sagittarius.jpg'},
        'Capricorn': { startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/capricon.jpeg'},
        'Aquarius': { startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/aquarius.jpeg'},
        'Pisces': { startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, img: '/home/anastasiia/projects_codecademy/cristmas_quize/day10/img/Pisces.jpg'}
    };

    for (const sign in zodiacSigns){
        const rang = zodiacSigns[sign];
        if (
            (month === rang.startMonth && day >= rang.startDay) ||
            (month === rang.endMonth && day <= rang.endDay)
        ) {
            console.log(sign);
            yourSign = sign

            displayText(sign)
            displayImg(rang.img)
            return yourSign;
        }
    }
    console.log('Error!!!!');
};

const displayText = (yourSign) => {
    const title_result = document.createElement('h2');
    const message_result = document.createTextNode(`Your sign is `);
    title_result.appendChild(message_result);
    zodiac_block.appendChild(title_result);

    const signSpan = document.createElement('span');
    signSpan.textContent = yourSign;
    signSpan.style.color = '#372551';

    title_result.appendChild(signSpan);
}


const displayImg = (imgPath) => {
    let img = document.createElement('img');
    img.src = `${imgPath}`;
    zodiacImage.appendChild(img);

}

btn_find.addEventListener('click', ()=> {
    let month = parseInt(zodiac_month.value);
    let day = parseInt(zodiac_day.value);

    zodiac_sign(month, day);

})
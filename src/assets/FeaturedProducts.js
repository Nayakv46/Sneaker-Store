import JaFlyShoe from '../assets/images/JaFlyShoe.png';
import JaFlyBg from '../assets/images/Ja_1_FlyBG.png';

import AirForce07LXShoe from '../assets/images/air_force_07_lx_shoe.png';
import AirForce07LXBg from '../assets/images/air_force_07_lxBG3.jpg';

import AirJordan3Fear from '../assets/images/air_jordan_fear_shoe.png';
import AirJordan3FearBG from '../assets/images/air_jordan_fear_bg.jpg';

import AirJordan1LowSEShoe from '../assets/images/AirJordan1LowSE_shoe.png';
import AirJordan1LowSEBG from '../assets/images/AirJordan1LowSEBG.jpg'
// background: #2980B9; background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); background: linear-gradient(to right, #FFFFFF40, #6DD5FA50, #2980B965);


const featuredProducts = [
    {
        id: 5,
        name: 'Ja 1 Fly',
        description: "Testament to his rise... The Legacy of Ja Morant's name. Pay the homage of Ja's get-up-and-go pace and control your destiny",
        image: JaFlyShoe,
        background: JaFlyBg,
        backgroundPosition: "0% 0%",
        descriptionBackground: "background: #9E350030;  background: -webkit-linear-gradient(to right, #9E350030, #0ABFBC60); background: linear-gradient(to right, #9E350030, #0ABFBC60);",
        descriptionColor: "color: var(--white500);"
    },
    {
        id: 2,
        name: "Nike Air Force 1 '07 LX",
        description: 'The radiance lives on in the Nike Air Force 1 ’07 LX, the b-ball icon that puts a playful twist on what you know best: stitched overlays, bold colors and the perfect amount of flash to make you shine.',
        image: AirForce07LXShoe,
        background: AirForce07LXBg,
        backgroundPosition: '0% 65%',
        descriptionBackground: "background: #1a2a6c40; background: -webkit-linear-gradient(to right, #fdbb2d60, #b21f1f60, #1a2a6c40); background: linear-gradient(to right, #fdbb2d60, #b21f1f60, #1a2a6c40);",
        descriptionColor: "color: var(--white500);"
    },
    {
        id: 7,
        name: 'Air Jordan 3 "Fear"',
        description: 'Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.',
        image: AirJordan3Fear,
        background: AirJordan3FearBG,
        backgroundPosition: '0% 0%',
        descriptionBackground: "background: #c2150045; background: -webkit-linear-gradient(to right, #c2150045, #ffc50035); background: linear-gradient(to right, #c2150045, #ffc50035);",
        descriptionColor: "color: var(--white500);"
    },
    {
        id: 14,
        name: 'Air Jordan 1 Low SE',
        description: 'Fresh look, familiar feel. Every time the AJ1 gets a remake, you get the classic sneaker in new colors and textures. Premium materials and accents give modern expression to an all-time favorite.',
        image: AirJordan1LowSEShoe,
        background: AirJordan1LowSEBG,
        backgroundPosition: '0% 100%',
        descriptionBackground: "background: #c2150045; background: -webkit-linear-gradient(to right, #c2150045, #ffc50035); background: linear-gradient(120deg, #45245425, #d42ce785, #45245425);",
        descriptionColor: "color: var(--white500);"
    },
];

export default featuredProducts;
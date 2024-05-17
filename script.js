//SIDEBAR 
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

// const Background = document.querySelectorAll('.choose-bg span')

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


//remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//SIDEBAR START

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }

    })
})

// SIDEBAR END

//MESSAGES START

//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    })
}

//search chat

messageSearch.addEventListener('keyup', searchMessage)

// highlight messages card when message item is clicked

messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none'
    }, 2000)
})

// MESSAGES END

//THEME CUSTOMIZATION

//opens theme
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

//closes theme
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}

//close theme
themeModel.addEventListener('click', closeThemeModel);

//open theme
theme.addEventListener('click', openThemeModel);

//remove active class from spans

const removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

// font

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        
        let fontSize;
        removeSizeSelector();
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
            console.log('font size change to: ',fontSize);
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
            console.log('font size change to: ',fontSize);
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
            console.log('font size change to: ',fontSize);
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
            console.log('font size change to: ',fontSize);
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
            console.log('font size change to: ',fontSize);
        }
        
        //change font size of root html elements
    document.querySelector('html').style.fontSize = fontSize; 

    })

})

// CHANGE PRIMARY COLORS

//remove active class from spans

const removeColorSelector = () => {
    colorPalette.forEach(color =>{
        color.classList.remove('active');
    })
}

colorPalette.forEach(color => {

    color.addEventListener('click', () => {

        removeColorSelector();
        color.classList.toggle('active');

        if(color.classList.contains('color-1')){
            primaryHue = 252;
            console.log('Primary color changes to: ',primaryHue);
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
            console.log('Primary color changes to: ',primaryHue);
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
            console.log('Primary color changes to: ',primaryHue);
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
            console.log('Primary color changes to: ',primaryHue);
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
            console.log('Primary color changes to: ',primaryHue);
        }

        root.style.setProperty('--primary-color-hue',primaryHue);

    })

})

// BACKGROUND THEME

//remove active class from spans

// const removeBGSelector = () => {
//     Background.forEach(bgColor =>{
//         bgColor.classList.remove('active');
//     })
// }


// Background.forEach(bgColor, () => {

//     bgColor.addEventListener('click', () => {
//         let darkColorLightness;
//         let lightColorLightness;
//         let whiteColorLightness;

//         removeBGSelector();
//         bgColor.classList.toggle('active');

//         if(bgColor.classList.contains('bg-2')){
//             darkColorLightness = '95%';
//             lightColorLightness = '27%';
//          whiteColorLightness = '15%';

//             console.log('Lightness has been changes to :',darkColorLightness, ', ', lightColorLightness, ', ',whiteColorLightness);
//         }
//         else if(bgColor.classList.contains('bg-3')){
//             darkColorLightness = '95%';
//             lightColorLightness = '10%';
//             whiteColorLightness = '0%';

//             console.log('Lightness has been changes to :',darkColorLightness, ', ', lightColorLightness, ', ',whiteColorLightness);
//         }

//         root.style.setProperty('--light-color-lightness', lightColorLightness);
//         root.style.setProperty('--dark-color-lightness', darkColorLightness);
//         root.style.setProperty('--white-color-lightness', whiteColorLightness);

//     })

// })

let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

const changeBG= () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '27%';
    whiteColorLightness = '15%';

    console.log('Lightness changed to: ',darkColorLightness, ', ', lightColorLightness, ', ', whiteColorLightness);

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '10%';
    whiteColorLightness = '0%';

    Bg3.classList.add('active');
      
    console.log('Lightness changed to: ',darkColorLightness, ', ', lightColorLightness, ', ', whiteColorLightness);

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBG();
})
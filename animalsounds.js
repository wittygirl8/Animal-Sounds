const sound  = require('./sounds.js');
var anisounds = [
        {//0
            "animal":'bear',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/bear.mp3"/>','<audio src="soundbank://soundlibrary/animals/amzn_sfx_bear_groan_roar_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_bear_roar_grumble_01"/>']
        },
        {//1
            "animal":'birds',
            "sound":['<audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_chickadee_chirps_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_forest_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_forest_short_01"/>']
        },
        {//2
            "animal":'cat',
            "sound":['<audio src="soundbank://soundlibrary/animals/amzn_sfx_cat_angry_meow_1x_02"/>','<audio src="https://macdealexa.co.in/audio/AnimalSounds/cat.mp3"/>',
            '<audio src="soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_01"/>']
        },
        {//3
            "animal":'chicken',
            "sound":['<audio src="soundbank://soundlibrary/animals/amzn_sfx_chicken_cluck_01"/>']
        },
        {//4
            "animal":'cock',
            "sound":['<audio src="soundbank://soundlibrary/animals/amzn_sfx_rooster_crow_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_rooster_crow_02"/>']
        },
        {//5
            "animal":'crow',
            "sound":['<audio src="soundbank://soundlibrary/animals/amzn_sfx_crow_caw_1x_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_raven_caw_2x_01"/>']
        },
        {//6
            "animal":'dog',
            "sound" : ['<audio src="${sound.audioDog}"/>','<audio src="https://macdealexa.co.in/audio/AnimalSounds/dog.mp3"/>',
                        '<audio src="soundbank://soundlibrary/animals/amzn_sfx_dog_med_growl_1x_01"/>']
        },
        {//7
            "animal":'elephant',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/elephant.mp3"/>','<audio src="soundbank://soundlibrary/animals/amzn_sfx_elephant_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_elephant_02"/>']
        },
        {//8
            "animal":'gorilla',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/gorilla.mp3"/>','<audio src="soundbank://soundlibrary/animals/gorilla/gorilla_07"/><audio src="soundbank://soundlibrary/animals/gorilla/gorilla_02"/>'
        ]},
        {//9
            "animal":'horse',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/Horse.mp3"/>','<audio src="soundbank://soundlibrary/animals/amzn_sfx_horse_huff_whinny_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_horse_whinny_01"/>'
        ]},
        {//10
            "animal":'lion',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/lion.mp3"/>','<audio src="soundbank://soundlibrary/animals/amzn_sfx_lion_roar_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_lion_roar_03"/>']
        },
        {//11
            "animal":'monkey',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/monkey.mp3"/>','<audio src="soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_monkeys_chatter_01"/>']        },
        {//12
            "animal":'rat',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/rat.mp3"/>','<audio src="soundbank://soundlibrary/animals/amzn_sfx_rat_squeak_2x_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_rat_squeaks_01"/>']
        },
        {//13
            "animal":'sheep',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/sheep.mp3"/>',
            '<audio src="soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02"/>',
            '<audio src="soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02"/>']
        },
        {//14
            "animal":'wolf',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/wolf.mp3"/>',
            '<audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_young_howl_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_03"/>']
            
        },
        {//15
            "animal":'bonobo',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/bonobo.mp3"/>']
        },
        {//16
            "animal":'guinea fowl',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/guinea_fowl.mp3"/>']
        },
        {//17
            "animal":'walrus',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/walrus.mp3"/>']
        },
        {//18
            "animal":'lynx',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/lynx.mp3"/>']
        },
        {//19
            "animal":'guinea pig',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/pig.mp3"/>']
        },
        {//20
            "animal":'tapir',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/tapir.mp3"/>']
        },
        {//21
            "animal":'weasel',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/weasel.mp3"/>']
        },
        {//22
            "animal":'raccoon',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/raccoon.mp3"/>']
        },
        {//23
            "animal":'otter',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/otter.mp3"/>']
        },
        {//24
            "animal":'snow leopard',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/leopard.mp3"/>']
        },
        {//25
            "animal":'coyote',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/coyote.mp3"/>']
        },
        {//26
            "animal":'seal',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/seal.mp3"/>']
        },
        {//27
            "animal":'eagle',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/eagle.mp3"/>']
        },
        {//28
            "animal":'panda',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/panda.mp3"/>']
        },
        {//29
            "animal":'hyena',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/hyena.mp3"/>']
        },
        {//30
            "animal":'ostrich',
            "sound":['<audio src=https://macdealexa.co.in/audio/AnimalSounds/ostrich.mp3"/>']
        },
        {//31
            "animal":'beaver',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/beaver.mp3"/>']
        },
        {//57
            "animal":'aligator',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/aligator.mp3"/>']
        },
        {//58
            "animal":'orangutan',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/orangutan.mp3"/>']
        },
        {//32
            "animal":'owl',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/owl.mp3"/>']
        },
        {//33
            "animal":'snake',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/snake.mp3"/>']
        },
        {//34
            "animal":'llama',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/llama.mp3"/>']
        },
        {//35
            "animal":'meerkat',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/meerkat.mp3"/>']
        },
        {//36
            "animal":'hippopotamus',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/hippopotamus.mp3"/>']
        },
        {//37
            "animal":'hamster',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/hamster.mp3"/>']
        },
        {//38
            "animal":'bison',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/bison.mp3"/>']
            },
        {//39
            "animal":'frog',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/frog.mp3"/>']
        },
        {//40
            "animal":'parrot',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/parrot.mp3"/>']
        },
        {//41
            "animal":'goose',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/goose.mp3"/>']
        },
        {//42
            "animal":'rooster',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/rooster.mp3"/>']
        },
        {//43
            "animal":'rhinoceros',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/rhinoceros.mp3"/>']
        },
        {//44
            "animal":'polar bear',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/polar_bear.mp3"/>']
        },
        {//45
            "animal":'fox',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/fox.mp3"/>']
        },
        {//46
            "animal":'zebra',
            "sound":[`<audio src="https://macdealexa.co.in/audio/AnimalSounds/zebra.mp3"/>`]
        },
        {//47
            "animal":'squirrel',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/squirrel.mp3"/>']
        },
        {//48
            "animal":'goat',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/goats.mp3"/>']
        },
        {//49
            "animal":'hen',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/hen.mp3"/>']
        },
        {//50
            "animal":'donkey',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/donkey.mp3"/>']
        },
        {//51
            "animal":'turkey',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/turkey.mp3"/>']
        },
        {//52
            "animal":'koala',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/koala.mp3"/>']
        },
        {//53
            "animal":'giraffe',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/giraffe.mp3"/>']
        },
        {//54
            "animal":'penguin',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/penguin.mp3"/>']
        },
        {//55
            "animal":'kangaroo',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/kangaroo.mp3"/>']
        },
        {//56
            "animal":'deer',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/deer.mp3"/>']
            },
        {//57
            "animal":'cow',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/cow.mp3"/>']
        },
        {//58
            "animal":'duck',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/duck.mp3"/>']
        },
        {//59
            "animal":'rabbit',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/rabbit.mp3"/>']
        },
        {//60
            "animal":'mouse',
            "sound":['<audio src="https://macdealexa.co.in/audio/AnimalSounds/mouse.mp3"/>']
        },
    ];
    
    
    module.exports = anisounds;
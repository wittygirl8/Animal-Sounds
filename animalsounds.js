const sound  = require('./sounds.js');
var anisounds = [
        {//0
            "animal":'bear',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_bear_groan_roar_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_bear_roar_grumble_01"/>'
        },
        {//1
            "animal":'birds',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_chickadee_chirps_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_forest_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_forest_short_01"/>'
        },
        {//2
            "animal":'cat',
            "sound":['<audio src="soundbank://soundlibrary/animals/amzn_sfx_cat_angry_meow_1x_02"/>',
            '<audio src="soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_01"/>']
        },
        {//3
            "animal":'chicken',
            "sound":' <audio src="soundbank://soundlibrary/animals/amzn_sfx_chicken_cluck_01"/>'
        },
        {//4
            "animal":'cock',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_rooster_crow_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_rooster_crow_02"/>'
        },
        {//5
            "animal":'crow',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_crow_caw_1x_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_raven_caw_2x_01"/>'
        },
        {//6
            "animal":'dog',
            "sound" : ['<audio src="${sound.audioDog}"/>',
                        '<audio src="soundbank://soundlibrary/animals/amzn_sfx_dog_med_growl_1x_01"/>']
        },
        {//7
            "animal":'elephant',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_elephant_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_elephant_02"/>'
        },
        {//8
            "animal":'gorilla',
            "sound":'<audio src="soundbank://soundlibrary/animals/gorilla/gorilla_07"/><audio src="soundbank://soundlibrary/animals/gorilla/gorilla_02"/>'
        },
        {//9
            "animal":'horse',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_horse_huff_whinny_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_horse_whinny_01"/>'
        },
        {//10
            "animal":'lion',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_lion_roar_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_lion_roar_03"/>'
        },
        {//11
            "animal":'monkey',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_monkeys_chatter_01"/>'
        },
        {//12
            "animal":'rat',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_rat_squeak_2x_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_rat_squeaks_01"/>'
        },
        {//13
            "animal":'sheep',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02"/>'
        },
        {//14
            "animal":'wolf',
            "sound":'<audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_02"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_young_howl_01"/><audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_03"/>'
        }
    ];
    
    module.exports = anisounds;
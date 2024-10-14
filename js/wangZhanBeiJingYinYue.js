//网站主流音乐
const musicArray =[
    "31654478",     //  Victory
    "31654455",     //  Star Sky
    "27876900",     //  Here We Are Again
    "1992463",      //  Awaken the Dawn (Solo)
    "1614278",      //  Pastel Reflections
    "28253999",     //  勿念他归
    "4988618",      //  海の見える街
    "760058",       //  Bloom of Youth
    "527573",       //  想い出は遠くの日々
    "3315209",      //  Send Me a Letter
    "1236863",      //  Down by the Sally Gardens
    "5293155",      //  햇살...바람...그리고 너
    "28445798",     //  海の涙
    "471415",       //  オルゴールの记忆
    "28151036",     //  伝承
    "558510224",    //  The Heart of the Ocean
    "757567"];
//韩静音乐
const hanJingMusicArray = [
        "1447361757",   //  沙悟净（翻自 河图）
        "1293886117",   //  年少有为
        "1499297916",   //  男孩 (Live)
        "482207546",    //  拜无忧（Cover 萧忆情）
        "420008229"];
//吴特刚音乐
const wuTeGangMusicArray = [
        "433107903"     //ninelie(Easylistening) 徐梦圆
]


//============================================================================
//============================================================================
//============================================================================
//使用音乐，以后要是网站改音乐，把这个变量改成对应的数组就行
const useMusicArray = musicArray ;
//============================================================================
//============================================================================
//============================================================================



const myMusic = document.getElementById("music");

myMusic.innerHTML =
            "<source src='http://music.163.com/song/media/outer/url?id=" +
    useMusicArray[Math.floor(Math.random() * useMusicArray.length)] +
            "&userid=530079932' type='audio/mpeg' />";

function play(){
    myMusic.muted = true;
    myMusic.play();
    myMusic.muted = false;
    myMusic.play();
}

play();

const flashcards = {
  fruits: [
    { hanzi: "苹果", pinyin: "píngguǒ", arti: "apple", image:"https://cdn-icons-png.flaticon.com/512/415/415733.png" },
  { hanzi: "草莓", pinyin: "cǎoméi", arti: "strawberry", image:"https://cdn-icons-png.flaticon.com/512/590/590685.png" },
  { hanzi: "芒果", pinyin: "mángguǒ", arti: "mango", image:"https://cdn-icons-png.flaticon.com/128/3137/3137152.png" },
  { hanzi: "蓝莓", pinyin: "lánméi", arti: "blueberry", image:"https://cdn-icons-png.flaticon.com/128/1791/1791431.png" },
  { hanzi: "香蕉", pinyin: "xiāngjiāo", arti: "banana", image:"https://cdn-icons-png.flaticon.com/512/590/590682.png" },
  { hanzi: "西瓜", pinyin: "xīguā", arti: "watermelon", image:"https://cdn-icons-png.flaticon.com/128/5582/5582664.png" },
  { hanzi: "柠檬", pinyin: "níngméng", arti: "lemon", image:"https://cdn-icons-png.flaticon.com/128/7396/7396589.png" },
  { hanzi: "橙子", pinyin: "chéngzi", arti: "orange", image:"https://cdn-icons-png.flaticon.com/128/135/135620.png" },
  { hanzi: "牛油果", pinyin: "niúyóuguǒ", arti: "avocado", image:"https://cdn-icons-png.flaticon.com/128/8782/8782172.png" },
  { hanzi: "葡萄", pinyin: "pútáo", arti: "grape", image:"https://cdn-icons-png.flaticon.com/512/590/590684.png" }
  ],

  jobs: [
    { hanzi: "医生", pinyin: "yīshēng", arti: "doctor",image:"https://cdn-icons-png.flaticon.com/128/2785/2785482.png"},
    { hanzi: "销售员", pinyin: "xiāoshòuyuán", arti: "salesman", image:"https://cdn-icons-png.flaticon.com/128/1200/1200167.png"},
    { hanzi: "老师", pinyin: "lǎoshī", arti: "teacher", image:"https://cdn-icons-png.flaticon.com/128/5369/5369664.png"},
    { hanzi: "律师", pinyin: "lǜshī", arti: "lawyer", image:"https://cdn-icons-png.flaticon.com/128/2710/2710029.png"},
    { hanzi: "快递员", pinyin: "kuàidìyuán", arti: "courier", image:"https://cdn-icons-png.flaticon.com/128/17845/17845861.png"},
    { hanzi: "服务员", pinyin: "fúwùyuán", arti: "waiter", image:"https://cdn-icons-png.flaticon.com/128/3462/3462049.png" },
    { hanzi: "农民", pinyin: "nóngmín", arti: "farmer", image:"https://cdn-icons-png.flaticon.com/128/1886/1886915.png" },
    { hanzi: "运动员", pinyin: "yùndòngyuán", arti: "athlete", image:"https://cdn-icons-png.flaticon.com/128/6534/6534728.png" },
    { hanzi: "歌手", pinyin: "gēshǒu", arti: "singer", image:"https://cdn-icons-png.flaticon.com/128/2317/2317993.png"},
    { hanzi: "厨师", pinyin: "chúshī", arti: "chef", image:"https://cdn-icons-png.flaticon.com/128/3461/3461974.png" }
  ],

  foods: [
    { hanzi: "蛋糕", pinyin: "dàngāo", arti: "cake", image:"https://cdn-icons-png.flaticon.com/128/9997/9997743.png" },
    { hanzi: "寿司", pinyin: "shòusī", arti: "sushi", image:"https://cdn-icons-png.flaticon.com/128/2252/2252075.png" },
    { hanzi: "汉堡", pinyin: "hànbǎo", arti: "hamburger", image:"https://cdn-icons-png.flaticon.com/128/5787/5787016.png" },
    { hanzi: "热狗", pinyin: "règǒu", arti: "hotdog", image:"https://cdn-icons-png.flaticon.com/128/5589/5589708.png" },
    { hanzi: "披萨", pinyin: "pīsà", arti: "pizza", image:"https://cdn-icons-png.flaticon.com/128/1404/1404945.png" },
    { hanzi: "沙拉", pinyin: "shālā", arti: "salad", image:"https://cdn-icons-png.flaticon.com/128/8512/8512332.png" },
    { hanzi: "香肠", pinyin: "xiāngcháng", arti: "sausage", image:"https://cdn-icons-png.flaticon.com/128/7782/7782233.png" },
    { hanzi: "甜甜圈", pinyin: "tiántiánquān", arti: "doughnut ", image:"https://cdn-icons-png.flaticon.com/128/6402/6402298.png" },
    { hanzi: "华夫饼", pinyin: "huáfūbǐng", arti: "waffle", image:"https://cdn-icons-png.flaticon.com/128/3308/3308622.png" },
    { hanzi: "面包", pinyin: "miànbāo", arti: "bread", image:"https://cdn-icons-png.flaticon.com/128/7093/7093198.png" }
  ],

  countries: [
    { hanzi: "澳大利亚", pinyin: "àodàlìyà", arti: "Australia", image:"https://cdn-icons-png.flaticon.com/128/206/206618.png" },
    { hanzi: "印度尼西亚", pinyin: "yìndùníxīyà", arti: "Indonesia", image:"https://cdn-icons-png.flaticon.com/128/939/939651.png" },
    { hanzi: "美国", pinyin: "měiguó", arti: "United States", image:"https://cdn-icons-png.flaticon.com/128/206/206626.png" },
    { hanzi: "法国", pinyin: "fǎguó", arti: "France", image:"https://cdn-icons-png.flaticon.com/128/4060/4060248.png" },
    { hanzi: "俄罗斯", pinyin: "éluósī", arti: "Russia", image:"https://cdn-icons-png.flaticon.com/128/317/317289.png" },
    { hanzi: "中国", pinyin: "zhōngguó", arti: "China", image:"https://cdn-icons-png.flaticon.com/128/5111/5111624.png" },
    { hanzi: "加拿大", pinyin: "jiānádà", arti: "Canada", image:"https://cdn-icons-png.flaticon.com/128/14009/14009882.png" },
    { hanzi: "韩国", pinyin: "hánguó", arti: "Korea", image:"https://cdn-icons-png.flaticon.com/128/317/317314.png" },
    { hanzi: "日本", pinyin: "rìběn", arti: "Japan", image:"https://cdn-icons-png.flaticon.com/128/317/317215.png" },
    { hanzi: "英国", pinyin: "yīngguó", arti: "United Kingdom", image:"https://cdn-icons-png.flaticon.com/128/555/555417.png" }
  ],

  colors: [
  { hanzi: "红色", pinyin: "hóngsè", arti: "Red", image:"https://cdn-icons-png.flaticon.com/128/14035/14035711.png" },
  { hanzi: "蓝色", pinyin: "lánsè", arti: "Blue", image:"https://cdn-icons-png.flaticon.com/128/10037/10037390.png" },
  { hanzi: "绿色", pinyin: "lǜsè", arti: "Green", image:"https://cdn-icons-png.flaticon.com/128/14035/14035769.png" },
  { hanzi: "黄色", pinyin: "huángsè", arti: "Yellow", image:"https://cdn-icons-png.flaticon.com/128/14026/14026175.png" },
  { hanzi: "黑色", pinyin: "hēisè", arti: "Black", image:"https://cdn-icons-png.flaticon.com/128/0/14.png" },
  { hanzi: "白色", pinyin: "báisè", arti: "White", image:"https://cdn-icons-png.flaticon.com/128/16/16666.png" },
  { hanzi: "紫色", pinyin: "zǐsè", arti: "Purple", image:"https://cdn-icons-png.flaticon.com/128/12723/12723075.png" },
  { hanzi: "橙色", pinyin: "chéngsè", arti: "Orange", image:"https://cdn-icons-png.flaticon.com/128/10037/10037411.png" },
  { hanzi: "粉色", pinyin: "fěnsè", arti: "Pink", image:"https://cdn-icons-png.flaticon.com/128/15617/15617940.png" },
  { hanzi: "灰色", pinyin: "huīsè", arti: "Grey", image:"https://cdn-icons-png.flaticon.com/128/15631/15631406.png" }
],

transportation: [
  { hanzi: "车", pinyin: "chē", arti: "Car", image:"https://cdn-icons-png.flaticon.com/128/3097/3097180.png" },
  { hanzi: "公交车", pinyin: "gōngjiāochē", arti: "Bus", image:"https://cdn-icons-png.flaticon.com/128/416/416597.png" },
  { hanzi: "地铁", pinyin: "dìtiě", arti: "Subway", image:"https://cdn-icons-png.flaticon.com/128/1034/1034693.png" },
  { hanzi: "火车", pinyin: "huǒchē", arti: "Train", image:"https://cdn-icons-png.flaticon.com/128/1702/1702305.png" },
  { hanzi: "飞机", pinyin: "fēijī", arti: "Airplane", image:"https://cdn-icons-png.flaticon.com/128/19030/19030949.png" },
  { hanzi: "自行车", pinyin: "zìxíngchē", arti: "Bicycle", image:"https://cdn-icons-png.flaticon.com/128/9842/9842386.png" },
  { hanzi: "摩托车", pinyin: "mótuōchē", arti: "Motorcycle", image:"https://cdn-icons-png.flaticon.com/128/1768/1768214.png" },
  { hanzi: "出租车", pinyin: "chūzūchē", arti: "Taxi", image:"https://cdn-icons-png.flaticon.com/128/5900/5900437.png" },
  { hanzi: "船", pinyin: "chuán", arti: "Boat", image:"https://cdn-icons-png.flaticon.com/128/1397/1397519.png" },
  { hanzi: "高铁", pinyin: "gāotiě", arti: "High-speed train", image:"https://cdn-icons-png.flaticon.com/128/9389/9389700.png" }
],

animals: [
  { hanzi: "狗", pinyin: "gǒu", arti: "Dog", image:"https://cdn-icons-png.flaticon.com/128/1998/1998627.png" },
  { hanzi: "猫", pinyin: "māo", arti: "Cat", image:"https://cdn-icons-png.flaticon.com/128/6988/6988878.png" },
  { hanzi: "鸟", pinyin: "niǎo", arti: "Bird", image:"https://cdn-icons-png.flaticon.com/128/7441/7441358.png" },
  { hanzi: "鱼", pinyin: "yú", arti: "Fish", image:"https://cdn-icons-png.flaticon.com/128/877/877270.png" },
  { hanzi: "马", pinyin: "mǎ", arti: "Horse", image:"https://cdn-icons-png.flaticon.com/128/9537/9537923.png" },
  { hanzi: "牛", pinyin: "niú", arti: "Cow", image:"https://cdn-icons-png.flaticon.com/128/2395/2395796.png" },
  { hanzi: "羊", pinyin: "yáng", arti: "Sheep", image:"https://cdn-icons-png.flaticon.com/128/2711/2711858.png" },
  { hanzi: "鸡", pinyin: "jī", arti: "Chicken", image:"https://cdn-icons-png.flaticon.com/128/2002/2002616.png" },
  { hanzi: "猪", pinyin: "zhū", arti: "Pig", image:"https://cdn-icons-png.flaticon.com/128/6989/6989071.png" },
  { hanzi: "老虎", pinyin: "lǎohǔ", arti: "Tiger", image:"https://cdn-icons-png.flaticon.com/128/13640/13640322.png" }
],

vegetables: [
  { hanzi: "蔬菜", pinyin: "shūcài", arti: "Vegetables", image:"https://cdn-icons-png.flaticon.com/128/10632/10632405.png" },
  { hanzi: "白菜", pinyin: "báicài", arti: "Chinese cabbage", image:"https://cdn-icons-png.flaticon.com/128/12721/12721780.png" },
  { hanzi: "西红柿", pinyin: "xīhóngshì", arti: "Tomato", image:"https://cdn-icons-png.flaticon.com/128/1790/1790387.png" },
  { hanzi: "土豆", pinyin: "tǔdòu", arti: "Potato", image:"https://cdn-icons-png.flaticon.com/128/2149/2149857.png" },
  { hanzi: "胡萝卜", pinyin: "húluóbo", arti: "Carrot", image:"https://cdn-icons-png.flaticon.com/128/1041/1041355.png" },
  { hanzi: "黄瓜", pinyin: "huángguā", arti: "Cucumber", image:"https://cdn-icons-png.flaticon.com/128/7315/7315557.png" },
  { hanzi: "洋葱", pinyin: "yángcōng", arti: "Onion", image:"https://cdn-icons-png.flaticon.com/128/2923/2923216.png" },
  { hanzi: "茄子", pinyin: "qiézi", arti: "Eggplant", image:"https://cdn-icons-png.flaticon.com/128/2149/2149866.png" },
  { hanzi: "菠菜", pinyin: "bōcài", arti: "Spinach", image:"https://cdn-icons-png.flaticon.com/128/8945/8945305.png" },
  { hanzi: "辣椒", pinyin: "làjiāo", arti: "Chili pepper", image:"https://cdn-icons-png.flaticon.com/128/2149/2149856.png" }
],

  hsk1: [
    { hanzi: "我", pinyin: "wǒ", arti: "I / me", image:"https://cdn-icons-png.flaticon.com/128/149/149071.png" },
    { hanzi: "你", pinyin: "nǐ", arti: "you", image:"https://cdn-icons-png.flaticon.com/128/2121/2121170.png" },
    { hanzi: "我们", pinyin: "wǒmen", arti: "we", image:"https://cdn-icons-png.flaticon.com/128/681/681443.png" },
    { hanzi: "你们", pinyin: "nǐmen", arti: "you (plural)", image:"https://cdn-icons-png.flaticon.com/128/3597/3597742.png" },
    { hanzi: "他", pinyin: "tā", arti: "he", image:"https://cdn-icons-png.flaticon.com/128/11080/11080230.png" },
    { hanzi: "她", pinyin: "tā", arti: "she", image:"https://cdn-icons-png.flaticon.com/128/11080/11080190.png" },
    { hanzi: "他们", pinyin: "tāmen", arti: "they", image:"https://cdn-icons-png.flaticon.com/128/15871/15871010.png" },
    { hanzi: "儿子", pinyin: "érzi", arti: "son", image:"https://cdn-icons-png.flaticon.com/128/2829/2829758.png" },
    { hanzi: "女儿", pinyin: "nǚ'ér", arti: "daughter", image:"https://cdn-icons-png.flaticon.com/128/2829/2829832.png" },
    { hanzi: "家", pinyin: "jiā", arti: "home / family", image:"https://cdn-icons-png.flaticon.com/128/5615/5615735.png" }
  ],

  hsk2: [
    { hanzi: "路", pinyin: "lù", arti: "road", image:"https://cdn-icons-png.flaticon.com/128/2554/2554922.png" },
    { hanzi: "旅游", pinyin: "lǚyóu", arti: "travel", image:"https://cdn-icons-png.flaticon.com/128/826/826070.png" },
    { hanzi: "公司", pinyin: "gōngsī", arti: "company", image:"https://cdn-icons-png.flaticon.com/128/993/993854.png" },
    { hanzi: "贵", pinyin: "guì", arti: "expensive", image:"https://cdn-icons-png.flaticon.com/128/9708/9708951.png" },
    { hanzi: "便宜", pinyin: "piányi", arti: "cheap", image:"https://cdn-icons-png.flaticon.com/128/1027/1027943.png" },
    { hanzi: "快", pinyin: "kuài", arti: "fast", image:"https://cdn-icons-png.flaticon.com/128/9561/9561692.png" },
    { hanzi: "漂亮", pinyin: "piàoliang", arti: "beautiful", image:"https://cdn-icons-png.flaticon.com/128/4614/4614421.png" },
    { hanzi: "跳舞", pinyin: "tiàowǔ", arti: "dance", image:"https://cdn-icons-png.flaticon.com/128/10531/10531423.png" },
    { hanzi: "颜色", pinyin: "yánsè", arti: "color", image:"https://cdn-icons-png.flaticon.com/128/11460/11460836.png" },
    { hanzi: "药", pinyin: "yào", arti: "medicine", image:"https://cdn-icons-png.flaticon.com/128/647/647186.png" }
  ],

  hsk3: [
    { hanzi: "护照", pinyin: "hùzhào", arti: "passport", image:"https://cdn-icons-png.flaticon.com/128/16999/16999726.png" },
    { hanzi: "会议", pinyin: "huìyì", arti: "meeting", image:"https://cdn-icons-png.flaticon.com/128/4144/4144517.png" },
    { hanzi: "发烧", pinyin: "fāshāo", arti: "fever", image:"https://cdn-icons-png.flaticon.com/128/2853/2853865.png" },
    { hanzi: "地铁", pinyin: "dìtiě", arti: "subway", image:"https://cdn-icons-png.flaticon.com/128/1034/1034693.png" },
    { hanzi: "打扫", pinyin: "dǎsǎo", arti: "clean", image:"https://cdn-icons-png.flaticon.com/128/2954/2954888.png" },
    { hanzi: "啤酒", pinyin: "píjiǔ", arti: "beer", image:"https://cdn-icons-png.flaticon.com/128/2397/2397297.png" },
    { hanzi: "水平", pinyin: "shuǐpíng", arti: "level", image:"https://cdn-icons-png.flaticon.com/128/6650/6650064.png" },
    { hanzi: "提高", pinyin: "tígāo", arti: "improve", image:"https://cdn-icons-png.flaticon.com/128/939/939354.png" },
    { hanzi: "文化", pinyin: "wénhuà", arti: "culture", image:"https://cdn-icons-png.flaticon.com/128/4859/4859784.png" },
    { hanzi: "信用卡", pinyin: "xìnyòngkǎ", arti: "credit card", image:"https://cdn-icons-png.flaticon.com/128/8983/8983163.png" }
  ],

  hsk4: [
    { hanzi: "考虑", pinyin: "kǎolǜ", arti: "consider", image:"https://cdn-icons-png.flaticon.com/128/2452/2452778.png" },
    { hanzi: "浪费", pinyin: "làngfèi", arti: "waste", image:"https://cdn-icons-png.flaticon.com/128/11319/11319951.png" },
    { hanzi: "耐心", pinyin: "nàixīn", arti: "patience", image:"https://cdn-icons-png.flaticon.com/128/4576/4576679.png" },
    { hanzi: "优点", pinyin: "yōudiǎn", arti: "advantage", image:"https://cdn-icons-png.flaticon.com/128/18566/18566332.png" },
    { hanzi: "缺点", pinyin: "quēdiǎn", arti: "disadvantage", image:"https://cdn-icons-png.flaticon.com/128/12510/12510152.png" },
    { hanzi: "态度", pinyin: "tàidù", arti: "attitude", image:"https://cdn-icons-png.flaticon.com/128/6192/6192908.png" },
    { hanzi: "无聊", pinyin: "wúliáo", arti: "boring", image:"https://cdn-icons-png.flaticon.com/128/3339/3339155.png" },
    { hanzi: "羡慕", pinyin: "xiànmù", arti: "envy", image:"https://cdn-icons-png.flaticon.com/128/6000/6000912.png" },
    { hanzi: "支持", pinyin: "zhīchí", arti: "support", image:"https://cdn-icons-png.flaticon.com/128/2057/2057748.png" },
    { hanzi: "自然", pinyin: "zìrán", arti: "nature", image:"https://cdn-icons-png.flaticon.com/128/119/119591.png" }
  ],

  hsk5: [
    { hanzi: "零件", pinyin: "língjiàn", arti: "component", image:"https://cdn-icons-png.flaticon.com/128/14459/14459238.png" },
    { hanzi: "设备", pinyin: "shèbèi", arti: "equipment", image:"https://cdn-icons-png.flaticon.com/128/7307/7307974.png" },
    { hanzi: "设施", pinyin: "shèshī", arti: "facility", image:"https://cdn-icons-png.flaticon.com/128/7576/7576803.png" },
    { hanzi: "总统", pinyin: "zǒngtǒng", arti: "president", image:"https://cdn-icons-png.flaticon.com/128/4908/4908829.png" },
    { hanzi: "意义", pinyin: "yìyì", arti: "meaning", image:"https://cdn-icons-png.flaticon.com/128/3387/3387882.png" },
    { hanzi: "现代", pinyin: "xiàndài", arti: "modern", image:"https://cdn-icons-png.flaticon.com/128/4365/4365271.png" },
    { hanzi: "位置", pinyin: "wèizhì", arti: "location/position", image:"https://cdn-icons-png.flaticon.com/128/4284/4284108.png" },
    { hanzi: "随时", pinyin: "suíshí", arti: "anytime", image:"https://cdn-icons-png.flaticon.com/128/15875/15875729.png" },
    { hanzi: "经验", pinyin: "jīngyàn", arti: "experience", image:"https://cdn-icons-png.flaticon.com/128/18096/18096854.png" },
    { hanzi: "地势", pinyin: "dìshì", arti: "terrain", image:"https://cdn-icons-png.flaticon.com/128/18693/18693105.png" }
  ],

hsk1_step2: [
  { hanzi: "吃", pinyin: "chī", arti: "to eat", image: "https://cdn-icons-png.flaticon.com/128/857/857681.png" },
  { hanzi: "喝", pinyin: "hē", arti: "to drink", image: "https://cdn-icons-png.flaticon.com/128/2738/2738730.png" },
  { hanzi: "看", pinyin: "kàn", arti: "to look / to watch", image: "https://cdn-icons-png.flaticon.com/128/1353/1353052.png" },
  { hanzi: "听", pinyin: "tīng", arti: "to listen", image: "https://cdn-icons-png.flaticon.com/128/727/727245.png" },
  { hanzi: "说", pinyin: "shuō", arti: "to speak / to say", image: "https://cdn-icons-png.flaticon.com/128/1791/1791961.png" },
  { hanzi: "买", pinyin: "mǎi", arti: "to buy", image: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png" },
  { hanzi: "去", pinyin: "qù", arti: "to go", image: "https://cdn-icons-png.flaticon.com/128/3097/3097144.png" },
  { hanzi: "来", pinyin: "lái", arti: "to come", image: "https://cdn-icons-png.flaticon.com/128/1048/1048953.png" },
  { hanzi: "想", pinyin: "xiǎng", arti: "to think / to want", image: "https://cdn-icons-png.flaticon.com/128/2452/2452778.png" },
  { hanzi: "爱", pinyin: "ài", arti: "to love", image: "https://cdn-icons-png.flaticon.com/128/833/833472.png" }
],

hsk1_step3: [
  { hanzi: "学", pinyin: "xué", arti: "to study / to learn", image: "https://cdn-icons-png.flaticon.com/128/3976/3976625.png" },
  { hanzi: "做", pinyin: "zuò", arti: "to do / to make", image: "https://cdn-icons-png.flaticon.com/128/1170/1170678.png" },
  { hanzi: "开", pinyin: "kāi", arti: "to open", image: "https://cdn-icons-png.flaticon.com/128/1828/1828778.png" },
  { hanzi: "关", pinyin: "guān", arti: "to close", image: "https://cdn-icons-png.flaticon.com/128/1828/1828779.png" },
  { hanzi: "回", pinyin: "huí", arti: "to return", image: "https://cdn-icons-png.flaticon.com/128/507/507257.png" },
  { hanzi: "坐", pinyin: "zuò", arti: "to sit", image: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png" },
  { hanzi: "住", pinyin: "zhù", arti: "to live / to stay", image: "https://cdn-icons-png.flaticon.com/128/5615/5615735.png" },
  { hanzi: "叫", pinyin: "jiào", arti: "to be called / to call", image: "https://cdn-icons-png.flaticon.com/128/1413/1413393.png" },
  { hanzi: "写", pinyin: "xiě", arti: "to write", image: "https://cdn-icons-png.flaticon.com/128/1001/1001371.png" },
  { hanzi: "读", pinyin: "dú", arti: "to read", image: "https://cdn-icons-png.flaticon.com/128/2702/2702602.png" }
],

hsk1_step4: [
  { hanzi: "好", pinyin: "hǎo", arti: "good / well", image: "https://cdn-icons-png.flaticon.com/128/2278/2278992.png" },
  { hanzi: "大", pinyin: "dà", arti: "big", image: "https://cdn-icons-png.flaticon.com/128/4358/4358433.png" },
  { hanzi: "小", pinyin: "xiǎo", arti: "small", image: "https://cdn-icons-png.flaticon.com/128/4358/4358450.png" },
  { hanzi: "多", pinyin: "duō", arti: "many / much", image: "https://cdn-icons-png.flaticon.com/128/3524/3524388.png" },
  { hanzi: "少", pinyin: "shǎo", arti: "few / little", image: "https://cdn-icons-png.flaticon.com/128/3524/3524335.png" },
  { hanzi: "什么", pinyin: "shénme", arti: "what", image: "https://cdn-icons-png.flaticon.com/128/1933/1933395.png" },
  { hanzi: "哪", pinyin: "nǎ", arti: "which", image: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png" },
  { hanzi: "谁", pinyin: "shéi", arti: "who", image: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png" },
  { hanzi: "这儿", pinyin: "zhèr", arti: "here", image: "https://cdn-icons-png.flaticon.com/128/684/684908.png" },
  { hanzi: "那儿", pinyin: "nàr", arti: "there", image: "https://cdn-icons-png.flaticon.com/128/684/684912.png" }
],

hsk2_step2: [
  { hanzi: "开始", pinyin: "kāishǐ", arti: "to start / to begin", image: "" },
  { hanzi: "帮助", pinyin: "bāngzhù", arti: "to help", image: "" },
  { hanzi: "准备", pinyin: "zhǔnbèi", arti: "to prepare", image: "" },
  { hanzi: "希望", pinyin: "xīwàng", arti: "to hope / to wish", image: "" },
  { hanzi: "觉得", pinyin: "juéde", arti: "to feel / to think", image: "" },
  { hanzi: "告诉", pinyin: "gàosu", arti: "to tell", image: "" },
  { hanzi: "找到", pinyin: "zhǎodào", arti: "to find", image: "" },
  { hanzi: "明白", pinyin: "míngbai", arti: "to understand", image: "" },
  { hanzi: "练习", pinyin: "liànxí", arti: "to practice", image: "" },
  { hanzi: "需要", pinyin: "xūyào", arti: "to need", image: "" }
],

hsk2_step3: [
  { hanzi: "问题", pinyin: "wèntí", arti: "question / problem", image: "" },
  { hanzi: "事情", pinyin: "shìqing", arti: "matter / thing", image: "" },
  { hanzi: "时间", pinyin: "shíjiān", arti: "time", image: "" },
  { hanzi: "地方", pinyin: "dìfang", arti: "place", image: "" },
  { hanzi: "已经", pinyin: "yǐjīng", arti: "already", image: "" },
  { hanzi: "一起", pinyin: "yìqǐ", arti: "together", image: "" },
  { hanzi: "因为", pinyin: "yīnwèi", arti: "because", image: "" },
  { hanzi: "所以", pinyin: "suǒyǐ", arti: "so / therefore", image: "" },
  { hanzi: "还", pinyin: "hái", arti: "still / also", image: "" },
  { hanzi: "再", pinyin: "zài", arti: "again", image: "" }
],

hsk2_step4: [
  { hanzi: "离", pinyin: "lí", arti: "to be away from / distance from", image: "" },
  { hanzi: "近", pinyin: "jìn", arti: "near", image: "" },
  { hanzi: "远", pinyin: "yuǎn", arti: "far", image: "" },
  { hanzi: "给", pinyin: "gěi", arti: "to give", image: "" },
  { hanzi: "送", pinyin: "sòng", arti: "to send / to give (as a gift)", image: "" },
  { hanzi: "带", pinyin: "dài", arti: "to bring / to carry", image: "" },
  { hanzi: "卖", pinyin: "mài", arti: "to sell", image: "" },
  { hanzi: "问", pinyin: "wèn", arti: "to ask", image: "" },
  { hanzi: "等", pinyin: "děng", arti: "to wait", image: "" },
  { hanzi: "玩", pinyin: "wán", arti: "to play / to have fun", image: "" }
],

hsk3_step2: [
  { hanzi: "决定", pinyin: "juédìng", arti: "to decide / decision" },
  { hanzi: "感觉", pinyin: "gǎnjué", arti: "feeling / to feel" },
  { hanzi: "参加", pinyin: "cānjiā", arti: "to join / to participate" },
  { hanzi: "担心", pinyin: "dānxīn", arti: "to worry" },
  { hanzi: "记得", pinyin: "jìde", arti: "to remember" },
  { hanzi: "忘记", pinyin: "wàngjì", arti: "to forget" },
  { hanzi: "介绍", pinyin: "jièshào", arti: "to introduce" },
  { hanzi: "同意", pinyin: "tóngyì", arti: "to agree" },
  { hanzi: "重要", pinyin: "zhòngyào", arti: "important" },
  { hanzi: "开始", pinyin: "kāishǐ", arti: "to begin / to start" }
],
hsk3_step3: [
  { hanzi: "比较", pinyin: "bǐjiào", arti: "relatively / to compare" },
  { hanzi: "容易", pinyin: "róngyì", arti: "easy" },
  { hanzi: "困难", pinyin: "kùnnan", arti: "difficult" },
  { hanzi: "清楚", pinyin: "qīngchu", arti: "clear / clearly" },
  { hanzi: "努力", pinyin: "nǔlì", arti: "to work hard" },
  { hanzi: "完成", pinyin: "wánchéng", arti: "to complete" },
  { hanzi: "改变", pinyin: "gǎibiàn", arti: "to change" },
  { hanzi: "决定", pinyin: "juédìng", arti: "to decide" },
  { hanzi: "继续", pinyin: "jìxù", arti: "to continue" },
  { hanzi: "开始", pinyin: "kāishǐ", arti: "to begin" }
],
hsk3_step4: [
  { hanzi: "习惯", pinyin: "xíguàn", arti: "habit / to be used to" },
  { hanzi: "机会", pinyin: "jīhuì", arti: "opportunity / chance" },
  { hanzi: "选择", pinyin: "xuǎnzé", arti: "to choose / choice" },
  { hanzi: "努力地", pinyin: "nǔlì de", arti: "diligently / hard (adv.)" },
  { hanzi: "检查", pinyin: "jiǎnchá", arti: "to check / to examine" },
  { hanzi: "帮助", pinyin: "bāngzhù", arti: "to help" },
  { hanzi: "保护", pinyin: "bǎohù", arti: "to protect" },
  { hanzi: "解释", pinyin: "jiěshì", arti: "to explain" },
  { hanzi: "解决", pinyin: "jiějué", arti: "to solve" },
  { hanzi: "影响", pinyin: "yǐngxiǎng", arti: "to influence / influence" }
],
hsk4_step2: [
  { hanzi: "提高", pinyin: "tígāo", arti: "to improve" },
  { hanzi: "减少", pinyin: "jiǎnshǎo", arti: "to reduce" },
  { hanzi: "增加", pinyin: "zēngjiā", arti: "to increase" },
  { hanzi: "影响", pinyin: "yǐngxiǎng", arti: "to influence / affect" },
  { hanzi: "适合", pinyin: "shìhé", arti: "to suit / fit" },
  { hanzi: "负责", pinyin: "fùzé", arti: "to be responsible for" },
  { hanzi: "安排", pinyin: "ānpái", arti: "to arrange" },
  { hanzi: "决定", pinyin: "juédìng", arti: "to decide" },
  { hanzi: "继续", pinyin: "jìxù", arti: "to continue" },
  { hanzi: "完成", pinyin: "wánchéng", arti: "to complete" }
],
hsk4_step3: [
  { hanzi: "解决", pinyin: "jiějué", arti: "to solve" },
  { hanzi: "提供", pinyin: "tígōng", arti: "to provide" },
  { hanzi: "接受", pinyin: "jiēshòu", arti: "to accept" },
  { hanzi: "拒绝", pinyin: "jùjué", arti: "to refuse" },
  { hanzi: "包括", pinyin: "bāokuò", arti: "to include" },
  { hanzi: "改变", pinyin: "gǎibiàn", arti: "to change" },
  { hanzi: "发展", pinyin: "fāzhǎn", arti: "to develop" },
  { hanzi: "保护", pinyin: "bǎohù", arti: "to protect" },
  { hanzi: "允许", pinyin: "yǔnxǔ", arti: "to allow" },
  { hanzi: "禁止", pinyin: "jìnzhǐ", arti: "to forbid" }
],
hsk4_step4: [
  { hanzi: "提醒", pinyin: "tíxǐng", arti: "to remind" },
  { hanzi: "建议", pinyin: "jiànyì", arti: "suggestion / to suggest" },
  { hanzi: "同意", pinyin: "tóngyì", arti: "to agree" },
  { hanzi: "反对", pinyin: "fǎnduì", arti: "to oppose" },
  { hanzi: "控制", pinyin: "kòngzhì", arti: "to control" },
  { hanzi: "注意", pinyin: "zhùyì", arti: "to pay attention" },
  { hanzi: "理解", pinyin: "lǐjiě", arti: "to understand" },
  { hanzi: "讨论", pinyin: "tǎolùn", arti: "to discuss" },
  { hanzi: "选择", pinyin: "xuǎnzé", arti: "to choose" },
  { hanzi: "计划", pinyin: "jìhuà", arti: "plan / to plan" }
],

hsk5_step1: [
  { hanzi: "承担", pinyin: "chéngdān", arti: "to undertake / to bear (responsibility)" },
  { hanzi: "产生", pinyin: "chǎnshēng", arti: "to produce / to generate" },
  { hanzi: "促进", pinyin: "cùjìn", arti: "to promote / to advance" },
  { hanzi: "实现", pinyin: "shíxiàn", arti: "to achieve / to realize" },
  { hanzi: "适应", pinyin: "shìyìng", arti: "to adapt" },
  { hanzi: "采取", pinyin: "cǎiqǔ", arti: "to adopt / to take (measures)" },
  { hanzi: "处理", pinyin: "chǔlǐ", arti: "to deal with / to handle" },
  { hanzi: "建立", pinyin: "jiànlì", arti: "to establish" },
  { hanzi: "保持", pinyin: "bǎochí", arti: "to maintain" },
  { hanzi: "形成", pinyin: "xíngchéng", arti: "to form" }
],

hsk5_step2: [
  { hanzi: "表达", pinyin: "biǎodá", arti: "to express" },
  { hanzi: "说明", pinyin: "shuōmíng", arti: "to explain" },
  { hanzi: "证明", pinyin: "zhèngmíng", arti: "to prove" },
  { hanzi: "承认", pinyin: "chéngrèn", arti: "to admit" },
  { hanzi: "拒绝", pinyin: "jùjué", arti: "to refuse" },
  { hanzi: "允许", pinyin: "yǔnxǔ", arti: "to allow / to permit" },
  { hanzi: "限制", pinyin: "xiànzhì", arti: "to limit / restriction" },
  { hanzi: "控制", pinyin: "kòngzhì", arti: "to control" },
  { hanzi: "减少", pinyin: "jiǎnshǎo", arti: "to reduce / to decrease" },
  { hanzi: "增加", pinyin: "zēngjiā", arti: "to increase" }
],

hsk5_step4: [
  { hanzi: "依靠", pinyin: "yīkào", arti: "to rely on" },
  { hanzi: "属于", pinyin: "shǔyú", arti: "to belong to" },
  { hanzi: "包含", pinyin: "bāohán", arti: "to include / to contain" },
  { hanzi: "涉及", pinyin: "shèjí", arti: "to involve" },
  { hanzi: "影响", pinyin: "yǐngxiǎng", arti: "to influence / impact" },
  { hanzi: "改善", pinyin: "gǎishàn", arti: "to improve" },
  { hanzi: "提高", pinyin: "tígāo", arti: "to improve / to raise" },
  { hanzi: "发展", pinyin: "fāzhǎn", arti: "to develop" },
  { hanzi: "保护", pinyin: "bǎohù", arti: "to protect" },
  { hanzi: "破坏", pinyin: "pòhuài", arti: "to destroy" }
]

};

let currentCategory = "fruits";
let currentIndex = 0;
let flashcardOrigin = "home"; 
let currentStep = 1;

function loadCard() {
  let card = flashcards[currentCategory][currentIndex];

  document.getElementById("hanzi").innerText = card.hanzi;
  document.getElementById("pinyin").innerText = card.pinyin;
  document.getElementById("arti").innerText = card.arti;

  const cardImage = document.getElementById("cardImage");
  if (card.image) {
    cardImage.src = card.image;
    cardImage.style.display = "block";
  } else {
    cardImage.style.display = "none";
  }

  updateButtons();
}
function updateButtons() {
  let total = flashcards[currentCategory].length;

  let btnContainer = document.getElementById("flashcardButtons");

  if (currentIndex === 0) {
    btnContainer.innerHTML = `
      <button onclick="nextCard()">Next</button>
    `;
  }

  else if (currentIndex === total - 1) {
    btnContainer.innerHTML = `
      <button onclick="prevCard()">Back</button>
    `;
  }

  else {
    btnContainer.innerHTML = `
      <button onclick="prevCard()">Back</button>
      <button onclick="nextCard()">Next</button>
    `;
  }
}

function nextCard() {
  if (currentIndex < flashcards[currentCategory].length - 1) {
    currentIndex++;
    loadCard();
  } else {
    goHome(); // terakhir → balik home
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    loadCard();
  }
}

function showHomeDecorations() {
  document.getElementById("homePandaGif").style.display = "block";
  document.getElementById("lampionGif").style.display = "block";
}

function hideHomeDecorations() {
  document.getElementById("homePandaGif").style.display = "none";
  document.getElementById("lampionGif").style.display = "none";
}

// Dipakai oleh semua inline onclick yang navigate ke homepage
function goHomeClean(hidePageId) {
  if (hidePageId) document.getElementById(hidePageId).style.display = 'none';
  localStorage.setItem('ezMandarin_onboarding_done', 'true');
  document.getElementById('homePage').style.display = 'block';
  showHomeDecorations();
  loadBadges();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function startFlashcard(category) {
  currentCategory = category;
  currentIndex = 0;
  loadCard();

  document.getElementById("homePage").style.display = "none";
  hideHomeDecorations();
  document.getElementById("hskMapPage").style.display = "none";
  document.getElementById("flashcardMenuPage").style.display = "none";
  document.getElementById("flashcardPage").style.display = "block";
}

function startLearning() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("flashcardMenuPage").style.display = "none";
  document.getElementById("flashcardPage").style.display = "none";
  document.getElementById("onboardingPage").style.display = "none";
  document.getElementById("hskMapPage").style.display = "none";
  document.getElementById("graduationPage").style.display = "none";

  const sudahOnboarding = localStorage.getItem('ezMandarin_onboarding_done');

  if (sudahOnboarding) {
    document.getElementById("homePage").style.display = "block";
    showHomeDecorations();
    loadBadges();
    window.scrollTo({ top: 0, behavior: 'instant' });
  } else {
    document.body.style.background = "linear-gradient(135deg, #8B0000, #6b0000)";
    document.getElementById("onboardingPage").style.display = "block";
  }
}

function goHome() {
  // sembunyikan semua halaman
  document.getElementById("flashcardPage").style.display = "none";
  document.getElementById("hskMapPage").style.display = "none";
  document.getElementById("stepChoicePage").style.display = "none";
  document.getElementById("stepWelcomePage").style.display = "none";
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("quizQuestionPage").style.display = "none";
  document.getElementById("confirmPage").style.display = "none";
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("reviewPage").style.display = "none";

  clearInterval(timer);

  // kalau dari step, balik ke stepChoicePage
  if (flashcardOrigin === "step") {
    flashcardOrigin = "home"; // reset
    document.getElementById("stepChoicePage").style.display = "block";
  } else {
    loadBadges();
    document.getElementById("homePage").style.display = "block";
    showHomeDecorations();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function goToQuiz() {
  document.getElementById("homePage").style.display = "none";
  hideHomeDecorations();
  document.getElementById("quizPage").style.display = "block";
}

function showQuizCountdown(level) {
  const overlay = document.getElementById("countdownOverlay");
  const numberEl = document.getElementById("countdownNumber");

  if (overlay.style.display === "flex") return;

  overlay.style.display = "flex";
  numberEl.textContent = "3";

  let count = 3;
  const intervalId = setInterval(() => {
    count -= 1;
    if (count > 0) {
      numberEl.textContent = String(count);
    } else {
      clearInterval(intervalId);
      overlay.style.display = "none";
      startQuiz(level);
    }
  }, 1000);
}

const quizData = {
  hsk1: [
  {
    question: "我__喜欢看电视。",
    options: ["很", "玩", "看", "再"],
    answer: "很"
  },
  {
    question: "我们__有四口人。",
    options: ["家", "学校", "公司", "地方"],
    answer: "家"
  },
  {
    question: "他的__在学校工作。",
    options: ["女儿", "看", "我", "学"],
    answer: "女儿"
  },
  {
    question: "__七点去学校吧。",
    options: ["我们", "学校", "老师", "朋友"],
    answer: "我们"
  },
  {
    question: "我去朋友__吃饭。",
    options: ["家", "学校", "公司", "医院"],
    answer: "家"
  },
  {
    question: "我想买___衣服。",
    options: ["一些", "的", "苹果", "一"],
    answer: "一些"
  },
  {
    question: "他喜欢喝__。",
    options: ["茶", "汉堡", "香蕉", "服务员"],
    answer: "茶"
  },
  {
    question: "我去__买东西。",
    options: ["商店", "学校", "公司", "家"],
    answer: "商店"
  },
  {
    question: "我__爸爸和妈妈。",
    options: ["爱", "葡萄", "西瓜", "不"],
    answer: "爱"
  },
  {
    question: "今天很__了。",
    options: ["冷", "蛋糕", "不", "热狗"],
    answer: "冷"
  }
],

 hsk2: [
  {
    question: "这个东西太__了，我买不起。",
    options: ["便宜", "贵", "快", "漂亮"],
    answer: "贵"
  },
  {
    question: "这件衣服很__，我很喜欢。",
    options: ["贵", "漂亮", "快", "慢"],
    answer: "漂亮"
  },
  {
    question: "他跑得很__。",
    options: ["慢", "快", "贵", "便宜"],
    answer: "快"
  },
  {
    question: "这个东西很__，所以很多人买。",
    options: ["贵", "便宜", "快", "慢"],
    answer: "便宜"
  },
  {
    question: "我喜欢__，因为我喜欢去别的国家。",
    options: ["工作", "旅游", "学习", "吃饭"],
    answer: "旅游"
  },
  {
    question: "这个__很漂亮，是红色的。",
    options: ["颜色", "地方", "人", "东西"],
    answer: "颜色"
  },
  {
    question: "我生病了，要吃__。",
    options: ["饭", "药", "水", "水果"],
    answer: "药"
  },
  {
    question: "他喜欢__，每天都去跳。",
    options: ["唱歌", "跳舞", "学习", "跑步"],
    answer: "跳舞"
  },
  {
    question: "我在__上班。",
    options: ["学校", "公司", "家", "医院"],
    answer: "公司"
  },
  {
    question: "这条__很长。",
    options: ["路", "水", "山", "书"],
    answer: "路"
  }
],

  hsk3: [
  {
    question: "出国需要带__。",
    options: ["信用卡", "护照", "感冒", "手机"],
    answer: "护照"
  },
  {
    question: "我们下午有一个重要的__。",
    options: ["会议", "整理", "打扫", "咳嗽"],
    answer: "会议"
  },
  {
    question: "我今天有点不舒服，好像__了。",
    options: ["发烧", "去学校", "书", "水"],
    answer: "发烧"
  },
  {
    question: "我每天坐__去学校。",
    options: ["成绩", "地铁", "搬", "飞机"],
    answer: "地铁"
  },
  {
    question: "周末我会__房间。",
    options: ["打扫", "提高", "搬", "分数"],
    answer: "打扫"
  },
  {
    question: "他喜欢喝__。",
    options: ["水", "茶", "啤酒", "咖啡"],
    answer: "啤酒"
  },
  {
    question: "他的中文__很高。",
    options: ["增加", "水平", "咖啡", "风景"],
    answer: "水平"
  },
  {
    question: "我们要努力__自己的能力。",
    options: ["提高", "增加", "改变", "减少"],
    answer: "提高"
  },
  {
    question: "每个国家都有不同的__。",
    options: ["文化", "应该", "房间", "飞机"],
    answer: "文化"
  },
  {
    question: "我用__付款。",
    options: ["历史", "信用卡", "减少", "增加"],
    answer: "信用卡"
  }
],
 hsk4: [
  {
    question: "你应该好好__这个问题。",
    options: ["考虑", "耐心", "努力", "改变"],
    answer: "考虑"
  },
  {
    question: "不要__时间。",
    options: ["利用", "浪费", "应该", "用"],
    answer: "浪费"
  },
  {
    question: "学习语言需要__。",
    options: ["减少", "耐心", "问题", "性格"],
    answer: "耐心"
  },
  {
    question: "每个人都有自己的__和缺点。",
    options: ["优点", "问题", "习惯", "性格"],
    answer: "优点"
  },
  {
    question: "他最大的__是懒。",
    options: ["优点", "缺点", "能力", "成绩"],
    answer: "缺点"
  },
  {
    question: "你对别人的__很好。",
    options: ["态度", "方法", "能力", "成绩"],
    answer: "态度"
  },
  {
    question: "这个电影太__了。",
    options: ["照顾", "帮助", "无聊", "自然"],
    answer: "无聊"
  },
  {
    question: "我很__他的成功。",
    options: ["帮助", "羡慕", "照顾", "地方"],
    answer: "羡慕"
  },
  {
    question: "家人一直__我。",
    options: ["缺点", "支持", "环境", "成功"],
    answer: "支持"
  },
  {
    question: "我喜欢大__的地方。",
    options: ["无聊", "自然", "态度", "地方"],
    answer: "自然"
  }
],

hsk5: [
  {
    question: "这个机器坏了，需要换__。",
    options: ["零件", "设备", "工具", "机器"],
    answer: "零件"
  },
  {
    question: "这个公司有很多先进的__。",
    options: ["设备", "工具", "产品", "系统"],
    answer: "设备"
  },
  {
    question: "学校的__很完善。",
    options: ["设施", "设备", "环境", "条件"],
    answer: "设施"
  },
  {
    question: "美国的__是谁？",
    options: ["总统", "领导", "官员", "经理"],
    answer: "总统"
  },
  {
    question: "这件事很有__。",
    options: ["意义", "环境", "位置", "产品"],
    answer: "意义"
  },
  {
    question: "现在是一个__社会。",
    options: ["现代", "传统", "发展", "进步"],
    answer: "现代"
  },
  {
    question: "请告诉我你的__。",
    options: ["位置", "现代", "地方", "方向"],
    answer: "位置"
  },
  {
    question: "你可以__联系我。",
    options: ["随时", "传统", "方向", "有时"],
    answer: "随时"
  },
  {
    question: "他有很多工作__。",
    options: ["经验", "能力", "技巧", "方法"],
    answer: "经验"
  },
  {
    question: "这个地方的__很复杂。",
    options: ["地势", "技巧", "有时", "条件"],
    answer: "地势"
  }
]
};

const stepQuizData = {
  hsk1_step1: [
    { question: "我___学生。", options: ["是", "吃", "去"], answer: "是" },
    { question: "他___中国人。", options: ["喝", "是", "买"], answer: "是" },
    { question: "我___水。", options: ["喝", "看", "去"], answer: "喝" },
    { question: "你___哪儿？", options: ["去", "吃", "喝"], answer: "去" },
    { question: "我___北京。", options: ["在", "吃", "买"], answer: "在" },
    { question: "他不___咖啡。", options: ["喝", "看", "去"], answer: "喝" },
    { question: "我想___苹果。", options: ["买", "听", "在"], answer: "买" },
    { question: "你去___？", options: ["哪儿", "什么", "谁"], answer: "哪儿" },
    { question: "我___你。", options: ["爱", "吃", "去"], answer: "爱" },
    { question: "他在___电视。", options: ["看", "喝", "去"], answer: "看" }
  ],

  hsk1_step2: [
  { question: "你___老师吗？", options: ["是", "吃", "喝"], answer: "是" },
  { question: "我___米饭。", options: ["看", "吃", "听"], answer: "吃" },
  { question: "他在___水。", options: ["吃", "喝", "看"], answer: "喝" },
  { question: "我___北京人。", options: ["是", "去", "买"], answer: "是" },
  { question: "你___哪儿来？", options: ["是", "从", "在"], answer: "从" },
  { question: "我不___咖啡。", options: ["喝", "去", "看"], answer: "喝" },
  { question: "他___学校。", options: ["在", "吃", "听"], answer: "在" },
  { question: "我想___汉语。", options: ["学", "喝", "去"], answer: "学" },
  { question: "她___什么？", options: ["吃", "是", "在"], answer: "吃" },
  { question: "我们___中国。", options: ["去", "喝", "听"], answer: "去" }
],

hsk1_step3: [
  { question: "我___汉字。", options: ["写", "喝", "吃"], answer: "写" },
  { question: "他___书。", options: ["读", "去", "喝"], answer: "读" },
  { question: "我___中文。", options: ["学", "吃", "看"], answer: "学" },
  { question: "请___门。", options: ["开", "吃", "坐"], answer: "开" },
  { question: "请___。", options: ["坐", "去", "住"], answer: "坐" },
  { question: "我___家。", options: ["回", "吃", "看"], answer: "回" },
  { question: "我___在北京。", options: ["住", "喝", "去"], answer: "住" },
  { question: "我___王明。", options: ["叫", "吃", "写"], answer: "叫" },
  { question: "我___作业。", options: ["做", "喝", "听"], answer: "做" },
  { question: "请___门。", options: ["关", "写", "坐"], answer: "关" }
],

hsk1_step4: [
  { question: "___是老师？", options: ["谁", "什么", "哪"], answer: "谁" },
  { question: "你喝___？", options: ["谁", "什么", "哪"], answer: "什么" },
  { question: "你去___？", options: ["谁", "哪儿", "什么"], answer: "哪儿" },
  { question: "我在___。", options: ["这儿", "谁", "什么"], answer: "这儿" },
  { question: "他在___。", options: ["那儿", "谁", "哪"], answer: "那儿" },
  { question: "我有___朋友。", options: ["多", "少", "哪"], answer: "多" },
  { question: "这个苹果很___。", options: ["大", "谁", "哪"], answer: "大" },
  { question: "这个杯子很___。", options: ["小", "多", "谁"], answer: "小" },
  { question: "今天人很___。", options: ["多", "谁", "哪"], answer: "多" },
  { question: "这里人很___。", options: ["少", "什么", "谁"], answer: "少" }
],

hsk2_step1: [
  { question: "我___学习汉语。", options: ["开始", "送", "等"], answer: "开始" },
  { question: "他___我很多。", options: ["带", "帮助", "卖"], answer: "帮助" },
  { question: "我在___明天的考试。", options: ["玩", "准备", "问"], answer: "准备" },
  { question: "我___明天去北京。", options: ["希望", "卖", "等"], answer: "希望" },
  { question: "我___这个问题很简单。", options: ["觉得", "给", "送"], answer: "觉得" },
  { question: "老师___我们这个消息。", options: ["带", "告诉", "卖"], answer: "告诉" },
  { question: "我找了很久，终于___了。", options: ["找到", "等", "玩"], answer: "找到" },
  { question: "现在我___你的意思了。", options: ["明白", "卖", "带"], answer: "明白" },
  { question: "我每天___说汉语。", options: ["练习", "送", "给"], answer: "练习" },
  { question: "我___一杯水。", options: ["需要", "玩", "等"], answer: "需要" }
],

hsk2_step2: [
  { question: "这个___很难。", options: ["时间", "问题", "地方"], answer: "问题" },
  { question: "这件___很重要。", options: ["事情", "时间", "近"], answer: "事情" },
  { question: "我没有___。", options: ["问题", "时间", "一起"], answer: "时间" },
  { question: "我们去一个好玩的___。", options: ["时间", "地方", "问题"], answer: "地方" },
  { question: "我___吃过饭了。", options: ["再", "已经", "还"], answer: "已经" },
  { question: "我们___去看电影吧。", options: ["已经", "一起", "还"], answer: "一起" },
  { question: "___下雨，所以我不去。", options: ["因为", "再", "还"], answer: "因为" },
  { question: "我很累，___我想休息。", options: ["因为", "所以", "再"], answer: "所以" },
  { question: "他___在工作。", options: ["再", "已经", "还"], answer: "还" },
  { question: "明天我们___见面。", options: ["再", "还", "已经"], answer: "再" }
],

hsk2_step3: [
  { question: "学校___我家很近。", options: ["给", "离", "送"], answer: "离" },
  { question: "这里很___。", options: ["远", "问", "带"], answer: "远" },
  { question: "北京___上海很远。", options: ["给", "离", "等"], answer: "离" },
  { question: "我___你一本书。", options: ["给", "等", "玩"], answer: "给" },
  { question: "他___我一个礼物。", options: ["卖", "送", "等"], answer: "送" },
  { question: "请___你的书来。", options: ["带", "卖", "问"], answer: "带" },
  { question: "这家店___水果。", options: ["送", "卖", "等"], answer: "卖" },
  { question: "我想___你一个问题。", options: ["问", "给", "带"], answer: "问" },
  { question: "请___我一下。", options: ["玩", "等", "卖"], answer: "等" },
  { question: "周末我们去___吧。", options: ["问", "玩", "给"], answer: "玩" }
],

hsk2_step4: [
  { question: "我___去学校。", options: ["一起", "所以", "再"], answer: "再" },
  { question: "我吃饭了，___去学习。", options: ["因为", "所以", "还"], answer: "所以" },
  { question: "他很忙，___没有时间。", options: ["所以", "再", "还"], answer: "所以" },
  { question: "我们明天___见。", options: ["再", "已经", "还"], answer: "再" },
  { question: "他___在看书。", options: ["再", "还", "所以"], answer: "还" },
  { question: "我们___去北京吧。", options: ["一起", "因为", "已经"], answer: "一起" },
  { question: "我___想吃饭。", options: ["已经", "还", "再"], answer: "还" },
  { question: "___下雨了，我不去。", options: ["所以", "因为", "再"], answer: "因为" },
  { question: "我___做完作业了。", options: ["已经", "再", "还"], answer: "已经" },
  { question: "我们吃完饭，___去玩。", options: ["再", "已经", "因为"], answer: "再" }
],

hsk3_step1: [
  { question: "我去年___中国旅游，所以我会说一点儿汉语。", options: ["去了", "去过", "去"], answer: "去过" },
  { question: "你今天想喝茶___咖啡？", options: ["或者", "还是", "因为"], answer: "还是" },
  { question: "我们可以坐地铁___坐公交车去学校。", options: ["还是", "或者", "如果"], answer: "或者" },
  { question: "他一边听音乐，一边___作业。", options: ["做", "做了", "做过"], answer: "做" },
  { question: "我先去超市买东西，___回家做饭。", options: ["就", "再", "因为"], answer: "再" },
  { question: "我现在___看书呢，请不要说话。", options: ["还没", "正在", "过"], answer: "正在" },
  { question: "我___吃过饭了，现在不饿。", options: ["还没", "已经", "再"], answer: "已经" },
  { question: "最近天气越来越___，大家都喜欢去游泳。", options: ["冷", "热", "忙"], answer: "热" },
  { question: "这个问题不难，只要你认真想，就能解决___。", options: ["一点儿", "比较", "了"], answer: "了" },
  { question: "如果你有时间，我们___一起去看电影。", options: ["就", "因为", "已经"], answer: "就" }
],
hsk3_step2: [
  { question: "我以前___去过北京，但是今年还想再去一次。", options: ["因为", "不", "没有"], answer: "没有" },
  { question: "他今天很忙，___没有时间和我们一起吃饭。", options: ["因为", "所以", "但是"], answer: "所以" },
  { question: "我们先完成作业，___一起去玩，好吗？", options: ["再", "已经", "还是"], answer: "再" },
  { question: "她一边打电话，一边___晚饭。", options: ["做", "做了", "做过"], answer: "做" },
  { question: "我还没吃饭呢，你___？", options: ["吗", "呢", "吧"], answer: "呢" },
  { question: "这个地方离我家不远，走路___十分钟就到了。", options: ["只", "还", "再"], answer: "只" },
  { question: "今天的天气比昨天___冷一点儿。", options: ["很", "更", "太"], answer: "更" },
  { question: "如果你不明白这个问题，可以___老师。", options: ["问", "说", "讲"], answer: "问" },
  { question: "他不但会说英语，___会说汉语。", options: ["还是", "或者", "而且"], answer: "而且" },
  { question: "我已经把作业___了，现在可以休息了。", options: ["做", "做完", "做过"], answer: "做完" }
],
hsk3_step3: [
  { question: "我以前___去过中国，所以对那儿很熟悉。", options: ["吗", "没有", "不"], answer: "没有" },
  { question: "因为今天下大雨，___我们不能出去玩。", options: ["所以", "但是", "还是"], answer: "所以" },
  { question: "我们先去吃饭，___去看电影。", options: ["再", "已经", "或者"], answer: "再" },
  { question: "他一边听老师说话，一边___笔记。", options: ["写", "写了", "写过"], answer: "写" },
  { question: "我正在做作业___，请等我一下。", options: ["吗", "呢", "吧"], answer: "呢" },
  { question: "从我家到学校，走路___十五分钟。", options: ["只", "再", "还"], answer: "只" },
  { question: "今天比昨天___冷，所以我要多穿衣服。", options: ["很", "更", "太"], answer: "更" },
  { question: "如果你有问题，可以___老师。", options: ["问", "说", "看"], answer: "问" },
  { question: "他不但喜欢看书，___喜欢写文章。", options: ["或者", "还是", "而且"], answer: "而且" },
  { question: "我已经把今天的工作___了，可以回家了。", options: ["做", "做完", "做过"], answer: "做完" }
],
hsk3_step4: [
  { question: "我___看过这部电影了，所以不想再看一次。", options: ["已经", "还", "再"], answer: "已经" },
  { question: "你明天去学校___坐公交车？", options: ["或者", "还是", "因为"], answer: "还是" },
  { question: "他学习很努力，___考试成绩很好。", options: ["因为", "所以", "但是"], answer: "所以" },
  { question: "我们一边走路，一边___昨天发生的事情。", options: ["说", "说了", "说过"], answer: "说" },
  { question: "老师正在上课___，同学们都很认真。", options: ["吗", "呢", "吧"], answer: "呢" },
  { question: "这个地方离公司很近，走路___五分钟就到了。", options: ["只", "还", "再"], answer: "只" },
  { question: "今天的工作比昨天___多一点儿。", options: ["很", "更", "太"], answer: "更" },
  { question: "如果你不舒服，就应该___医生。", options: ["看", "说", "想"], answer: "看" },
  { question: "他不但会开车，___会修车。", options: ["还是", "或者", "而且"], answer: "而且" },
  { question: "我已经把饭___好了，你可以来吃了。", options: ["做", "做完", "做高"], answer: "做" }
],

hsk4_step1: [
  { question: "虽然他工作很忙，___每天坚持学习汉语。", options: ["但是", "所以", "因为"], answer: "但是" },
  { question: "这个问题比较复杂，我们需要时间来___。", options: ["解决", "提高", "安排"], answer: "解决" },
  { question: "为了通过考试，他每天都很认真地___。", options: ["学习", "影响", "改变"], answer: "学习" },
  { question: "他把手机___在桌子上，然后出去了。", options: ["放", "给", "做"], answer: "放" },
  { question: "这本书是由一个很有名的作家___的。", options: ["写", "写的", "写了"], answer: "写的" },
  { question: "如果你有时间，我们___一起去看电影吧。", options: ["就", "才", "还"], answer: "就" },
  { question: "他不但会说英语，___会说法语。", options: ["而且", "还是", "或者"], answer: "而且" },
  { question: "天气越来越冷，大家都开始___衣服了。", options: ["穿", "带", "用"], answer: "穿" },
  { question: "这个地方离我家不远，走路___十分钟。", options: ["只要", "只", "才"], answer: "只" },
  { question: "你说得太快了，我没有___。", options: ["明白", "解决", "提供"], answer: "明白" }
],

hsk4_step2: [
  { question: "他每天都___锻炼身体，所以很健康。", options: ["坚持", "安排", "控制"], answer: "坚持" },
  { question: "除了中文以外，他___会说日语。", options: ["还", "只", "再"], answer: "还" },
  { question: "老师让我们把作业___明天交。", options: ["在", "给", "于"], answer: "给" },
  { question: "这件事情对我来说非常___。", options: ["重要", "简单", "清楚"], answer: "重要" },
  { question: "这个问题我们已经讨论___很久了。", options: ["了", "过", "着"], answer: "了" },
  { question: "他刚到家，电话___响了。", options: ["就", "才", "还"], answer: "就" },
  { question: "这个工作既有意思___有挑战。", options: ["又", "也", "还"], answer: "又" },
  { question: "你应该多注意自己的___。", options: ["健康", "事情", "地方"], answer: "健康" },
  { question: "他把自己的想法___给大家听。", options: ["说", "做", "看"], answer: "说" },
  { question: "这个问题太难了，我一个人解决___。", options: ["不了", "不", "没"], answer: "不了" }
],

hsk4_step3: [
  { question: "他对这件事很感兴趣，___主动参加了。", options: ["所以", "因为", "但是"], answer: "所以" },
  { question: "你可以坐地铁___坐公交车去公司。", options: ["或者", "还是", "因为"], answer: "或者" },
  { question: "为了提高成绩，他每天都练习___。", options: ["写作", "解决", "影响"], answer: "写作" },
  { question: "他已经把工作___完了，现在可以休息。", options: ["做", "做好", "做过"], answer: "做好" },
  { question: "老师要求我们认真地___每一个问题。", options: ["回答", "改变", "安排"], answer: "回答" },
  { question: "这个城市的发展速度越来越___。", options: ["快", "多", "大"], answer: "快" },
  { question: "你要是有问题，可以___我。", options: ["问", "说", "看"], answer: "问" },
  { question: "这件事情不但重要，___很紧急。", options: ["而且", "或者", "还是"], answer: "而且" },
  { question: "他工作得很认真，___大家都很喜欢他。", options: ["所以", "因为", "但是"], answer: "所以" },
  { question: "这个地方比以前___安静多了。", options: ["更", "很", "太"], answer: "更" }
],

hsk4_step4: [
  { question: "你不用担心，我已经把事情___好了。", options: ["安排", "安排好", "安排过"], answer: "安排好" },
  { question: "他一边工作，一边___音乐。", options: ["听", "听了", "听过"], answer: "听" },
  { question: "如果明天下雨，我们___不去了。", options: ["就", "才", "再"], answer: "就" },
  { question: "这个问题我们还没___清楚。", options: ["解释", "解释了", "解释过"], answer: "解释" },
  { question: "这本书对学习汉语很有___。", options: ["帮助", "影响", "安排"], answer: "帮助" },
  { question: "他不但聪明，___非常努力。", options: ["而且", "或者", "还是"], answer: "而且" },
  { question: "这件事情由他___。", options: ["负责", "提高", "解决"], answer: "负责" },
  { question: "你说得太快了，我听得不太___。", options: ["清楚", "明白", "了解"], answer: "清楚" },
  { question: "这个计划我们需要再___一下。", options: ["考虑", "提供", "控制"], answer: "考虑" },
  { question: "他刚开始学习汉语，但是进步得很___。", options: ["快", "多", "大"], answer: "快" }
],

hsk5_step1: [
  { question: "即使今天工作很忙，他___决定参加会议。", options: ["也", "就", "才"], answer: "也" },
  { question: "___你愿不愿意，我们都要按计划完成任务。", options: ["即使", "无论", "虽然"], answer: "无论" },
  { question: "他不仅没有道歉，___还把责任推给别人。", options: ["而且", "反而", "甚至"], answer: "反而" },
  { question: "既然你已经决定了，___就不要再犹豫了。", options: ["也", "就", "才"], answer: "就" },
  { question: "这个问题是___天气变化引起的。", options: ["由", "被", "把"], answer: "由" },
  { question: "为了提高工作效率，公司决定___新的管理制度。", options: ["采取", "承担", "表达"], answer: "采取" },
  { question: "这项研究结果___了人们对健康的重视。", options: ["促进", "影响", "说明"], answer: "促进" },
  { question: "根据专家的分析，这种情况___不会持续太久。", options: ["恐怕", "简直", "根本"], answer: "恐怕" },
  { question: "他___没想到事情会变得这么复杂。", options: ["甚至", "竟然", "原来"], answer: "竟然" },
  { question: "他说话太快，我有点听___。", options: ["不懂", "不出来", "不清楚"], answer: "不懂" }
],

hsk5_step2: [
  { question: "这个项目由五个人___，每个人都有明确分工。", options: ["组成", "引起", "包括"], answer: "组成" },
  { question: "他一边听音乐，一边___今天的工作计划。", options: ["制定", "提供", "保护"], answer: "制定" },
  { question: "虽然条件比较困难，他___坚持完成了任务。", options: ["还是", "所以", "于是"], answer: "还是" },
  { question: "你与其一直抱怨，___努力去改变现状。", options: ["不如", "不但", "宁可"], answer: "不如" },
  { question: "这件事情对他来说___非常重要。", options: ["简直", "大概", "甚至"], answer: "简直" },
  { question: "如果你继续这样下去，结果___会越来越糟。", options: ["就", "才", "还"], answer: "就" },
  { question: "他刚一到公司，___开始处理紧急问题。", options: ["就", "才", "再"], answer: "就" },
  { question: "这项决定___公司未来的发展方向。", options: ["影响", "表达", "控制"], answer: "影响" },
  { question: "他看起来很冷静，其实内心___很紧张。", options: ["却", "也", "还"], answer: "却" },
  { question: "这个问题我们需要认真讨论，___再做决定。", options: ["然后", "但是", "因为"], answer: "然后" }
],

hsk5_step3: [
  { question: "___你选择哪种方法，都必须考虑实际情况。", options: ["无论", "如果", "尽管"], answer: "无论" },
  { question: "他不但提高了工作效率，___改善了团队合作。", options: ["而且", "还是", "或者"], answer: "而且" },
  { question: "这个结果___大家的努力密切相关。", options: ["与", "对", "给"], answer: "与" },
  { question: "由于时间不够，___我们只能先完成最重要的部分。", options: ["因此", "但是", "还是"], answer: "因此" },
  { question: "他说的话让我___意识到问题的严重性。", options: ["逐渐", "突然", "完全"], answer: "突然" },
  { question: "这种变化是长期积累___形成的。", options: ["才", "就", "也"], answer: "才" },
  { question: "你连这么简单的问题___不会吗？", options: ["都", "也", "就"], answer: "都" },
  { question: "这项任务看起来很简单，做起来却不那么___。", options: ["容易", "清楚", "明白"], answer: "容易" },
  { question: "他努力工作，___取得了不错的成绩。", options: ["最终", "甚至", "简直"], answer: "最终" },
  { question: "这种做法在实际操作中___存在一些问题。", options: ["仍然", "已经", "再"], answer: "仍然" }
],

hsk5_step4: [
  { question: "这个计划需要根据实际情况进行___。", options: ["调整", "说明", "表达"], answer: "调整" },
  { question: "他提出的建议___得到了大家的支持。", options: ["很快", "很多", "很大"], answer: "很快" },
  { question: "这本书内容丰富，___语言也很生动。", options: ["同时", "但是", "因为"], answer: "同时" },
  { question: "这件事不仅关系到个人利益，___影响到整个团队。", options: ["还", "就", "才"], answer: "还" },
  { question: "他经过长时间的努力，终于___了自己的目标。", options: ["实现", "表达", "承担"], answer: "实现" },
  { question: "这种现象___引起了社会的广泛关注。", options: ["已经", "再", "还"], answer: "已经" },
  { question: "我们需要采取措施来___环境问题。", options: ["解决", "表达", "包括"], answer: "解决" },
  { question: "他说话的时候显得很自信，___其实并没有把握。", options: ["但", "所以", "因为"], answer: "但" },
  { question: "这件事情的发展结果___我们的预料。", options: ["超出了", "组成了", "包括了"], answer: "超出了" },
  { question: "他对这个问题的理解___比我更深入。", options: ["明显", "完全", "大概"], answer: "明显" }
]

};

const grammarData = {
  hsk1_step1: [
    { title: "很 (hěn)", pinyin: "hěn", meaning: "Linking adjective — connects a subject with an adjective (often does NOT mean 'very')", structure: "Subject + 很 + Adjective", chinese: "我很好。", romanized: "wǒ hěn hǎo", translation: "I am good." },
    { title: "也 (yě)", pinyin: "yě", meaning: "Also / too — used to express 'also' or 'too'", structure: "Subject + 也 + Verb / Adjective", chinese: "我也去。", romanized: "wǒ yě qù", translation: "I also go." },
    { title: "都 (dōu)", pinyin: "dōu", meaning: "All / both — used to indicate 'all' for plural subjects", structure: "Plural Subject + 都 + Verb", chinese: "我们都去。", romanized: "wǒmen dōu qù", translation: "We all go." },
    { title: "和 (hé)", pinyin: "hé", meaning: "And — used to connect nouns (not verbs)", structure: "Noun + 和 + Noun", chinese: "我和你去。", romanized: "wǒ hé nǐ qù", translation: "You and I go." },
    { title: "在 + Verb (zài)", pinyin: "zài", meaning: "Present continuous — describes an action happening right now", structure: "Subject + 在 + Verb", chinese: "我在吃饭。", romanized: "wǒ zài chī fàn", translation: "I am eating." }
  ],
  hsk1_step2: [
    { title: "这 / 那 + 是 (zhè / nà)", pinyin: "zhè / nà + shì", meaning: "This/that is — used to identify things", structure: "这 / 那 + 是 + Noun", chinese: "这是我的书。", romanized: "zhè shì wǒ de shū", translation: "This is my book." },
    { title: "从 (cóng)", pinyin: "cóng", meaning: "From — indicates origin or starting point", structure: "Subject + 从 + Place + Verb", chinese: "我从中国来。", romanized: "wǒ cóng Zhōngguó lái", translation: "I come from China." },
    { title: "的 (de)", pinyin: "de", meaning: "Possessive particle — shows ownership", structure: "Subject + 的 + Noun", chinese: "这是我的书。", romanized: "zhè shì wǒ de shū", translation: "This is my book." }
  ],
  hsk1_step3: [
    { title: "请 (qǐng)", pinyin: "qǐng", meaning: "Please — used to make polite requests", structure: "请 + Verb", chinese: "请坐。", romanized: "qǐng zuò", translation: "Please sit." },
    { title: "了 (le)", pinyin: "le", meaning: "Completed action — shows an action is completed or a change has occurred", structure: "Subject + Verb + 了", chinese: "我吃了。", romanized: "wǒ chī le", translation: "I have eaten / I ate." },
    { title: "不 (bù)", pinyin: "bù", meaning: "Negation — used to negate verbs or adjectives", structure: "Subject + 不 + Verb", chinese: "我不喝咖啡。", romanized: "wǒ bù hē kāfēi", translation: "I don't drink coffee." },
    { title: "有 (yǒu)", pinyin: "yǒu", meaning: "To have / there is — expresses possession or existence", structure: "Subject + 有 + Object", chinese: "我有一个朋友。", romanized: "wǒ yǒu yí gè péngyou", translation: "I have a friend." }
  ],
  hsk1_step4: [
    { title: "是 (shì)", pinyin: "shì", meaning: "To be — used to identify or describe someone/something", structure: "Subject + 是 + Noun", chinese: "我是学生。", romanized: "wǒ shì xuéshēng", translation: "I am a student." },
    { title: "吗 (ma)", pinyin: "ma", meaning: "Yes/no question particle — added at the end of a sentence", structure: "Statement + 吗？", chinese: "你是老师吗？", romanized: "nǐ shì lǎoshī ma?", translation: "Are you a teacher?" },
    { title: "在 (zài)", pinyin: "zài", meaning: "To be at / in — used to indicate location", structure: "Subject + 在 + Place", chinese: "我在学校。", romanized: "wǒ zài xuéxiào", translation: "I am at school." },
    { title: "呢 (ne)", pinyin: "ne", meaning: "And…? — used to ask back or continue the topic", structure: "Statement, + Subject + 呢？", chinese: "我很好，你呢？", romanized: "wǒ hěn hǎo, nǐ ne?", translation: "I'm good, and you?" },
    { title: "这 / 那 (zhè / nà)", pinyin: "zhè / nà", meaning: "This / that — used to point to things", structure: "这 / 那 + (classifier) + Noun", chinese: "这是书。", romanized: "zhè shì shū", translation: "This is a book." },
    { title: "的 (de)", pinyin: "de", meaning: "Possessive particle — shows ownership", structure: "Subject + 的 + Noun", chinese: "这是我的书。", romanized: "zhè shì wǒ de shū", translation: "This is my book." },
    { title: "几 (jǐ)", pinyin: "jǐ", meaning: "How many — for small quantities (usually less than 10)", structure: "几 + Classifier + Noun", chinese: "你有几个朋友？", romanized: "nǐ yǒu jǐ gè péngyou?", translation: "How many friends do you have?" },
    { title: "Verb + 不 + Verb", pinyin: "A-not-A question", meaning: "Yes/no question without 吗 — asks whether someone does something or not", structure: "Subject + Verb + 不 + Verb", chinese: "你去不去？", romanized: "nǐ qù bù qù?", translation: "Are you going or not?" },
    { title: "很 (hěn)", pinyin: "hěn", meaning: "Linking adjective — connects subject with adjective", structure: "Subject + 很 + Adjective", chinese: "我很好。", romanized: "wǒ hěn hǎo", translation: "I am good." },
    { title: "也 (yě)", pinyin: "yě", meaning: "Also / too", structure: "Subject + 也 + Verb", chinese: "我也去。", romanized: "wǒ yě qù", translation: "I also go." }
  ],
  hsk2_step1: [
  { title: "了 (le) — completed action", pinyin: "le", meaning: "Used to indicate a completed action", structure: "Subject + Verb + 了", chinese: "我吃了饭。", romanized: "wǒ chī le fàn", translation: "I ate / I have eaten." },
  { title: "了 (le) — change of situation", pinyin: "le", meaning: "Used at the end of a sentence to show a new situation", structure: "Sentence + 了", chinese: "下雨了。", romanized: "xià yǔ le", translation: "It's raining now." },
  { title: "正在 / 在 (zhèngzài / zài)", pinyin: "zhèngzài / zài", meaning: "Ongoing action — describes actions happening right now", structure: "Subject + 在 / 正在 + Verb", chinese: "我在学习。", romanized: "wǒ zài xuéxí", translation: "I am studying." },
  { title: "比 (bǐ)", pinyin: "bǐ", meaning: "Comparison — used to compare two things", structure: "A + 比 + B + Adjective", chinese: "他比我高。", romanized: "tā bǐ wǒ gāo", translation: "He is taller than me." }
],
hsk2_step2: [
  { title: "太…了 (tài…le)", pinyin: "tài…le", meaning: "Too / very — expresses strong feeling or surprise", structure: "Subject + 太 + Adjective + 了", chinese: "太贵了！", romanized: "tài guì le", translation: "Too expensive!" },
  { title: "想 (xiǎng)", pinyin: "xiǎng", meaning: "Want to / would like — expresses desire", structure: "Subject + 想 + Verb", chinese: "我想去中国。", romanized: "wǒ xiǎng qù Zhōngguó", translation: "I want to go to China." },
  { title: "要 (yào)", pinyin: "yào", meaning: "Want / will — used for intention or future action", structure: "Subject + 要 + Verb", chinese: "我要买东西。", romanized: "wǒ yào mǎi dōngxi", translation: "I will / want to buy something." }
],
hsk2_step3: [
  { title: "可以 (kěyǐ)", pinyin: "kěyǐ", meaning: "Can / may — used to ask or give permission", structure: "Subject + 可以 + Verb", chinese: "我可以进来吗？", romanized: "wǒ kěyǐ jìnlái ma?", translation: "May I come in?" },
  { title: "会 (huì)", pinyin: "huì", meaning: "Can — used for learned ability or skill", structure: "Subject + 会 + Verb", chinese: "我会说汉语。", romanized: "wǒ huì shuō Hànyǔ", translation: "I can speak Chinese." },
  { title: "能 (néng)", pinyin: "néng", meaning: "Can — used for physical ability or possibility", structure: "Subject + 能 + Verb", chinese: "我能去。", romanized: "wǒ néng qù", translation: "I am able to go." },
  { title: "给 (gěi)", pinyin: "gěi", meaning: "To / for someone — indicates the receiver of an action", structure: "Subject + 给 + Person + Verb", chinese: "我给你打电话。", romanized: "wǒ gěi nǐ dǎ diànhuà", translation: "I call you." }
],
hsk2_step4: [
  { title: "从…到… (cóng…dào…)", pinyin: "cóng…dào…", meaning: "From…to… — expresses a range of place or time", structure: "从 + Place/Time + 到 + Place/Time", chinese: "我从北京到上海。", romanized: "wǒ cóng Běijīng dào Shànghǎi", translation: "I go from Beijing to Shanghai." },
  { title: "离 (lí)", pinyin: "lí", meaning: "Distance from — expresses distance between two places", structure: "A + 离 + B + Adjective", chinese: "我家离学校很近。", romanized: "wǒ jiā lí xuéxiào hěn jìn", translation: "My home is close to school." },
  { title: "还 (hái) vs 再 (zài)", pinyin: "hái / zài", meaning: "还 = still / also (ongoing). 再 = again (future repetition)", structure: "还: Subject + 还 + Verb | 再: Subject + 再 + Verb", chinese: "我还在学习。/ 我再去一次。", romanized: "wǒ hái zài xuéxí / wǒ zài qù yīcì", translation: "I am still studying. / I will go again." },
  { title: "因为…所以… (yīnwèi…suǒyǐ…)", pinyin: "yīnwèi…suǒyǐ…", meaning: "Because…so… — expresses cause and result", structure: "因为 + Reason + 所以 + Result", chinese: "因为下雨，所以我不去。", romanized: "yīnwèi xiàyǔ, suǒyǐ wǒ bù qù", translation: "Because it's raining, I'm not going." }
],

hsk3_step1: [
  { title: "过 (guò)", pinyin: "guò", meaning: "Past experience — used to express that you have done something before", structure: "Subject + Verb + 过", chinese: "我去过中国。", romanized: "wǒ qù guò Zhōngguó", translation: "I have been to China." },
  { title: "还是 (háishì)", pinyin: "háishì", meaning: "Or — used to give choices in a question", structure: "A + 还是 + B", chinese: "你喝茶还是咖啡？", romanized: "nǐ hē chá háishì kāfēi?", translation: "Do you drink tea or coffee?" },
  { title: "或者 (huòzhě)", pinyin: "huòzhě", meaning: "Or — used in statements, not questions", structure: "A + 或者 + B", chinese: "你可以喝茶或者咖啡。", romanized: "nǐ kěyǐ hē chá huòzhě kāfēi", translation: "You can drink tea or coffee." },
  { title: "一边…一边… (yìbiān…yìbiān…)", pinyin: "yìbiān…yìbiān…", meaning: "Doing two actions at the same time — simultaneous actions", structure: "一边 + Verb1 + 一边 + Verb2", chinese: "我一边吃饭一边看电视。", romanized: "wǒ yìbiān chīfàn yìbiān kàn diànshì", translation: "I eat while watching TV." }
],
hsk3_step2: [
  { title: "先…再… (xiān…zài…)", pinyin: "xiān…zài…", meaning: "First…then… — used for sequence of actions", structure: "先 + Action1 + 再 + Action2", chinese: "我先吃饭，再学习。", romanized: "wǒ xiān chīfàn, zài xuéxí", translation: "I eat first, then study." },
  { title: "正在…呢 (zhèngzài…ne)", pinyin: "zhèngzài…ne", meaning: "Action in progress — emphasizes an ongoing action", structure: "正在 + Verb + 呢", chinese: "我正在看书呢。", romanized: "wǒ zhèngzài kàn shū ne", translation: "I am reading now." },
  { title: "已经…了 (yǐjīng…le)", pinyin: "yǐjīng…le", meaning: "Already — used to show something has already happened", structure: "已经 + Verb + 了", chinese: "我已经吃了。", romanized: "wǒ yǐjīng chī le", translation: "I have already eaten." },
  { title: "还没(有)…呢 (hái méi(yǒu)…ne)", pinyin: "hái méi(yǒu)…ne", meaning: "Not yet — used to say something has not happened yet", structure: "还没(有) + Verb + 呢", chinese: "我还没吃呢。", romanized: "wǒ hái méi chī ne", translation: "I haven't eaten yet." }
],
hsk3_step3: [
  { title: "越来越… (yuèláiyuè…)", pinyin: "yuèláiyuè", meaning: "More and more — used for gradual change", structure: "越来越 + Adjective", chinese: "天气越来越热。", romanized: "tiānqì yuèláiyuè rè", translation: "The weather is getting hotter." },
  { title: "一点儿 (yìdiǎnr)", pinyin: "yìdiǎnr", meaning: "A little — used to indicate a small degree", structure: "Verb + 一点儿", chinese: "我想喝一点儿水。", romanized: "wǒ xiǎng hē yìdiǎnr shuǐ", translation: "I want to drink a little water." },
  { title: "比较 (bǐjiào)", pinyin: "bǐjiào", meaning: "Relatively / quite — used to soften or moderate an adjective", structure: "Subject + 比较 + Adjective", chinese: "这个比较便宜。", romanized: "zhège bǐjiào piányí", translation: "This is relatively cheap." },
  { title: "不但…而且… (búdàn…érqiě…)", pinyin: "búdàn…érqiě…", meaning: "Not only…but also… — connects two related ideas", structure: "不但 + A + 而且 + B", chinese: "他不但会说英语，而且会说汉语。", romanized: "tā búdàn huì shuō Yīngyǔ, érqiě huì shuō Hànyǔ", translation: "He not only speaks English, but also Chinese." }
],
hsk3_step4: [
  { title: "因为…所以… (yīnwèi…suǒyǐ…)", pinyin: "yīnwèi…suǒyǐ…", meaning: "Because…so… — used for cause and result (complex use)", structure: "因为 + Reason + 所以 + Result", chinese: "因为他很忙，所以没来。", romanized: "yīnwèi tā hěn máng, suǒyǐ méi lái", translation: "Because he is busy, he didn't come." },
  { title: "如果…就… (rúguǒ…jiù…)", pinyin: "rúguǒ…jiù…", meaning: "If…then… — used for conditional sentences", structure: "如果 + Condition + 就 + Result", chinese: "如果下雨，我就不去。", romanized: "rúguǒ xià yǔ, wǒ jiù bù qù", translation: "If it rains, I won't go." },
  { title: "给 + Verb (gěi)", pinyin: "gěi", meaning: "For someone — indicates action done for or affecting someone", structure: "Subject + 给 + Person + Verb", chinese: "他给我打电话。", romanized: "tā gěi wǒ dǎ diànhuà", translation: "He calls me." },
  { title: "把 (bǎ) sentence", pinyin: "bǎ", meaning: "Emphasizes the result of an action on an object", structure: "Subject + 把 + Object + Verb + Result", chinese: "我把书放在桌子上。", romanized: "wǒ bǎ shū fàng zài zhuōzi shàng", translation: "I put the book on the table." }
],

hsk4_step1: [
  { title: "把 (bǎ)", pinyin: "bǎ", meaning: "Object disposal — emphasizes how an object is handled or affected", structure: "Subject + 把 + Object + Verb + Result", chinese: "我把书放在桌子上。", romanized: "wǒ bǎ shū fàng zài zhuōzi shàng", translation: "I put the book on the table." },
  { title: "被 (bèi)", pinyin: "bèi", meaning: "Passive voice — shows that the subject receives an action", structure: "Object + 被 + Subject + Verb", chinese: "手机被他拿走了。", romanized: "shǒujī bèi tā ná zǒu le", translation: "The phone was taken by him." },
  { title: "越…越… (yuè…yuè…)", pinyin: "yuè…yuè…", meaning: "The more…, the more… — expresses increasing change", structure: "越 + Verb/Adj + 越 + Adj", chinese: "他越学越好。", romanized: "tā yuè xué yuè hǎo", translation: "The more he studies, the better he gets." },
  { title: "一…就… (yī…jiù…)", pinyin: "yī…jiù…", meaning: "As soon as…then… — shows immediate sequence", structure: "一 + Action1 + 就 + Action2", chinese: "我一到家就吃饭。", romanized: "wǒ yī dào jiā jiù chīfàn", translation: "As soon as I get home, I eat." },
  { title: "除了…以外，还/也… (chúle…yǐwài…)", pinyin: "chúle…yǐwài…", meaning: "Besides…also… — adds additional information", structure: "除了 + A + 以外 + 还/也 + B", chinese: "除了中文以外，他还会英语。", romanized: "chúle Zhōngwén yǐwài, tā hái huì Yīngyǔ", translation: "Besides Chinese, he also speaks English." },
  { title: "不但…而且… (bùdàn…érqiě…)", pinyin: "bùdàn…érqiě…", meaning: "Not only…but also… — emphasizes two qualities or actions", structure: "不但 + A + 而且 + B", chinese: "他不但聪明，而且努力。", romanized: "tā bùdàn cōngmíng, érqiě nǔlì", translation: "He is not only smart, but also hardworking." },
  { title: "虽然…但是… (suīrán…dànshì…)", pinyin: "suīrán…dànshì…", meaning: "Although…but… — expresses contrast", structure: "虽然 + A + 但是 + B", chinese: "虽然很累，但是我还要工作。", romanized: "suīrán hěn lèi, dànshì wǒ hái yào gōngzuò", translation: "Although I’m tired, I still have to work." },
  { title: "如果…就… (rúguǒ…jiù…)", pinyin: "rúguǒ…jiù…", meaning: "If…then… — conditional sentence", structure: "如果 + Condition + 就 + Result", chinese: "如果下雨，我就不去。", romanized: "rúguǒ xiàyǔ, wǒ jiù bú qù", translation: "If it rains, I won’t go." }
],

hsk4_step2: [
  { title: "因为…所以… (yīnwèi…suǒyǐ…)", pinyin: "yīnwèi…suǒyǐ…", meaning: "Because…so… — expresses cause and result", structure: "因为 + Cause + 所以 + Result", chinese: "因为忙，所以没来。", romanized: "yīnwèi máng, suǒyǐ méi lái", translation: "Because busy, (he) didn’t come." },
  { title: "只要…就… (zhǐyào…jiù…)", pinyin: "zhǐyào…jiù…", meaning: "As long as…then… — expresses sufficient condition", structure: "只要 + Condition + 就 + Result", chinese: "只要努力，就会成功。", romanized: "zhǐyào nǔlì, jiù huì chénggōng", translation: "As long as you work hard, you will succeed." },
  { title: "不仅…还… (bùjǐn…hái…)", pinyin: "bùjǐn…hái…", meaning: "Not only…but also… — more formal expression", structure: "不仅 + A + 还 + B", chinese: "他不仅会说汉语，还会说法语。", romanized: "tā bùjǐn huì shuō Hànyǔ, hái huì shuō Fǎyǔ", translation: "He not only speaks Chinese, but also French." },
  { title: "既…又… (jì…yòu…)", pinyin: "jì…yòu…", meaning: "Both…and… — describes two qualities", structure: "既 + Adj1 + 又 + Adj2", chinese: "这个地方既安静又漂亮。", romanized: "zhège dìfang jì ānjìng yòu piàoliang", translation: "This place is both quiet and beautiful." },
  { title: "一边…一边… (yìbiān…yìbiān…)", pinyin: "yìbiān…yìbiān…", meaning: "Doing two actions at the same time", structure: "一边 + Verb1 + 一边 + Verb2", chinese: "我一边听音乐一边学习。", romanized: "wǒ yìbiān tīng yīnyuè yìbiān xuéxí", translation: "I study while listening to music." },
  { title: "先…再… (xiān…zài…)", pinyin: "xiān…zài…", meaning: "First…then… — shows sequence", structure: "先 + Action1 + 再 + Action2", chinese: "先吃饭，再学习。", romanized: "xiān chīfàn, zài xuéxí", translation: "Eat first, then study." },
  { title: "已经…了 (yǐjīng…le)", pinyin: "yǐjīng…le", meaning: "Already — indicates completed action", structure: "Subject + 已经 + Verb + 了", chinese: "我已经吃了。", romanized: "wǒ yǐjīng chī le", translation: "I have already eaten." },
  { title: "还没(有)…呢 (hái méi(yǒu)…ne)", pinyin: "hái méi(yǒu)…ne", meaning: "Not yet — indicates something has not happened", structure: "Subject + 还没(有) + Verb + 呢", chinese: "我还没吃呢。", romanized: "wǒ hái méi chī ne", translation: "I haven’t eaten yet." }
],

hsk4_step3: [
  { title: "刚…就… (gāng…jiù…)", pinyin: "gāng…jiù…", meaning: "Just…then… — indicates something happened immediately after", structure: "刚 + Action1 + 就 + Action2", chinese: "我刚到家，他就来了。", romanized: "wǒ gāng dào jiā, tā jiù lái le", translation: "I just got home, and he arrived." },
  { title: "正在…呢 (zhèngzài…ne)", pinyin: "zhèngzài…ne", meaning: "In the middle of doing — action in progress", structure: "Subject + 正在 + Verb + 呢", chinese: "我正在看书呢。", romanized: "wǒ zhèngzài kàn shū ne", translation: "I am reading (right now)." },
  { title: "比 (bǐ)", pinyin: "bǐ", meaning: "Comparison — used to compare two things", structure: "A + 比 + B + Adjective", chinese: "他比我高。", romanized: "tā bǐ wǒ gāo", translation: "He is taller than me." },
  { title: "更 / 最 (gèng / zuì)", pinyin: "gèng / zuì", meaning: "Comparative & superlative — more / most", structure: "更 + Adj / 最 + Adj", chinese: "他更高。他最高。", romanized: "tā gèng gāo. tā zuì gāo", translation: "He is taller. He is the tallest." },
  { title: "得 (de)", pinyin: "de", meaning: "Degree complement — describes how an action is done", structure: "Verb + 得 + Adj", chinese: "他说得很快。", romanized: "tā shuō de hěn kuài", translation: "He speaks very fast." },
  { title: "地 (de)", pinyin: "de", meaning: "Adverb marker — used before verbs", structure: "Adj + 地 + Verb", chinese: "他认真地学习。", romanized: "tā rènzhēn de xuéxí", translation: "He studies seriously." },
  { title: "的 (de)", pinyin: "de", meaning: "Modifier — connects description to noun", structure: "Adj + 的 + Noun", chinese: "漂亮的衣服", romanized: "piàoliang de yīfu", translation: "Beautiful clothes." },
  { title: "越来越… (yuèláiyuè…)", pinyin: "yuèláiyuè…", meaning: "More and more — indicates gradual change", structure: "Subject + 越来越 + Adj", chinese: "天气越来越冷。", romanized: "tiānqì yuèláiyuè lěng", translation: "The weather is getting colder and colder." }
],

hsk4_step4: [
  { title: "对…来说 (duì…láishuō)", pinyin: "duì…láishuō", meaning: "For someone… — expresses perspective", structure: "对 + Someone + 来说 + Sentence", chinese: "对我来说，这很重要。", romanized: "duì wǒ láishuō, zhè hěn zhòngyào", translation: "For me, this is very important." },
  { title: "关于… (guānyú…)", pinyin: "guānyú…", meaning: "About / regarding…", structure: "关于 + Topic + Sentence", chinese: "关于这个问题，我们要讨论。", romanized: "guānyú zhège wèntí, wǒmen yào tǎolùn", translation: "Regarding this issue, we need to discuss." },
  { title: "为了… (wèile…)", pinyin: "wèile…", meaning: "In order to… — expresses purpose", structure: "为了 + Goal + Action", chinese: "为了考试，我每天学习。", romanized: "wèile kǎoshì, wǒ měitiān xuéxí", translation: "In order to pass the exam, I study every day." },
  { title: "由… (yóu…)", pinyin: "yóu…", meaning: "By… — indicates source or doer", structure: "Object + 由 + Subject + Verb", chinese: "这本书由他写的。", romanized: "zhè běn shū yóu tā xiě de", translation: "This book was written by him." },
  { title: "连…都… (lián…dōu…)", pinyin: "lián…dōu…", meaning: "Even… — emphasizes extreme case", structure: "连 + A + 都 + Verb", chinese: "他连中文都不会说。", romanized: "tā lián Zhōngwén dōu bú huì shuō", translation: "He can’t even speak Chinese." },
  { title: "不用…了 (búyòng…le)", pinyin: "búyòng…le", meaning: "No need to… anymore", structure: "Subject + 不用 + Verb + 了", chinese: "你不用来了。", romanized: "nǐ búyòng lái le", translation: "You don’t need to come anymore." },
  { title: "差不多 (chàbuduō)", pinyin: "chàbuduō", meaning: "Almost / about", structure: "差不多 + Time/Amount", chinese: "差不多五点了。", romanized: "chàbuduō wǔ diǎn le", translation: "It’s almost five o’clock." },
  { title: "好像… (hǎoxiàng…)", pinyin: "hǎoxiàng…", meaning: "Seems like… / appears to…", structure: "Subject + 好像 + Adj/Verb", chinese: "他好像很累。", romanized: "tā hǎoxiàng hěn lèi", translation: "He seems very tired." }
],

hsk5_step1: [
  { title: "不仅…而且… (bùjǐn…érqiě…)", pinyin: "bùjǐn…érqiě…", meaning: "Not only…but also…", structure: "不仅 + A + 而且 + B", chinese: "他不仅聪明，而且努力。", romanized: "tā bùjǐn cōngmíng, érqiě nǔlì", translation: "He is not only smart, but also hardworking." },
  { title: "即使…也… (jíshǐ…yě…)", pinyin: "jíshǐ…yě…", meaning: "Even if…still…", structure: "即使 + Condition + 也 + Result", chinese: "即使下雨，我也要去。", romanized: "jíshǐ xiàyǔ, wǒ yě yào qù", translation: "Even if it rains, I will still go." },
  { title: "无论…都… (wúlùn…dōu…)", pinyin: "wúlùn…dōu…", meaning: "No matter…all…", structure: "无论 + Condition + 都 + Result", chinese: "无论你说什么，我都相信你。", romanized: "wúlùn nǐ shuō shénme, wǒ dōu xiāngxìn nǐ", translation: "No matter what you say, I believe you." },
  { title: "除非…否则… (chúfēi…fǒuzé…)", pinyin: "chúfēi…fǒuzé…", meaning: "Unless…otherwise…", structure: "除非 + Condition + 否则 + Result", chinese: "除非下雨，否则我会去。", romanized: "chúfēi xiàyǔ, fǒuzé wǒ huì qù", translation: "Unless it rains, otherwise I will go." },
  { title: "既然…就… (jìrán…jiù…)", pinyin: "jìrán…jiù…", meaning: "Since…then…", structure: "既然 + Reason + 就 + Result", chinese: "既然来了，就坐下吧。", romanized: "jìrán lái le, jiù zuò xià ba", translation: "Since you’re here, then sit down." },
  { title: "尽管…还是… (jǐnguǎn…háishì…)", pinyin: "jǐnguǎn…háishì…", meaning: "Although…still…", structure: "尽管 + A + 还是 + B", chinese: "尽管很累，他还是继续工作。", romanized: "jǐnguǎn hěn lèi, tā háishì jìxù gōngzuò", translation: "Although he is tired, he still continues working." },
  { title: "一方面…另一方面… (yìfāngmiàn…lìngyìfāngmiàn…)", pinyin: "yìfāngmiàn…lìngyìfāngmiàn…", meaning: "On one hand…on the other hand…", structure: "一方面 + A + 另一方面 + B", chinese: "一方面学习，另一方面工作。", romanized: "yìfāngmiàn xuéxí, lìngyìfāngmiàn gōngzuò", translation: "On one hand studying, on the other hand working." },
  { title: "与其…不如… (yǔqí…bùrú…)", pinyin: "yǔqí…bùrú…", meaning: "Rather than…better to…", structure: "与其 + A + 不如 + B", chinese: "与其等，不如现在开始。", romanized: "yǔqí děng, bùrú xiànzài kāishǐ", translation: "Rather than waiting, it’s better to start now." },
  { title: "宁可…也不… (nìngkě…yě bù…)", pinyin: "nìngkě…yě bù…", meaning: "Would rather…than…", structure: "宁可 + A + 也不 + B", chinese: "我宁可不去，也不迟到。", romanized: "wǒ nìngkě bú qù, yě bù chídào", translation: "I would rather not go than be late." },
  { title: "不但…反而… (bùdàn…fǎn’ér…)", pinyin: "bùdàn…fǎn’ér…", meaning: "Not only not…but instead…", structure: "不但不 + A + 反而 + B", chinese: "他不但不帮忙，反而批评我。", romanized: "tā bùdàn bù bāngmáng, fǎn’ér pīpíng wǒ", translation: "Not only did he not help, but instead criticized me." }
],

hsk5_step2: [
  { title: "甚至 (shènzhì)", pinyin: "shènzhì", meaning: "Even — used for emphasis", structure: "...甚至...", chinese: "他忙得甚至没时间吃饭。", romanized: "tā máng de shènzhì méi shíjiān chīfàn", translation: "He is so busy that he doesn’t even have time to eat." },
  { title: "竟然 (jìngrán)", pinyin: "jìngrán", meaning: "Unexpectedly / surprisingly", structure: "竟然 + Result", chinese: "他竟然忘了。", romanized: "tā jìngrán wàng le", translation: "He unexpectedly forgot." },
  { title: "原来 (yuánlái)", pinyin: "yuánlái", meaning: "Turns out / actually", structure: "原来 + Fact", chinese: "原来你在这儿。", romanized: "yuánlái nǐ zài zhèr", translation: "So you are here." },
  { title: "似乎 / 好像 (sìhū / hǎoxiàng)", pinyin: "sìhū / hǎoxiàng", meaning: "Seems like / appears to", structure: "似乎 / 好像 + Statement", chinese: "他好像很累。", romanized: "tā hǎoxiàng hěn lèi", translation: "He seems very tired." },
  { title: "恐怕 (kǒngpà)", pinyin: "kǒngpà", meaning: "I’m afraid / probably (negative expectation)", structure: "恐怕 + Situation", chinese: "恐怕来不及了。", romanized: "kǒngpà lái bù jí le", translation: "I’m afraid it’s too late." },
  { title: "由于…因此… (yóuyú…yīncǐ…)", pinyin: "yóuyú…yīncǐ…", meaning: "Due to…therefore…", structure: "由于 + Reason + 因此 + Result", chinese: "由于下雨，因此取消了活动。", romanized: "yóuyú xiàyǔ, yīncǐ qǔxiāo le huódòng", translation: "Due to rain, the activity was canceled." },
  { title: "根据… (gēnjù…)", pinyin: "gēnjù…", meaning: "According to…", structure: "根据 + Basis", chinese: "根据规定办理。", romanized: "gēnjù guīdìng bànlǐ", translation: "Handle according to regulations." },
  { title: "对…来说 (duì…láishuō)", pinyin: "duì…láishuō", meaning: "For someone…", structure: "对 + Person + 来说", chinese: "对我来说很重要。", romanized: "duì wǒ láishuō hěn zhòngyào", translation: "For me, it’s important." },
  { title: "至于… (zhìyú…)", pinyin: "zhìyú…", meaning: "As for…", structure: "至于 + Topic", chinese: "至于结果，我们再讨论。", romanized: "zhìyú jiéguǒ, wǒmen zài tǎolùn", translation: "As for the result, we will discuss later." },
  { title: "包括…在内 (bāokuò…zài nèi)", pinyin: "bāokuò…zài nèi", meaning: "Including…", structure: "A，包括 + B + 在内", chinese: "我们三个人，包括我在内。", romanized: "wǒmen sān gè rén, bāokuò wǒ zài nèi", translation: "There are three of us, including me." }
],

hsk5_step3: [
  { title: "由…组成 (yóu…zǔchéng)", pinyin: "yóu…zǔchéng", meaning: "Be composed of…", structure: "A 由 B 组成", chinese: "团队由五个人组成。", romanized: "tuánduì yóu wǔ gè rén zǔchéng", translation: "The team consists of five people." },
  { title: "由…引起 (yóu…yǐnqǐ)", pinyin: "yóu…yǐnqǐ", meaning: "Be caused by…", structure: "A 由 B 引起", chinese: "问题由错误引起。", romanized: "wèntí yóu cuòwù yǐnqǐ", translation: "The problem is caused by mistakes." },
  { title: "为了… (wèile…)", pinyin: "wèile…", meaning: "In order to…", structure: "为了 + Goal", chinese: "为了成功，他努力学习。", romanized: "wèile chénggōng, tā nǔlì xuéxí", translation: "In order to succeed, he studies hard." },
  { title: "除了…以外… (chúle…yǐwài…)", pinyin: "chúle…yǐwài…", meaning: "Besides / except…", structure: "除了 + A + 以外 + B", chinese: "除了他，大家都来了。", romanized: "chúle tā, dàjiā dōu lái le", translation: "Except him, everyone came." },
  { title: "V + 得 / 不 + Result", pinyin: "de / bù", meaning: "Result complement — can / cannot achieve result", structure: "Verb + 得 / 不 + Result", chinese: "听得懂 / 听不懂", romanized: "tīng de dǒng / tīng bù dǒng", translation: "Can understand / cannot understand (by listening)." },
  { title: "V + 起来 (qǐlái)", pinyin: "qǐlái", meaning: "Indicates perception or beginning", structure: "Verb + 起来", chinese: "看起来很好。", romanized: "kàn qǐlái hěn hǎo", translation: "It looks very good." },
  { title: "V + 下来 (xiàlái)", pinyin: "xiàlái", meaning: "Indicates continuation or change", structure: "Verb + 下来", chinese: "他慢慢冷静下来。", romanized: "tā mànmàn lěngjìng xiàlái", translation: "He gradually calmed down." },
  { title: "V + 出来 (chūlái)", pinyin: "chūlái", meaning: "Indicates result or discovery", structure: "Verb + 出来", chinese: "我看出来了。", romanized: "wǒ kàn chūlái le", translation: "I figured it out." },
  { title: "V + 上 (shàng)", pinyin: "shàng", meaning: "Indicates attachment or result", structure: "Verb + 上", chinese: "写上名字。", romanized: "xiě shàng míngzi", translation: "Write your name on it." },
  { title: "V + 下 (xià)", pinyin: "xià", meaning: "Indicates downward or completion", structure: "Verb + 下", chinese: "停下来。", romanized: "tíng xiàlái", translation: "Stop." }
],

hsk5_step4: [
  { title: "把 (bǎ)", pinyin: "bǎ", meaning: "Emphasizes result of action", structure: "把 + Object + Verb", chinese: "把门关上。", romanized: "bǎ mén guān shàng", translation: "Close the door." },
  { title: "被 (bèi)", pinyin: "bèi", meaning: "Passive voice", structure: "被 + Subject + Verb", chinese: "被老师批评了。", romanized: "bèi lǎoshī pīpíng le", translation: "Was criticized by the teacher." },
  { title: "是…的 (shì…de)", pinyin: "shì…de", meaning: "Emphasis structure", structure: "是 + Info + 的", chinese: "我是昨天来的。", romanized: "wǒ shì zuótiān lái de", translation: "I came yesterday." },
  { title: "连…都… (lián…dōu…)", pinyin: "lián…dōu…", meaning: "Even…", structure: "连 + A + 都 + B", chinese: "连他都不知道。", romanized: "lián tā dōu bù zhīdào", translation: "Even he doesn’t know." },
  { title: "一…就… (yī…jiù…)", pinyin: "yī…jiù…", meaning: "As soon as…then…", structure: "一 + A + 就 + B", chinese: "一到就开始。", romanized: "yī dào jiù kāishǐ", translation: "Start immediately upon arrival." },
  { title: "越…越… (yuè…yuè…)", pinyin: "yuè…yuè…", meaning: "The more…the more…", structure: "越 + Verb + 越 + Adj", chinese: "越学越好。", romanized: "yuè xué yuè hǎo", translation: "The more you study, the better you get." },
  { title: "越来越… (yuèláiyuè…)", pinyin: "yuèláiyuè…", meaning: "More and more…", structure: "越来越 + Adj", chinese: "天气越来越冷。", romanized: "tiānqì yuèláiyuè lěng", translation: "The weather is getting colder." },
  { title: "根本 (gēnběn)", pinyin: "gēnběn", meaning: "At all (strong negation)", structure: "根本 + 不 / 没", chinese: "我根本不认识他。", romanized: "wǒ gēnběn bù rènshi tā", translation: "I don’t know him at all." },
  { title: "简直 (jiǎnzhí)", pinyin: "jiǎnzhí", meaning: "Simply / absolutely (emphasis)", structure: "简直 + Adj", chinese: "这简直太难了。", romanized: "zhè jiǎnzhí tài nán le", translation: "This is simply too difficult." },
  { title: "大概 (dàgài)", pinyin: "dàgài", meaning: "Probably / roughly", structure: "大概 + Statement", chinese: "他大概会来。", romanized: "tā dàgài huì lái", translation: "He will probably come." }
]

};

// =======================
// 🧠 QUIZ STATE
// =======================
let currentQuiz = [];
let quizIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = []; 
let timer;
let timeLeft = 0;

// =======================
// 🚀 START QUIZ
// =======================
function startQuiz(level) {
  if (!quizData[level] || quizData[level].length === 0) {
    alert("Quiz not available!");
    return;
  }

  currentQuiz = shuffleArray([...quizData[level]]);
  currentQuiz.forEach(q => {
    q.options = shuffleArray([...q.options]);
  });

  quizIndex = 0;
  score = 0;
  userAnswers = new Array(currentQuiz.length).fill(null);

  // 🔥 SET TIMER
  timeLeft = getTimeByLevel(level);
  startTimer();

  document.getElementById("quizPage").style.display = "none";
  document.getElementById("quizQuestionPage").style.display = "block";

  loadQuestion();
}
// =======================
// 📄 LOAD QUESTION
// =======================
function loadQuestion() {
  let q = currentQuiz[quizIndex];

  document.getElementById("questionText").innerText =
    `Question ${quizIndex + 1} / ${currentQuiz.length}\n` + q.question;

  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `<button onclick="selectAnswer('${opt}', this)">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;

  // 🔥 restore jawaban lama
  if (userAnswers[quizIndex]) {
    let buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => {
      if (btn.innerText === userAnswers[quizIndex]) {
        btn.style.background = "lightpink";
      }
    });
  }

  updateQuizButtons();
  updateProgress();
}

function updateProgress() {
  let total = currentQuiz.length;

  // hitung berapa yang sudah dijawab
  let answered = userAnswers.filter(ans => ans !== null).length;

  document.getElementById("progressText").innerText =
    `Progress: ${answered} / ${total}`;

  let percent = (answered / total) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// =======================
// ✅ SELECT ANSWER
// =======================
function selectAnswer(selected, element) {
  userAnswers[quizIndex] = selected; // 🔥 simpan jawaban

  let buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.style.background = "#ddd");

  element.style.background = "lightpink";
}
// =======================
// ➡️ NEXT
// =======================
function nextQuestion() {
  if (userAnswers[quizIndex] === null) {
    alert("Please select an answer first!");
    return;
  }

  quizIndex++;

  if (quizIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    confirmSubmit();
  }
}

// =======================
// ⬅️ BACK
// =======================
function prevQuestion() {
  if (quizIndex > 0) {
    quizIndex--;
    loadQuestion();
  }
}

// =======================
// 🔘 BUTTON LOGIC
// =======================
function updateQuizButtons() {
  let total = currentQuiz.length;
  let container = document.getElementById("quizButtons");

  if (quizIndex === 0) {
    container.innerHTML = `
      <button onclick="nextQuestion()">Next</button>
    `;
  }

  else if (quizIndex === total - 1) {
    container.innerHTML = `
      <button onclick="prevQuestion()">Back</button>
      <button onclick="confirmSubmit()">Done</button>
    `;
  }

  else {
    container.innerHTML = `
      <button onclick="prevQuestion()">Back</button>
      <button onclick="nextQuestion()">Next</button>
    `;
  }
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
// =======================
// 🟨 CONFIRM PAGE
// =======================
function confirmSubmit() {
  if (userAnswers.includes(null)) {
    alert("Please answer all questions first!");
    return;
  }

  document.getElementById("quizQuestionPage").style.display = "none";
  document.getElementById("confirmPage").style.display = "block";
}

function backToQuiz() {
  document.getElementById("confirmPage").style.display = "none";
  document.getElementById("quizQuestionPage").style.display = "block";
}

// =======================
// 🏁 SUBMIT
// =======================
function submitQuiz() {
  clearInterval(timer); // stop timer

  score = 0;
  let reviewHTML = "";

  for (let i = 0; i < currentQuiz.length; i++) {
    let q = currentQuiz[i];
    let user = userAnswers[i];
    let correct = q.answer;

    // hitung score
    if (user === correct) {
      score++;
    }

    reviewHTML += `
      <div style="margin-bottom:20px;">
        <b>${i + 1}. ${q.question}</b><br>
    `;

    // kalau tidak dijawab
    if (user === null) {
      reviewHTML += `<div style="color:gray;">No answer ❗</div>`;
    }

    q.options.forEach(opt => {
      let color = "";
      let symbol = "";

      if (opt === user && user === correct) {
        color = "green";
        symbol = "✔️";
      }

      if (opt === user && user !== correct) {
        color = "red";
        symbol = "❌";
      }

      reviewHTML += `
        <div style="color:${color}; margin-left:15px;">
          ${opt} ${symbol}
        </div>
      `;
    });

    reviewHTML += `</div>`;
  }

  // tampilkan result
  document.getElementById("confirmPage").style.display = "none";
  document.getElementById("quizQuestionPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";

  let percent = Math.round((score / currentQuiz.length) * 100);

  // ❗ tampilkan angka aja (tanpa %)
  document.getElementById("scoreText").innerText = percent;

  // 🎨 warna score
  if (percent >= 70) {
    document.getElementById("scoreText").style.color = "green";
  } else {
    document.getElementById("scoreText").style.color = "red";
  }

  // 🎉 CONFETTI
  if (percent >= 70) {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
      });
    }, 200);
  }

  // 😢 emoji
  let oldEmoji = document.getElementById("resultEmoji");
  if (oldEmoji) oldEmoji.remove();

  let emoji = document.createElement("h2");
  emoji.id = "resultEmoji";

  if (percent >= 70) {
    emoji.innerText = "🎉 Great Job!";
    emoji.style.color = "green";
  } else {
    emoji.innerText = "😢 Try Again!";
    emoji.style.color = "red";
  }
  document.getElementById("resultPage").appendChild(emoji);

 // 💬 pesan motivasi
  let oldMsg = document.getElementById("retryMsg");
  if (oldMsg) oldMsg.remove();

 // 🔓 tombol kedua
  let secondBtn = document.getElementById("resultSecondBtn");
  secondBtn.innerText = "Back to Home";
  secondBtn.style.background = "";
  secondBtn.style.color = "";
  secondBtn.onclick = goHome;

  if (flashcardOrigin === "step") {
    const passScore = currentStep === 4 ? 80 : 70;
    const kkm = currentStep === 4 ? 80 : 70;

    if (percent >= passScore) {
      // 🔓 langsung unlock sekarang saat result muncul!
      const storageKey = 'ezMandarin_' + currentHskLevel + '_steps';
      let stepStatus = JSON.parse(localStorage.getItem(storageKey));

      if (currentStep === 4) {
        if (stepStatus) {
          stepStatus['completed'] = true;
          localStorage.setItem(storageKey, JSON.stringify(stepStatus));
        }
        secondBtn.innerText = "🎓 Lihat Hasilku!";
        secondBtn.style.background = "linear-gradient(135deg, #f39c12, #e8c96a)";
        secondBtn.style.color = "#4a2c00";
        secondBtn.onclick = function() { openGraduation(); };
      } else {
        const nextStep = 'step' + (currentStep + 1);
        if (stepStatus && stepStatus[nextStep] !== undefined) {
          stepStatus[nextStep] = true;
          localStorage.setItem(storageKey, JSON.stringify(stepStatus));
        }
        secondBtn.innerText = "Unlock Step " + (currentStep + 1) + " 🔓";
        secondBtn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
        secondBtn.style.color = "white";
        secondBtn.onclick = function() { unlockNextStep(); };
      }
    } else {
      secondBtn.innerText = "Coba Lagi";
      secondBtn.style.background = "";
      secondBtn.onclick = function() {
        document.getElementById("resultPage").style.display = "none";
        document.getElementById("stepChoicePage").style.display = "block";
      };

      let msg = document.createElement("p");
      msg.id = "retryMsg";
      msg.innerText = `Don't give up! You need a minimum score of ${kkm} to pass this step 🔥`;
      msg.style.cssText = "font-size:13px; color:#888; margin-top:8px; font-style:italic;";
      document.getElementById("resultPage").appendChild(msg);
    }
  }

  document.getElementById("reviewContainer").innerHTML = reviewHTML;
}

        // 🔓 unlock step atau tombol coba lagi
let secondBtn = document.getElementById("resultSecondBtn");
secondBtn.innerText = "Back to Home";
secondBtn.style.background = "";
secondBtn.onclick = goHome;

if (flashcardOrigin === "step") {
  if (percent >= 70) {
    // lulus → unlock step berikutnya
    secondBtn.innerText = "Unlock Step " + (currentStep + 1) + " 🔓";
    secondBtn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
    secondBtn.style.color = "white";
    secondBtn.onclick = function() {
      unlockNextStep();
    };
} else {
    // gagal → coba lagi
    secondBtn.innerText = "Coba Lagi";
    secondBtn.style.background = "";
    secondBtn.onclick = function() {
      document.getElementById("resultPage").style.display = "none";
      document.getElementById("stepChoicePage").style.display = "block";
    };

    let msg = document.createElement("p");
    msg.id = "retryMsg";
    msg.innerText = "Don't give up! Review the vocabulary and try again until you reach a score of 70 🔥";
    msg.style.cssText = "font-size:13px; color:#888; margin-top:8px; font-style:italic;";
    document.getElementById("resultPage").appendChild(msg);
  }

  document.getElementById("reviewContainer").innerHTML = reviewHTML;
}

function showReview() {
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("reviewPage").style.display = "block";

  let backBtn = document.querySelector("#reviewPage button");
  if (backBtn && flashcardOrigin === "step") {
    backBtn.innerText = "Back";
    backBtn.onclick = function() {
      document.getElementById("reviewPage").style.display = "none";
      flashcardOrigin = "home";
      loadHskMap(currentHskLevel);
      document.getElementById("hskMapPage").style.display = "block";
    };
  }
}
function getTimeByLevel(level) {
  switch(level) {
    case "hsk1": return 2 * 60;
    case "hsk2": return 5 * 60;
    case "hsk3": return 6 * 60;
    case "hsk4": return 6 * 60;
    case "hsk5": return 8 * 60;
    default: return 5 * 60;
  }
}
function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timerText").innerText =
      `Time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    timeLeft--;

    // ⛔ waktu habis
    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Time is up!");
      submitQuiz(); // auto submit
    }
  }, 1000);
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function buttonPop(el) {
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
}

function speakHanzi() {
  const hanzi = document.getElementById('hanzi').textContent;
  const utterance = new SpeechSynthesisUtterance(hanzi);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.5;
  speechSynthesis.speak(utterance);
}

// HSK Map Functions
let currentHskLevel = 'hsk1';

function openHskMap(level) {
  currentHskLevel = level;
  
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('hskMapPage').style.display = 'block';
  
  loadHskMap(level); // pindah ke bawah, setelah page visible
}

const stepEmojis = {
  step1: "🌳",
  step2: "🏖️",
  step3: "🏠",
  step4: "🏰"
};

function loadHskMap(level) {
  const levelNumber = level.replace('hsk', '');
  document.getElementById('hskMapTitle').innerText = 'HSK ' + levelNumber;
  
  const storageKey = 'ezMandarin_' + level + '_steps';
  let stepStatus = JSON.parse(localStorage.getItem(storageKey));
  
  if (!stepStatus) {
    stepStatus = { step1: true, step2: false, step3: false, step4: false };
    localStorage.setItem(storageKey, JSON.stringify(stepStatus));
  }
  
  for (let i = 1; i <= 4; i++) {
    const stepCircle = document.querySelector('.step-' + i);
    const stepKey = 'step' + i;
    const emojiEl = stepCircle.querySelector('.step-emoji');
    
    if (stepStatus[stepKey]) {
      stepCircle.classList.remove('locked');
      stepCircle.classList.add('unlocked');
      stepCircle.style.opacity = '1';
      stepCircle.style.cursor = 'pointer';
      emojiEl.innerText = stepEmojis[stepKey];
      stepCircle.onclick = function() { openStepWelcome(i); };
    } else {
      stepCircle.classList.remove('unlocked');
      stepCircle.classList.add('locked');
      stepCircle.style.opacity = '0.5';
      stepCircle.style.cursor = 'not-allowed';
      emojiEl.innerText = '🔒';
      stepCircle.onclick = null;
    }
  }

  // tampilkan badge kalau step 4 sudah selesai
  const badgeSection = document.getElementById('hskBadgeSection');
  const badgeLabel = document.getElementById('hskBadgeLabel');
  if (stepStatus && (stepStatus.step4 === true && stepStatus.completed === true)) {
  badgeSection.style.display = 'block';
  badgeLabel.innerText = 'HSK ' + levelNumber;

  const circle = badgeSection.querySelector('.badge-hsk-dynamic');
  const starsEl = document.getElementById('hskBadgeStars');
  const starsMap = { '1':'★', '2':'★★', '3':'★★★', '4':'★★★★', '5':'★★★★★' };
  const colorMap = { '1':'badge-hsk1', '2':'badge-hsk2', '3':'badge-hsk3', '4':'badge-hsk4', '5':'badge-hsk5' };

  const lvl = String(levelNumber);
  circle.className = `badge-circle badge-hsk-dynamic ${colorMap[lvl]}`;
  starsEl.innerText = starsMap[lvl];
} else {
  badgeSection.style.display = 'none';
}
  
  for (let i = 1; i <= 4; i++) {
    const stepCircle = document.querySelector('.step-' + i);
    const stepKey = 'step' + i;
    const emojiEl = stepCircle.querySelector('.step-emoji');
    
    if (stepStatus[stepKey]) {
      // unlocked
      stepCircle.classList.remove('locked');
      stepCircle.classList.add('unlocked');
      stepCircle.style.opacity = '1';
      stepCircle.style.cursor = 'pointer';
      emojiEl.innerText = stepEmojis[stepKey];
      stepCircle.onclick = function() { openStepWelcome(i); };
    } else {
      // locked
      stepCircle.classList.remove('unlocked');
      stepCircle.classList.add('locked');
      stepCircle.style.opacity = '0.5';
      stepCircle.style.cursor = 'not-allowed';
      emojiEl.innerText = '🔒';
      stepCircle.onclick = null;
    }
  }
}

function startHskStep(step) {
  const storageKey = 'ezMandarin_' + currentHskLevel + '_steps';
  let stepStatus = JSON.parse(localStorage.getItem(storageKey));
  
  // Check if step is unlocked
  if (!stepStatus['step' + step]) {
    return; // Don't do anything if locked
  }
  
  // Start flashcard for this level
  startFlashcard(currentHskLevel);
}

function openStepWelcome(stepNumber) {
  currentStep = stepNumber;
  
  const levelNumber = currentHskLevel.replace('hsk', '');
  document.getElementById('stepWelcomeTitle').innerText = 'HSK ' + levelNumber;
  document.querySelector('.welcome-text').innerText = 'Welcome to Step ' + stepNumber + '!';
  
  // grammar selalu tampil di semua step
  const grammarBtn = document.getElementById('grammarBtn');
  grammarBtn.style.display = 'block';
  
  document.getElementById('hskMapPage').style.display = 'none';
  document.getElementById('stepWelcomePage').style.display = 'block';
}

function backToHskMap() {
  document.getElementById('stepWelcomePage').style.display = 'none';
  document.getElementById('stepChoicePage').style.display = 'none';
  document.getElementById('hskMapPage').style.display = 'block';
}

function goToStepChoice() {
  console.log("currentStep:", currentStep);
  console.log("grammarBtn display:", document.getElementById('grammarBtn').style.display);
    const levelNumber = currentHskLevel.replace('hsk', '');
  document.getElementById('stepChoiceTitle').innerText = 'HSK ' + levelNumber;
  document.getElementById('stepWelcomePage').style.display = 'none';
  document.getElementById('stepChoicePage').style.display = 'block';
}

function backToStepWelcome() {
  document.getElementById('stepChoicePage').style.display = 'none';
  document.getElementById('hskMapPage').style.display = 'block';
}
function goToVocabulary() {
  flashcardOrigin = "step";
  document.getElementById('stepChoicePage').style.display = 'none';
  
  // pakai data step khusus kalau ada, fallback ke level
  const stepKey = currentHskLevel + '_step' + currentStep;
  if (flashcards[stepKey]) {
    startFlashcard(stepKey);
  } else {
    startFlashcard(currentHskLevel);
  }
}

function goToExam() {
  const kkm = currentStep === 4 ? 80 : 70;
  document.querySelector('#examReadyPopup p').innerText = 
    `Skor minimal ${kkm} untuk unlock step berikutnya!`;
  
  let popup = document.getElementById("examReadyPopup");
  popup.style.display = "flex";
}
function closeExamPopup() {
  document.getElementById("examReadyPopup").style.display = "none";
  document.getElementById("stepChoicePage").style.display = "block";
}

function startExamFromPopup() {
  flashcardOrigin = "step";
  document.getElementById("examReadyPopup").style.display = "none";
  document.getElementById("stepChoicePage").style.display = "none";

  // countdown lalu startStepExam
  const overlay = document.getElementById("countdownOverlay");
  const numberEl = document.getElementById("countdownNumber");
  overlay.style.display = "flex";
  numberEl.textContent = "3";

  let count = 3;
  const intervalId = setInterval(() => {
    count--;
    if (count > 0) {
      numberEl.textContent = String(count);
    } else {
      clearInterval(intervalId);
      overlay.style.display = "none";
      startStepExam(currentHskLevel, currentStep);
    }
  }, 1000);
}
function startStepExam(level, step) {
  const key = level + '_step' + step;
  
  if (!stepQuizData[key] || stepQuizData[key].length === 0) {
    alert("Quiz not available!");
    return;
  }

  currentQuiz = shuffleArray([...stepQuizData[key]]);
  currentQuiz.forEach(q => {
    q.options = shuffleArray([...q.options]);
  });

  quizIndex = 0;
  score = 0;
  userAnswers = new Array(currentQuiz.length).fill(null);

  // timer sama seperti quiz biasa
  timeLeft = getTimeByLevel(level);
  startTimer();

  document.getElementById("stepChoicePage").style.display = "none";
  document.getElementById("quizQuestionPage").style.display = "block";

  loadQuestion();
}

function unlockNextStep() {
  document.getElementById("resultPage").style.display = "none";
  flashcardOrigin = "home";
  loadHskMap(currentHskLevel);
  document.getElementById("hskMapPage").style.display = "block";
}

function goToGrammar() {
  grammarIndex = 0;
  currentGrammarLevel = currentHskLevel + '_step' + currentStep;
  document.getElementById('stepChoicePage').style.display = 'none';
  document.getElementById('grammarPage').style.display = 'block';
  loadGrammarCard();
}


let grammarIndex = 0;
let currentGrammarLevel = 'hsk1';


function loadGrammarCard() {
  const data = grammarData[currentGrammarLevel];
  const g = data[grammarIndex];

  document.getElementById('grammarNumber').innerText = (grammarIndex + 1) + ' / ' + data.length;
  document.getElementById('grammarTitle').innerText = g.title;
  document.getElementById('grammarPinyin').innerText = g.pinyin;
  document.getElementById('grammarMeaning').innerText = g.meaning;
  document.getElementById('grammarStructure').innerText = '📐 Structure: ' + g.structure;
  document.getElementById('grammarChinese').innerText = g.chinese;
  document.getElementById('grammarRomanized').innerText = g.romanized;
  document.getElementById('grammarTranslation').innerText = '→ ' + g.translation;

  // update buttons
  const btns = document.getElementById('grammarButtons');
  if (grammarIndex === 0) {
    btns.innerHTML = `<button onclick="nextGrammar()">Next →</button>`;
  } else if (grammarIndex === data.length - 1) {
    btns.innerHTML = `<button onclick="prevGrammar()">← Back</button><button onclick="closeGrammar()">Selesai ✓</button>`;
  } else {
    btns.innerHTML = `<button onclick="prevGrammar()">← Back</button><button onclick="nextGrammar()">Next →</button>`;
  }
}

function nextGrammar() {
  if (grammarIndex < grammarData[currentGrammarLevel].length - 1) {
    grammarIndex++;
    loadGrammarCard();
  }
}

function prevGrammar() {
  if (grammarIndex > 0) {
    grammarIndex--;
    loadGrammarCard();
  }
}

function closeGrammar() {
  document.getElementById('grammarPage').style.display = 'none';
  document.getElementById('stepChoicePage').style.display = 'block';
}

function openGraduation() {
  const levelNumber = currentHskLevel.replace('hsk', '');
  document.getElementById('gradTitle').innerText = 'Selamat! 🎉';
  document.getElementById('gradLevel').innerText = 'Kamu telah lulus HSK ' + levelNumber + '!';
  document.getElementById('badgeLevel').innerText = 'HSK ' + levelNumber;
  
  const starsMap = { '1':'★', '2':'★★', '3':'★★★', '4':'★★★★', '5':'★★★★★' };
const colorMap = { '1':'badge-hsk1', '2':'badge-hsk2', '3':'badge-hsk3', '4':'badge-hsk4', '5':'badge-hsk5' };
const lvl = String(levelNumber);
const gradCircle = document.getElementById('gradBadgeCircle');
gradCircle.className = `badge-circle ${colorMap[lvl]}`;
document.getElementById('gradBadgeStars').innerText = starsMap[lvl];

  // ← tambahkan ini
  const nextLevel = parseInt(levelNumber) + 1;
  if (nextLevel <= 5) {
    document.getElementById('gradDesc').innerText = 
      `You have mastered all the vocabulary, grammar, and HSK ${levelNumber} materials. Moving on to HSK ${nextLevel}? 💪`;
  } else {
    document.getElementById('gradDesc').innerText = 
      `You have mastered all the vocabulary, grammar, and HSK ${levelNumber} materials. You are a Mandarin master! 🏆`;
  }

  document.getElementById('resultPage').style.display = 'none';
  loadHskMap(currentHskLevel);
  document.getElementById('hskMapPage').style.display = 'block';
  document.getElementById('graduationPage').style.display = 'block';
  
  // confetti heboh!
  setTimeout(() => {
    confetti({ particleCount: 300, spread: 120, origin: { y: 0.5 } });
    setTimeout(() => {
      confetti({ particleCount: 200, spread: 100, origin: { x: 0.1, y: 0.6 } });
      confetti({ particleCount: 200, spread: 100, origin: { x: 0.9, y: 0.6 } });
    }, 600);
    setTimeout(() => {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.3 } });
    }, 1200);
  }, 300);
}

function closeGraduation() {
  document.getElementById('graduationPage').style.display = 'none';
  document.getElementById('stepChoicePage').style.display = 'none';
  document.getElementById('stepWelcomePage').style.display = 'none';
  flashcardOrigin = 'home';
  loadHskMap(currentHskLevel);
  document.getElementById('hskMapPage').style.display = 'block';
}

function loadBadges() {
  const badgeContainer = document.getElementById('badgeContainer');
  badgeContainer.innerHTML = '';

  const levels = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'];
  const levelConfig = {
    hsk1: { name: 'HSK 1', sublabel: 'Beginner',   stars: '★',     colorClass: 'badge-hsk1' },
    hsk2: { name: 'HSK 2', sublabel: 'Elementary',     stars: '★★',    colorClass: 'badge-hsk2' },
    hsk3: { name: 'HSK 3', sublabel: 'Intermediate',  stars: '★★★',   colorClass: 'badge-hsk3' },
    hsk4: { name: 'HSK 4', sublabel: 'Advanced',  stars: '★★★★',  colorClass: 'badge-hsk4' },
    hsk5: { name: 'HSK 5', sublabel: 'Master',    stars: '★★★★★', colorClass: 'badge-hsk5' },
  };

  levels.forEach(level => {
    const storageKey = 'ezMandarin_' + level + '_steps';
    const stepStatus = JSON.parse(localStorage.getItem(storageKey));
    const isUnlocked = stepStatus && stepStatus.completed === true;
    const cfg = levelConfig[level];

    const badge = document.createElement('div');
    badge.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;

    if (isUnlocked) {
  const isMaster = level === 'hsk5';
  badge.innerHTML = `
    <div class="badge-wrapper">
      ${isMaster ? '<span class="badge-crown">👑</span>' : ''}
      <div class="badge-circle ${cfg.colorClass}">
        <span class="badge-icon">🎓</span>
        <span class="badge-text">HSK</span>
        <span class="badge-stars">${cfg.stars}</span>
      </div>
    </div>
    <span class="badge-name">${cfg.name}</span>
    <span class="badge-sublabel">${cfg.sublabel}</span>
  `;
}
    
  else {
  badge.innerHTML = `
    <div class="badge-wrapper">
      <div class="badge-circle">
        <span class="badge-icon" style="opacity:0.3;">🎓</span>
        <span class="badge-lock-icon">🔒</span>
      </div>
    </div>
    <span class="badge-name">${cfg.name}</span>
    <span class="badge-sublabel">Terkunci</span>
  `;
}
    badgeContainer.appendChild(badge);
  });
}

function showHomePage() {
  document.getElementById('homePage').style.display = 'block';
  showHomeDecorations();
  loadBadges();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ===== FIX: 2x scroll bug on mobile =====
// Elemen fixed (panda, lampion, dark overlay, switch) nyerap touch pertama.
// Solusi: semua elemen fixed yang pointer-events:none tetap kita pastikan
// tidak intercept scroll gesture dengan forcibly setting touch-action di semua
// fixed elements, lalu kita pakai satu passive touchmove listener di document
// yang langsung scroll body kalau target-nya bukan scrollable element.

(function fixMobileScroll() {
  if (!('ontouchstart' in window)) return; // desktop, skip

  let startY = 0;

  document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchmove', function(e) {
    // Kalau target atau ancestor-nya adalah scrollable container selain body, biarkan
    let el = e.target;
    while (el && el !== document.body) {
      const style = window.getComputedStyle(el);
      const overflow = style.overflowY;
      const isScrollable = (overflow === 'auto' || overflow === 'scroll') && el.scrollHeight > el.clientHeight;
      if (isScrollable) return; // biarkan element itu yang scroll
      el = el.parentElement;
    }

    // Tidak ada scrollable container — paksa scroll body
    const deltaY = startY - e.touches[0].clientY;
    window.scrollBy({ top: deltaY, behavior: 'instant' });
    startY = e.touches[0].clientY;
  }, { passive: true });
})();
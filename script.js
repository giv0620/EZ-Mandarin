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
  ]
};


let currentCategory = "fruits";
let currentIndex = 0;

function loadCard() {
  let card = flashcards[currentCategory][currentIndex];

  document.getElementById("hanzi").innerText = card.hanzi;
  document.getElementById("pinyin").innerText = card.pinyin;
  document.getElementById("arti").innerText = card.arti;
  document.getElementById("cardImage").src = card.image || "";
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

function startFlashcard(category) {
  currentCategory = category;
  currentIndex = 0;
  loadCard();

  document.getElementById("homePage").style.display = "none";
  document.getElementById("flashcardPage").style.display = "block";
}

function startLearning() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}

function goHome() {
  // tampilkan home
  document.getElementById("homePage").style.display = "block";

  // sembunyikan semua halaman lain
  document.getElementById("flashcardPage").style.display = "none";
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("quizQuestionPage").style.display = "none";
  document.getElementById("confirmPage").style.display = "none";
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("reviewPage").style.display = "none";
  
  clearInterval(timer);
}

function goToQuiz() {
  document.getElementById("homePage").style.display = "none";
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
        btn.style.background = "green";
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

  element.style.background = "green";
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

      if (opt === correct) {
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
  }, 200); // delay biar muncul setelah page tampil
}

// 😢 emoji kalau jelek
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

  document.getElementById("reviewContainer").innerHTML = reviewHTML;
}

function showReview() {
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("reviewPage").style.display = "block";
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

function speakHanzi() {
  const hanzi = document.getElementById('hanzi').textContent;
  const utterance = new SpeechSynthesisUtterance(hanzi);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.5;
  speechSynthesis.speak(utterance);
}
let select_word='Word';
let Cimg;
let phonetic;
let defs;

function preload() {
  Cimg = loadImage('assets/Comp1.svg');
}

function setup() {
  createCanvas(600, 1200); 
  
  // #FFFAFA
  
    refresh_canvas();
  load_words();
}

function draw()
{
  button.mousePressed(load_words);

}

function load_words()
{select_word=winput.value();
 let Xurl = "https://api.dictionaryapi.dev/api/v2/entries/en/word";
  
newurl = Xurl.replace('word', select_word);
  print(newurl);
  

  
  json = loadJSON(newurl,found_word);
}

function found_word()
{
  phonetic=json[0].phonetic;
  defs=json[0].meanings[0].definitions[0].definition;
  print(phonetic);
    refresh_canvas();
}

function refresh_canvas()
{ 
clear(); background(200,200,200);
  image(Cimg, width/2.7, height/14);
  
  textSize(10);
  text("Please Allow Microphone Permission When Asked", 10, 10);

   textSize(18);
 fill('#7c4dff');

 
 textStyle(ITALIC);
  text("What word would you like to learn today ?", width/4.5, height/4.3);

  winput = createInput(select_word);
  winput.position(width/3, height/4);

  button = createButton('GO');
  button.position(winput.x + winput.width, winput.y);
  
  textStyle(NORMAL);
  text("Target:", 20,  winput.y+90);
  textStyle(BOLD);
  text(select_word, 80,  winput.y+90);
  
  textStyle(NORMAL);
  text("Phonetic:", 20,  winput.y+140);
  textStyle(BOLD);
  text(phonetic, 100,  winput.y+140);

  textStyle(NORMAL);
  text("Definition:", 20,  winput.y+170);
  textStyle(BOLD);textSize(12);
  text(defs, 100,  winput.y+170);
  //texthover.mouseOver();

  textSize(18);
  //Phonetic Sounds
  textStyle(ITALIC);
  text("Phonetic Sounds Table", 20,  winput.y+200);
  tbgap=winput.y+230;
  text("/i/ : E as in 'SEA'", 20,tbgap);tbgap+=30;
  text("/ɪ/ : e as in 'Sit'", 20,  tbgap);tbgap+=30;
  text("/ɛ/ : IE as in 'Berry'", 20,  tbgap);tbgap+=30;
  text("/æ/ : Ae as in 'Laugh'", 20,  tbgap);tbgap+=30;
  text("/ə/ : a as in 'About'", 20, tbgap);tbgap+=30;
  text("/ʌ/ : Uh as in 'Utter'", 20,  tbgap);tbgap+=30;
  text("/u/ : oo as in 'Blue'", 20,  tbgap);tbgap+=30;
  text("/ʊ/ : o as in 'Took'", 20, tbgap);tbgap+=30;
  text("/ɔ/ : Awww as in 'saw'", 20,  tbgap);tbgap+=30;
  text("/ɑ/ : Aw as in 'clock'", 20, tbgap);tbgap+=30;
  text("/oʊ/: 'O' as in 'Open'", 20,  tbgap);tbgap+=30;
  text("/eɪ/: 'A' as in 'Asian'", 20, tbgap);tbgap+=30;
  text("/aʊ/: 'Au' as in 'out'", 20,  tbgap);tbgap+=30;
  text("/aɪ/: 'I' as in 'eye'", 20, tbgap);tbgap+=30;
  text("/ɔɪ/: 'oy' as in 'joy'", 20,tbgap);tbgap+=30;
  text("/ɪəʳ/: 'ear' as in 'hear'", 20, tbgap);tbgap+=30;
  text("/eəʳ/: 'air' as in 'chair'", 20,tbgap);tbgap+=30;
  text("/ʊəʳ/: 'oor' as in 'Tour'", 20, tbgap);tbgap+=30;
  text("/ɑʳ/: 'R' as in 'are'", 20, tbgap);tbgap+=30;
  text("/p/: 'p' as in 'play'", 20, tbgap);tbgap+=30;
  text("/b/: 'b' as in 'baby'", 20, tbgap);tbgap+=30;
  //--
  tbgap=winput.y+230;
  //--
  tbwidth=350;
  
  text("/t/: 't' as in 'Tidy'", tbwidth, tbgap);tbgap+=30;
  text("/d/: 'd' as in 'Dust'", tbwidth, tbgap);tbgap+=30;
  text("/ɾ/: 'tt' as in 'leTTer'", tbwidth, tbgap);tbgap+=30;
  text("/k/: 'k' as in 'Cow'", tbwidth, tbgap);tbgap+=30;
  text("/f/: 'f' as in 'Fan'", tbwidth, tbgap);tbgap+=30;
  text("/v/: 'v' as in 'haVe'", tbwidth, tbgap);tbgap+=30;
  text("/θ/: 'th' as in 'THing'", tbwidth, tbgap);tbgap+=30;
  text("/ð/: 'the' as in 'THere'", tbwidth, tbgap);tbgap+=30;
  text("/s/: 's' as in 'Sun'", tbwidth, tbgap);tbgap+=30;
  text("/z/: 'z' as in 'Zebra'", tbwidth, tbgap);tbgap+=30;
  text("/ʃ/: 'Sh' as in 'fiSH'", tbwidth, tbgap);tbgap+=30;
  text("/ʒ/: 'zh' as in 'occasion'", tbwidth, tbgap);tbgap+=30;
  text("/tʃ/: 'tch' as in 'CHores'", tbwidth, tbgap);tbgap+=30;
  text("/dʒ/: 'j' as in 'judge'/jaj", tbwidth, tbgap);tbgap+=30;
  text("/m/: 'm' as in 'Mother'", tbwidth, tbgap);tbgap+=30;
  text("/n/: 'n' as in 'know'/No", tbwidth, tbgap);tbgap+=30;
  text("/h/: 'h' as in 'who'/hoo", tbwidth, tbgap);tbgap+=30;
  text("/l/: 'l' as in 'loud'", tbwidth, tbgap);tbgap+=30;
  text("/r/: 'r' as in 'write'/rite", tbwidth, tbgap);tbgap+=30;
  text("/j/: 'ya' as in 'you'", tbwidth, tbgap);tbgap+=30;
  text("/w/: 'va'/'vi' as in 'quick'/kvik", tbwidth, tbgap);tbgap+=30;
}

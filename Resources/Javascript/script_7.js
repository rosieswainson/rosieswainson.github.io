// ================ WORKING ZONE ================

const love = [
    "I am surrounded by love and attract healthy, loving relationships.",
    "I am worthy of love and give and receive love freely.",
    "I am open to love and trust in the universe to bring the right people into my life.",
    "I am grateful for the loving relationships in my life.",
    "I am responsible for my own health and wellness and make choices that support it.",
    "I take care of my mind, body, and spirit and feel energized and vibrant.",
    "I am surrounded by positive energy and my relationships are filled with love and harmony."
    ]
  
  function loveDaily() {
      document.getElementById("love-aff-text").innerHTML = love[Math.floor(Math.random() * love.length)];
  }
  
  document.getElementById("love-button").addEventListener("click", loveDaily);
  
  const success = [
      "I am confident in my abilities and trust in my decisions.",
      "I am successful in all areas of my life.",
      "I am a natural leader and inspire others to reach their full potential.",
      "I have a growth mindset and am constantly working towards self-improvement.",
      "I am highly productive and efficiently manage my time to achieve my goals.",
      "I am capable of achieving anything I set my mind to.",
      "I radiate positivity and attract success in all aspects of my life."
      ]
  
  function succDaily() {
      document.getElementById("succ-aff-text").innerHTML = success[Math.floor(Math.random() * success.length)];
  }
  
  document.getElementById("succ-button").addEventListener("click", succDaily);
  
  
  const happiness = [
    "I am filled with happiness and gratitude for all the blessings in my life.",
    "I have faith in the universe and trust that everything happens for a reason.",
    "I am filled with hope and optimism for the future.",
    "I let go of negative emotions and trust in my ability to heal and move forward.",
    "I release any past hurt and trust in my ability to create a happy future.",
    "I am grateful for the good in my life and focus on the positive.",
    "I trust in my ability to handle any situation with grace and let go of any fear or anxiety."
    ]
  
  function happDaily() {
    document.getElementById("happ-aff-text").innerHTML = happiness[Math.floor(Math.random() * happiness.length)];
  }
  
  document.getElementById("happ-button").addEventListener("click", happDaily);
  
  
  const abundance = [
    "I am worthy and deserving of abundance in all areas of my life, including wealth and money.",
    "I trust in my ability to manifest abundance and prosperity.",
    "I am open to new opportunities for financial growth and success.",
    "I am grateful for the abundance of wealth and resources that flow into my life.",
    "I release any limiting beliefs about money and trust in my ability to attract abundance.",
    "I believe in my creativity and trust in my ability to generate new ideas and opportunities for financial success.",
    "I am confident in my ability to create a prosperous and abundant life for myself and those around me." 
    ]
  
  function abunDaily() {
    document.getElementById("abun-aff-text").innerHTML = abundance[Math.floor(Math.random() * abundance.length)];
  }
  
  document.getElementById("abun-button").addEventListener("click", abunDaily);
  
  
  var buttons = document.getElementsByTagName('button');
  for(let i=0;i<buttons.length;i++){
      buttons[i].addEventListener('click', function(event){
          event.target.disabled = true;
      });
  }
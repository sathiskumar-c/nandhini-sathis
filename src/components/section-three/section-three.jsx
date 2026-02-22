import "./section-three.scss";

const SectionThree = () => {
  const birthdayText = `Happy Birthday Papa💎❤️, You are my life !!!

Happy Birthday, my loveee !, my partnerrr !, my wifeee!, my papaa !, my happinesssss !, my confidence !, my hope !, my bestfrienddduuu !!! and my everythinggggggg ! 💎♾️
Your presence has brought so much happiness and joy into my world, and I am endlessly grateful for you. You are the biggest blessing I've ever received, and every day with you is a gift. உங்களுக்கே தெரியும் என்னோட, எல்லாமும் நீ ! எல்லாமே நீ 😽

Your love has filled my life with warmth and happiness, and I cherish every moment we spend together. You are not just my girlfriend, but my partner, my confidante, and my best friend. I love you more than words can express. வார்த்தையால சொல்ல முடியாத காதல், அன்பு, பாசம் உங்க மேல !!! ❤️

You are the only one who truly understands me, the one I trust with all my heart. Your love has transformed me in ways I never thought possible, and I am a better person because of you. Thank you for being the incredible woman that you are !!!🫶🏻 நீங்க இல்லாம நான் இல்ல, என்னுடைய எல்லாமே நீங்க தான் ♾️✨

On your special day, I want to shower you with all the love and affection you deserve. May this year be filled with endless blessings, laughter, and unforgettable memories. Although we can't celebrate together this year and the next, I look forward to every birthday after that, where we'll be together. I love you now and alwaysssss and foreverrr.

You don't know, even I don't know, that how much I love youuuu! 💎❤️🤌🏻 In every single situation I'm always there for you ! Be bold, be happy always, un Pacha ,un Venna mavan , your papa and your very best frienduuu sathisuuuuu always there for you thanga ponney !🫂 And I always trust you my nandhini you are my love , you are my soul and you are my life and you are my everything single thing of my life ♾️❤️💎

Born in 2005, turning 21 now — still the same beautiful soul 💖

மீண்டும் ஒரு முறை, இனிய பிறந்தநாள் வாழ்த்துக்கள் என் தேவதையே !💚🫶🏻💎

முதலும் நீ , முடிவும் நீ தான் என் உயிரே !❤️`;

  return (
    <section className="birthday-section component-parent">
      <div className="birthday-content">
        <div className="birthday-image">
          <img
            src="/images/all.jpg"
            alt="birthday"
            loading="lazy"
          />
        </div>
        <div className="birthday-text">
          <h1
            style={{
              color: "lightpink",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >  
            Happy 21<sup>st</sup> Birthday My Life ❤️🎂
          </h1>
          <p>{birthdayText}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
